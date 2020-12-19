<template>
  <div>
      <button @click="increment">点击加一</button>
      <button @click="incrementOdd">奇数点击加一</button>
      <p>{{count}}</p>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  name: '',

  computed:{
      ...mapState(['count']),
  },

  methods: {
      ...mapActions(['increment','incrementOdd'])
  },
  
}
</script>

<style scoped>

</style>
