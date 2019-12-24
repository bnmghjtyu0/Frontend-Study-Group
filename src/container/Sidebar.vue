<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/day1">
          <a href="#">學習 blog</a>
        </router-link>
        <ul class="item">
          <li>
            <router-link to="/day2" class="active">
              <div class="title">redux-進階</div>
              <div class="date">20191209</div>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <caption>
          作業
        </caption>
        <ul>
          <li>
            <router-link to="/homework">
              <div class="title">20191209 redux-todolist</div>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>
