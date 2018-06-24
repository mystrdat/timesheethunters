<template>
  <div id="app">
    <div class="viewport">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'styles/config.scss';
@import 'styles/utils.scss';

html, body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

#app {
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
}

.viewport {
  max-width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  @include aspect-ratio($app-width, $app-height);
}
</style>
