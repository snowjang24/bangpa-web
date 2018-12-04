<template>
    <nav id="nav" class="nav-container">
        <div class="nav-logo-container">
            <a href="" class="nav-logo">bangpa</a>
            <div class="nav-search">
                <div class="hashtag-holder">
                    <ul>
                        <li class="hashtag-item" v-for="(data, index) in hashtags" :key='index'>#{{data.hashtag}}
                            <i class="fa fa-trash-o" v-on:click="remove(index)"></i>
                        </li>
                    </ul>
                </div>
                <form @submit.prevent="addHashtag">
                    <input type="text" placeholder="해시태그 검색" v-model="hashtag">
                </form>
                <button v-on:click="searchStart">적용</button>
            </div>
        </div>
        <div class="nav-menu">
            <div class="nav-list">
                <router-link to="/">스터디모집</router-link>
                <router-link to="/studyroom">스터디룸</router-link>
            </div>
            <div class="nav-login">
                
                <a href="" v-if="isAuthenticated" @click.prevent="onClickLogout">로그아웃</a>
                <router-link to="/login" v-else>로그인</router-link>
                <router-link to="/mypage" v-if="isAuthenticated">마이페이지</router-link>
                <router-link to="/join" v-else>회원가입</router-link>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'bangpa',
    data(){
        return{
            hashtag: '',
            hashtags:[
                { "hashtag": "swift" },
                { "hashtag": "ios"}
            ]
        }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
    },
    methods:{
        searchStart(){
            console.log(this.hashtags);
        },
        addHashtag(){
            this.hashtags.push({hashtag: this.hashtag.toLowerCase()});
            this.hashtag='';
        },
        remove(id) {
        this.hashtags.splice(id, 1);
        },
        onClickLogout() {
            // LOGOUT 변이 실행 후 리다이렉트
            this.$store.dispatch('LOGOUT').then(() => this.$router.push('/'))
        }
    }
}
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    #nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .nav-menu{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .nav-logo-container{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .nav-search{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 400px;
    }
    
    .hashtag-holder ul li i{
        color: #0080FF;
        cursor: pointer;
    }
    .nav-menu a{
        margin-right:6px;
    }
</style>


