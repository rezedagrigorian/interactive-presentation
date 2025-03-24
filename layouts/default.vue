<template>
  <div class="site-container">
    <header class="site-header">
      <div class="header-bg" />
      <nav>
        <ul>
          <li>
            <nuxt-link to="/" class="nav-link">
              <Icon name="fluent-mdl2:home" class="nav-icon" />
              <span>Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/livedemo" class="nav-link">
              <Icon name="fluent-mdl2:play" class="nav-icon" />
              <span>Live emoji party</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #f18eaa;
  --secondary-color: #ffc2d1;
  --accent-color: #a786df;
  --text-color: #ffffff;
  --content-bg: #fff7f9;
  --shadow-color: rgba(241, 142, 170, 0.3);
  --border-radius: 20px;
}

body {
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background-color: var(--content-bg);
  color: #333;
}

.site-container {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

.site-header {
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  z-index: -1;
}

nav {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
}

nav ul li {
  padding: 0;
  margin: 0;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.2rem;
}

.content {
  flex: 1;
  position: relative;
  max-width: 100%;
  min-height: 90vh;
}

.content-wrapper {
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: 0 10px 30px var(--shadow-color);
  position: relative;
  z-index: 1;
  border: 1px solid rgba(241, 142, 170, 0.1);
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}
</style>