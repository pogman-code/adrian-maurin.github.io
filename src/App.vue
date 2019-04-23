<template>
  <div id="app">
    <header>
      <h1>Adrian Maurin</h1>
      <div class="nav">
        <a href="https://www.linkedin.com/in/adrian-maurin-b3082931/"
          ><fa :icon="['fab', 'linkedin']"></fa> LinkedIn</a
        >
        |
        <a href="https://github.com/users/adrian-maurin"
          ><fa :icon="['fab', 'github']"></fa> GitHub</a
        >
      </div>
    </header>
    <router-view id="content" />
    <footer>
      <router-link to="/about" class="router-link">powered by...</router-link>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 7px;
  border-radius: 2px;
}

a:hover {
  background: darken(#3caa96, 5%);
}
</style>
