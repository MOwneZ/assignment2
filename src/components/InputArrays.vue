<template>
  <div>
    <div>
      <b-jumbotron
        header="Regression and Correlation Calculator"
        lead="Submit your two arrays please!"
      >
      <h3>Please upload only <b-badge>TWO </b-badge> files.</h3>
      </b-jumbotron>
      <input type="file" @change="onFileChange">
      <div>
    <h3>{{ array1 }}</h3>
    <h3>{{ array2 }}</h3>
    </div>
    <br>
    </div>
    <br>
    <br>
    <div>
  <b-button v-b-toggle.collapse-1 variant="primary">Click me for calculation options!</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <div class="border border-dark rounded" style="padding-top:1rem;padding-bottom:1rem;width:40rem;margin:0 auto;background-color:#C0C0C0">
    <b-button pill variant="primary" @click="getCalculation(1)" style="margin-left:1rem;margin-right:1rem;">Calculate Correlation!</b-button>
    <b-button pill variant="info" @click="getCalculation(2)" style="margin-left:1rem;margin-right:1rem;">Calculate Regression!</b-button>
    </div>
  </b-collapse>
</div>
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
