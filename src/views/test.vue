<template>
  <div>
    test
    <span v-if="defer(1)">12312</span>
    <span v-if="defer(2)">12312</span>
    <span v-if="defer(3)">12312</span>
    <span v-if="defer(4)">12312</span>
    <button @click="displayPriority++">displayPriority++</button>
    <button @click="n++">displayPriority++</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayPriority: 0,
      n:'1'
    }
  },
  methods: {
    defer (priority) {
      console.log('defer go')
      return this.displayPriority >= priority
    }
  }
}
</script>
