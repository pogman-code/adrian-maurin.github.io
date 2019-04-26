<template>
  <div class="about">
    <h2>With Sprinkles of</h2>
    <hr />
    <a class="techno" href="https://vuejs.org/">
      <div><img src="https://vuejs.org/images/logo.png" /></div>
      <div><hr /></div>
      <div>Vue.js</div>
    </a>

    <a class="techno" href="https://sass-lang.com/">
      <div>
        <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" />
      </div>
      <div><hr /></div>
      <div>Sass</div>
    </a>

    <a class="techno" href="https://fontawesome.com/">
      <div>
        <img
          src="https://www.drupal.org/files/project-images/font_awesome_logo.png"
        />
      </div>
      <div><hr /></div>
      <div>Font Awesome</div>
    </a>

    <a class="techno" href="https://eslint.org/">
      <div><img src="https://eslint.org/img/logo.svg" /></div>
      <div><hr /></div>
      <div>ESLint</div>
    </a>

    <a class="techno" href="https://code.visualstudio.com/">
      <div>
        <img src="https://code.visualstudio.com/apple-touch-icon.png" />
      </div>
      <div><hr /></div>
      <div>Visual Studio Code</div>
    </a>

    <a class="techno" href="https://github.com/">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        />
      </div>
      <div><hr /></div>
      <div>GitHub</div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.about {
  text-align: center;
}

hr {
  border: 1px solid red;
}

.techno {
  padding: 2em;
  margin: 1em;
  border: 1px solid #aaa;
  display: inline-flex;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

ul {
  list-style-type: none;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

img {
  height: 100px;
}
</style>
