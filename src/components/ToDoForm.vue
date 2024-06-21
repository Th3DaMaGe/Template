<template>
    <div>
        <form @submit.prevent="">
            <input type="text" v-model="toDo" />
            <button type="submit" @click="">Add</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToDoListStore } from "@/stores/toDoList"


const toDo = ref('')
const store = useToDoListStore()

function addItemAndClear(item) {
    if (item.length === 0) {
        return
    }
    store.addTo(item)
    todo.value = ''
}

</script>



<style scoped></style>