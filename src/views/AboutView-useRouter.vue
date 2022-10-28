<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">返回</button>
  </div>
</template>

<style></style>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter() // 可以借助router进行编程式导航跳转
const route = useRoute() // 可以借助router获取参数|路径
const back = () => {
  // router.push('/')
  router.back()
}
onMounted(() => {
  console.log('route--->', route.path, route.params)
})
</script>
