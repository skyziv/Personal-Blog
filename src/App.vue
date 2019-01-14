<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <foot-button></foot-button>
  </div>
</template>

<script>
import button from './components/button.vue'
import nav from './components/nav.vue'
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
     'navbar': nav,
     'foot-button': button
  }
}
</script>

<style scoped>
    
</style>
