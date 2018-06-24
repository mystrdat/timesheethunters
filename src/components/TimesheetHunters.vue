<template>
  <div class="view timesheethunters">
    <button v-on:click="toggleState">{{this.state === 0 ? "play" : "stop"}}</button>
    <AudioPlayer :state="state" v-on:update-progress="updateProgress" v-on:update-end="updateEnd"/>
    <div class="log">
      <span class="state">{{state}}</span>
      <span class="progress">{{progress}}</span>
    </div>
  </div>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue'

export default {
  name: 'TimesheetHunters',
  components: {
    AudioPlayer
  },
  data () {
    return {
      state: 0,
      progress: 0
    }
  },
  methods: {
    toggleState: function () {
      this.state = this.state === 0 ? 1 : 0
    },
    updateProgress: function (timestamp) {
      this.progress = timestamp
    },
    updateEnd: function (state) {
      this.state = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/utils.scss";
@import "../styles/config.scss";

.view {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transform: translate3d(0,0,0);
  will-change: transform;
  background-color: #fff;
}

.log {
  color: red;
}
</style>
