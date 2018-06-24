<template>
  <audio ref="player">
    <source :src="track" type="audio/ogg">
  </audio>
</template>

<script>
import track from '../assets/shirobon.ogg'

export default {
  name: 'TimesheetHunters',
  props: ['state'],
  data () {
    return {
      track: track
    }
  },
  mounted: function () {
    console.info('audio mounted')
    // Progress
    this.$refs.player.addEventListener('timeupdate', (e) => {
      this.$emit('update-progress', e.target.currentTime)
    })
    // End
    this.$refs.player.addEventListener('ended', (e) => {
      this.$emit('update-end')
    })
  },
  watch: {
    state: function (now, prev) {
      if (now === 0) {
        console.info('audio stopped')
        this.$refs.player.pause()
        this.$refs.player.currentTime = 0
      } else if (now === 1) {
        console.info('audio playing')
        this.$refs.player.play()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/utils.scss';
@import '../styles/config.scss';
</style>
