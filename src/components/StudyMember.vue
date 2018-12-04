<template>
  <div class="study-member-page-container">
    <div class="filter-left">
      <div>스터디 지역</div>
      <div>스터디 요일</div>
      <div>스터디 횟수</div>
      <div>구성원 직업</div>
    </div>
    <div class="study-member-list-container">
      <div class="sort-order">
        <button>최신순</button>
        <button>마감임박순</button>
        <button>남은인원순</button>
      </div>
      <div class="study-member-list">
        <h2>스터디 모집</h2>
        <div>
          <div v-for="(data, index) in studyList" :key='index'>
            <div class="study-card-container" v-bind:class="{ 'study-recruit-end': data.made }">
              <div>
                <div class="study-title-container">
                  <h2>{{ data.title }}</h2>
                  <div>{{ data.description}}</div>
                </div>
                <div>
                  <div>
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <div>{{ data.minNumb }}~{{ data.maxNumb }}</div>
                  </div>
                  <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <div>
                  <div>{{ data.LeaderUserId}}</div>
                  <div>{{ data.createdAt }}</div>
                </div>
                <ul>
                  <li class="hashtag-item" v-for="(hashtag, index) in data.hashtags" :key='index'>
                    #{{ hashtag.name }}
                  </li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyMember',
  data(){
    return{
      studyList: null,
      isEnd : false
    }
  },
  mounted () {
    this.$http
      .get(this.$hostname)
      .then((result) => {
        this.studyList = result.data.payload.studies
      })
  },

  
}
</script>

<style scoped>
  .study-card-container{
    border-left: 6px solid #0080FF;
    width: 580px;
    margin-bottom: 1px;
  }
  .study-recruit-end{
    border-left: 6px solid #9b9b9b;
  }
  .study-title-container h2{
    font-size: 18px;
    font-weight: 700;
  }
</style>
