<template>
  <div>
    <div class="home">home</div>
    <router-link to="/list" class="home">跳转列表页</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>
