<template>
<div id="app">
  {{ info }}
</div>
</template>

<script>
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    this.$http
      .get('http://192.168.0.89:8002/v1')
      .then((result) => {
        this.info = result.data
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 560px;
}
</style>