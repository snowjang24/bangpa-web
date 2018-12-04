<template>
<div>
    <form @submit.prevent="sendPost">
        <div>닉네임</div>
        <input type="text" placeholder="닉네임을 입력하세요" v-validate="'min:5'" v-model.lazy="nickName" name="nickName">
        <p class="alert" v-if="errors.has('nickName')">{{ errors.first('nickName') }}</p>
        <div>이메일</div>
        <input type="text" placeholder="이메일을 입력하세요"  v-model.lazy.trim="email">
        <div>패스워드</div>
        <input type="current-password" placeholder="패스워드를 입력하세요"  v-model.lazy="password">
        <div>카카오톡아이디</div>
        <input type="text" placeholder="카톡아이디를 입력하세요"  v-model.lazy.trim="snsId">
        <div>직업군</div>
        <select v-model="job">
            <option disabled value="">직업군을 선택하세요</option>
            <option>대학생</option>
            <option>취준생</option>
            <option>직장인</option>
        </select>
        <input v-on:click="onLinkClicked()" type="submit" value="Submit">
        <div>
            {{ nickName }}
            {{ email }}
            {{ password }}
            {{ snsId }}
            {{ job }}
        </div>
    </form>
</div>
   
</template>
<script>
export default {
    data(){
        return{
            idMakeSucc: false,
            nickName: null,
            email: null,
            password: null,
            snsId: null,
            job: null
        }
    },
    methods:{
        sendPost: function (){
            var config = { headers: {'Content-Type': 'application/json'}};
            this.$http.post(this.$hostname+'/auth/join', {
                    nick: this.nickName,
                    email: this.email,
                    password: this.password,
                    snsId: this.snsId,
                    job: this.job 
                },
                config)
            .then(response => {
                if (response.status == 201){
                    this.idMakeSucc = true;
                }
            })
            .catch(error => {
                console.log(error)
            })
        },
        onLinkClicked() {
            if(!this.idMakeSucc) {
                this.$router.push({ name: 'studymember', query: { redirect: '/' } });
  }
}
    }
    
}
</script>
<style scoped>
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
</style>
