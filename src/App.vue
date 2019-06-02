<template>
  <div id="app">
    <InputArrays :setArrays="setArrays"></InputArrays>
    <br>
    <h1 class="alert alert-success">{{ result }}</h1>
  </div>
</template>
<script>
import InputArrays from "./components/InputArrays";
import { Calculator } from "./main.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    InputArrays
  },
  data() {
    return {
      array1: [],
      array2: [],
      result: ""
    };
  },
  methods: {
    getCorrelation() {
      console.log("correlation");
      let theCalculator = new Calculator();
      this.result = theCalculator.calculateCorrelation(
        this.array1,
        this.array2
      );
    },
    getRegression() {
      console.log("regression");
      let theCalculator = new Calculator();
      this.result = theCalculator.calculateRegression(this.array1, this.array2);
    },
    setArrays(array1, array2, number) {
      this.array1 = array1;
      this.array2 = array2;
      if (number === 1) {
        this.getCorrelation();
      }
      if (number === 2) {
        this.getRegression();
      }
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
