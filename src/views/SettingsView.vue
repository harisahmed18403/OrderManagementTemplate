<template>
    <el-switch
        v-model="darkMode"
        style="--el-switch-on-color: grey; --el-switch-off-color: grey"
        active-text="Dark"
        inactive-text="Light"
        @change="toggleDarkMode"
    ></el-switch>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useSettingsStore} from '../stores/settings'

const settings = useSettingsStore();
const darkMode = ref(settings.darkMode);

const toggleDarkMode = () => {
    settings.toggleDarkMode();
}
</script>