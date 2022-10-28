<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { key } from '@/keys'
provide(key, 'foo') // 若提供的是非字符串值会导致错误
</script>

<style lang="scss" scoped></style>
