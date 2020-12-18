<template>
  <div class="container">
      <button @click="increment">加一</button>
      <button @click="decrement">减一</button>
      <button @click="incrementOdd">偶数加+1</button>
      <button @click="incrementAsync">延时一秒加一</button>
      <p>{{count}}</p>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default {
  name: '',

  computed:{
    ...mapState(["count"])
  },
  
  methods:{
    ...mapActions(['increment','decrement','incrementOdd','incrementAsync'])
  }
}
</script>

<style scoped>

</style>
