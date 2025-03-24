export default defineWebSocketHandler({
    open(peer) {
        peer.subscribe('nuxters')
        peer.send({ nuxters:  peer.peers.size })
        peer.publish('nuxters', { nuxters:  peer.peers.size })
    },
    message(peer, message) {
        const reaction = message.data.toString()
        peer.send({ reaction })
        peer.publish('nuxters', { reaction })
    },
    close(peer) {
       peer.publish('nuxters', { nuxters:  peer.peers.size })
       peer.unsubscribe('nuxters')
    },
})