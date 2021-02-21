<template>
  <div id="nav">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/stone-test">Stone laboratory Test</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
#nav {
  background-color: #42b983;
  padding: 10px;
  text-align: left;
  max-width: 30vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

}
</style>