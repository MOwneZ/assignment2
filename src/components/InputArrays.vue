<template>
  <div class="hello">
    <h1>Submit your array documents!</h1>
<h2>Upload your two documents.</h2>
    <input type="file" @change="onFileChange">
    <h3>{{ array1 }}</h3>
    <h3>{{ array2 }}</h3>
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
  data() {
    return {
      array1: '',
      array2: ''
    };
  },
  methods: {
    getCalculation(number) {
      let textArray1 = this.array1;
      let textArray2 = this.array2;
      this.setArrays(textArray1, textArray2, number);
    },
    onFileChange(e) {
      let files = e.target.files
      if (files.length) {
        this.loadNumbers(files[0])
      }
    },
    loadNumbers(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (this.array1 === '') {
          this.array1 = e.target.result
        }
        else {
          this.array2 = e.target.result
        }

      }
      reader.readAsText(file)
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
