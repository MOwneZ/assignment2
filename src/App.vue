<template>
  <div id="app">
    <InputArrays :setArrays="setArrays"></InputArrays>
    <h1>Correlation: {{ correlation }}</h1>
  </div>
</template>
<script>
import InputArrays from "./components/InputArrays";
import { Calculator } from "./main.js";
export default {
  name: "App",
  components: {
    InputArrays
  },
  data() {
    return {
      array1: [],
      array2: [],
      correlation: 0
    };
  },
  methods: {
    sendCalculator() {
      let theCalculator = new Calculator();
      this.correlation = theCalculator.calculateCorrelation(
        this.array1,
        this.array2
      );
    },
    setArrays(array1, array2) {
      this.array1 = array1;
      this.array2 = array2;
      this.sendCalculator();
    }
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
