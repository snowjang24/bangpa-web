<template>
    <div>
        <h2>Me</h2>
        <div>
            <label>User Info:</label>
            <pre>{{user}}</pre>
        </div>
        <div>
            <label>Access Log:</label>
            <div v-for="log in accessLog" :key='log'>{{log.userId}}, {{log.createdAt}}</div>
        </div>
  </div>
</template>
<script>
export default {
     data() {
        return {
            user: null,
            accessLog: []
        }
     },created() {
        this.$http.get(this.$hostname)
        .then(({data}) => (this.accessLog = data.accessLog))
    }

}
</script>
<style scoped>

</style>
