<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import { ref, onMounted, computed, watch } from 'vue';

const todos = ref([]);
const name = ref('');

const input_content = ref('');
const input_category = ref(null);

const addTodo = () => {};
const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt;
  })
);

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
});

//let name = "test - Name"
/* export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
}); */
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">What's up, <input type="text" placeholder=" Name here" v-model="name" /></h2>
    </section>

    <section class="create-todo">
      <h3>Create a Todo</h3>

      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input 
          type="text" 
          placeholder="e.g. make a video" 
          v-model="input_content" />

          <h4>Pick a category</h4>

          <div class="options">
            <label>
              <input 
              type="radio"
              name="category"
              value="business"
              v-model="input_category"/>
              <span class="bubble business"></span>
              <div>Business</div>
            </label>

            <label>
              <input 
              type="radio"
              name="category"
              value="personal"
              v-model="input_category"/>
              <span class="bubble personal"></span>
              <div>Personal</div>
            </label>

          </div>
        {{ input_category }}

        <input type="submit" value="Add Todo" />
      </form>
    </section>
  </main>

  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
