<template>
    <div>
        <div>{{msg}}</div>
        <form @submit.prevent="onSubmit(email, password)">
            <div>이메일</div>
            <input type="text" placeholder="이메일을 입력하세요"  v-model.lazy.trim="email">
            <div>패스워드</div>
            <input type="current-password" placeholder="패스워드를 입력하세요"  v-model.lazy="password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>
<script>
export default {
      data(){
        return{
            email: '',
            password: '',
            msg: ''
        }
    },
    methods:{
        onSubmit(email, password) {
            this.$store.dispatch('LOGIN', {email, password})
            .then(() => this.redirect())
            .catch(({message}) => this.msg = message)
        },
        redirect() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>

</style>
