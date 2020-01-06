<template>
  <fragment>
    <div class="d-grid">
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
      <Card message="From parent" />
    </div>
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
