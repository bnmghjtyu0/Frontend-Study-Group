<template>
  <div>
    <div class="d-grid">
      <div v-for="item in datas" :key="item.id">
        <div>
          <a :href="item.url" target="_blank">
            <img :src="require('@/assets/' + item.imgUrl)" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const apiDatas = [
  {
    title: 'vuex 教學',
    url:
      'https://www.youtube.com/playlist?list=PL1TrjkMQ8UbVSDkDaLkjpeNGkblNU8rpW',
    imgUrl: 'vuex.jpg'
  }
]

export default {
  name: 'LearnGarden',
  data() {
    return {
      msg: '123',
      datas: apiDatas
    }
  }
}
</script>
