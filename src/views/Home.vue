<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="push">goPushAbout</button>
    <button @click="push2">goPushAbout2</button>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    push(){
      this.$router.push({
        name:'About',
        // 不传id 导航不到/about
        params:{
          name:1
        }
      })
    },
    push2(){
      this.$router.push({
        name:'About2',
      })
    }
  }
}
</script>
