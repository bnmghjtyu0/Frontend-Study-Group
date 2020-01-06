<template>
  <fragment>
    <Card message="From parent" />
    <div>{{ msg }}</div>
  </fragment>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Blog',
  components: {
    Card
  },
  data() {
    return {
      msg: 'blog'
    }
  }
}
</script>
