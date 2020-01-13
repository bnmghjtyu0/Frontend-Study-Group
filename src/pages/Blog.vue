<template>
  <fragment>
    <h4 className="super-title mb-3">小紅帽的家</h4>
    <div class="d-grid">
      <div v-for="(item, index) in datas" :key="item.id">
        <Card
          :index="index"
          :title="item.title"
          :category="item.category"
          :content="item.content"
          :date="item.date"
        />
      </div>
    </div>
  </fragment>
</template>

<script>
import Card from '../components/Card.vue'
import axios from 'axios'
export default {
  name: 'Blog',
  components: {
    Card
  },
  data() {
    return {
      msg: 'blog',
      datas: []
    }
  },
  mounted() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://three-pigs.herokuapp.com/backend/articles'
      )
      .then(res => {
        this.datas = res.data.retData
      })
  }
}
</script>
