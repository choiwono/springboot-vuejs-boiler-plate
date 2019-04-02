<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h3 v-for="list in lists" :key="list.id">
      {{ list.tagName }}
    </h3>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      //lists: []
    }
  },
  /*created(){
    this.$http.get('/api/tag/list').then(resp => {
      this.lists = resp.data.response
    })
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight:900;
}
</style>
