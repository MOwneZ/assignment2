<template>
  <div class="hello">
    <h1>Enter your array, with each number separated by a comma.</h1>
    <input
      type="text"
      placeholder="Enter first array here"
      @keypress.enter.prevent
      ref="textArray1"
    >
    <br>
    <input
      type="text"
      placeholder="Enter second array here"
      @keypress.enter.prevent
      ref="textArray2"
    >
    <br>
    <button @click="getCalculation(1)">Calculate Correlation!</button>
    <button @click="getCalculation(2)">Calculate Regression!</button>
    <br>
    <button @click="clearAll()">clear all</button>
  </div>
</template>

<script>
export default {
  name: "inputArrays",
  props: {
    setArrays: Function
  },
  methods: {
    getCalculation(number) {
      let textArray1 = this.$refs.textArray1.value;
      let textArray2 = this.$refs.textArray2.value;
      this.setArrays(textArray1, textArray2, number);
    },
    clearAll() {
      this.$refs.textArray1.value = "";
      this.$refs.textArray2.value = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
