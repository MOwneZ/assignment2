<template>
  <div id="app">
    <InputArrays></InputArrays>
  </div>
</template>

<script>
import InputArrays from "./components/InputArrays";

export default {
  name: "App",
  components: {
    InputArrays
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFC0CB;
  margin-top: 60px;
}
</style>
