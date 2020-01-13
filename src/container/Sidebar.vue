<template>
  <div class="sidebar">
    <div>
      <img :src="require('@/assets/' + 'three-pigs.jpg')" class="img-fluid" />
    </div>
    <ul>
      <li>
        <router-link to="/" active-class="active" exact>
          <div class="title">首頁</div>
        </router-link>
      </li>
      <li>
        <router-link to="/blog" active-class="active">
          <div class="title">學習 blog</div>
        </router-link>
      </li>
      <li>
        <router-link to="/learn-garden" active-class="active">
          <div class="title">學習資源</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
