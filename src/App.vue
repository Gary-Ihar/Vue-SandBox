<template>
  <div id="app" class="container">
    <h1>Пользователи</h1>
    <div class="content">
     <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["getUsers"]),
  },
  async mounted() {
    this.getUsers();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: darkblue;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
h2 {
  margin-bottom: 20px;
   min-width: 300px;
}
button {
  outline: none;
  cursor: pointer;
  margin-left: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkblue;
  padding-bottom: 10px;
  min-width: 300px;padding-top: 10px;
  
}
li:last-child{
  margin-bottom: 0;
}
.link-btn {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: whitesmoke;
  transition: .5s ease;
}
.link-btn:hover { 
   border-radius: 15px;
}
.list {
  margin-bottom: 20px;
}
a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
<style scoped>

.content {
  display: flex;
  justify-content: space-between;
}
</style>
