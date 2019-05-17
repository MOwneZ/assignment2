<template>
  <div class="hello">
    <h1>Enter your array, with each number separated by a comma.</h1>
    <h2>{{ errorText }}</h2>
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
    <button @click="calculateCorrelation($refs.textArray1, $refs.textArray2)">Calculate!</button>
    <button @click="clearAll()">clear all</button>
    <h3>Array 1: {{ message1 }}</h3>
    <h3>Array 2: {{ message2 }}</h3>
    <h3>array length: {{ arrayLength }}</h3>
    <h1>Correlation: {{ correlation }}</h1>
  </div>
</template>

<script>
export default {
  name: "inputArrays",
  props: {
    msg: String
  },
  data() {
    return {
      message1: "",
      message2: "",
      errorText: "",
      arrayLength: 0,
      correlation: 0,
      array1: [],
      array2: []
    };
  },
  methods: {
    getSum(array) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return array.reduce(reducer);
    },
    getConvertArray(text) {
      return text.split(" ").map(Number);
    },
    getN2Sum(array) {
      let arrayLength = array.length;
      let total = 0;
      for (var i = 0; i < arrayLength; i++) {
        total += Math.pow(array[i], 2);
      }
      return total;
    },
    getxTimesY(array1, array2) {
      let array1Length = array1.length;
      let array2Length = array2.length;
      let total = 0;
      for (var i = 0; i < array1Length; i++) {
        for (i = 0; i < array2Length; i++) {
          total += array1[i] * array2[i];
        }
      }
      return total;
    },
    calculateCorrelation(textArray1, textArray2) {
      this.array1 = this.getConvertArray(textArray1.value);
      this.array2 = this.getConvertArray(textArray2.value);
      if (
        this.array1.length === this.array2.length &&
        (this.array1.length >= 5 && this.array2.length >= 5)
      ) {
        this.arrayLength = this.array1.length;
        let array1Sum = this.getSum(this.array1);
        let array2Sum = this.getSum(this.array2);
        this.message1 = this.array1;
        this.message2 = this.array2;
        let x2 = this.getN2Sum(this.array1);
        let y2 = this.getN2Sum(this.array2);
        let xTimesY = this.getxTimesY(this.array1, this.array2);
        let n1 = this.arrayLength * xTimesY;
        let n2 = array1Sum * array2Sum;
        let n3 = this.arrayLength * x2 - array1Sum * array1Sum;
        let n4 = this.arrayLength * y2 - array2Sum * array2Sum;
        let n5 = n1 - n2;
        let n6 = n3 * n4;
        let n7 = Math.sqrt(n6);
        let n8 = n5 / n7;
        let finalCorrelation = n8 * n8;
        console.log(
          array1Sum,
          array2Sum,
          x2,
          xTimesY,
          y2,
          n1,
          n2,
          n3,
          n4,
          n5,
          n6,
          n7,
          n8
        );
        this.correlation = finalCorrelation;
      }
      if ((this.array1.length || this.array2.length) < 5) {
        this.errorText = "the arrays must be at least 5 numbers in size.";
      }
    },
    clearAll() {
      this.$refs.textArray1.value = "";
      this.$refs.textArray2.value = "";
      this.message1 = "";
      this.message2 = "";
      this.arrayLength = 0;
      this.array1Sum = 0;
      this.array2Sum = 0;
      this.errorText = "";
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
