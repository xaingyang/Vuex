<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中</h2>
    <h2 v-else-if="errMsg">请求失败 --- {{ errMsg }}</h2>
    <div
      v-else
      class="card"
      v-for="(user, index) in users"
      :key="user.username"
    >
      <a :href="user.userurl" target="_blank">
        <img :src="user.userimg" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data() {
      return {   
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      }
  },
  mounted(){
      this.$bus.$on('searchAjax',this.searchAjax)
  },

  methods:{
      async searchAjax(q){
          this.isFirst=false;
          this.isLoading=true;
          try{
              const response=await axios({
                  url:"https://api.github.com/search/users",
                  method:'get',
                  params:{
                      q,
                  }
              })

              this.isLoading=false
              this.users=response.data.items.map((item)=>({
                  username:item.login,
                  userurl:item.url,
                  userimg:item.avatar_url,
              }));
          }catch(error){
              this.isLoading=false;
              this.errMag=error.message
          }
      }
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
