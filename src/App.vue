<template>
  <TheNavbar></TheNavbar>
  <el-main>
    <RouterView></RouterView>
  </el-main>
</template>

<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
</script>
