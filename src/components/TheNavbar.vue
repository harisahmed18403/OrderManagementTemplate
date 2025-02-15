<template>
    <el-menu
        mode="horizontal"
        :default-active="activeIndex"
        @select="handleSelect"
    >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Orders</el-menu-item>
    <el-sub-menu index="3">
        <template #title>Actions</template>
        <el-menu-item index="3-1">Action 1</el-menu-item>
        <el-menu-item index="3-2">Action 2</el-menu-item>
    </el-sub-menu>
    </el-menu>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();
const activeIndex = ref('1');

const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)

  if(key == '1'){
    router.push('/');
  }
  else if(key === '2'){
    router.push('/orders');
  }
}
</script>