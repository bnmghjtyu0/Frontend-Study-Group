<template>
  <router-link to="/:123" class="Card super-card">
    <div class="super-card-head">
      <span class="badge badge-primary">{{ category }}</span>
      <h4 class="title">{{ title }}</h4>
    </div>
    <div class="super-card-body">
      {{ content }}
    </div>
    <div class="super-card-foot">
      <div class="left">{{ date }}</div>
      <div class="right"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: ['content', 'title', 'category', 'date']
}
</script>
