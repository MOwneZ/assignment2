import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

export class Calculator {
  constructor() {
    this.arrayLength = 0;
    this.correlation = 0;
    this.array1 = [];
    this.array2 = [];
  }
  getSum(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
  }
  getConvertArray(text) {
    return text.split(" ").map(Number);
  }
  getN2Sum(array) {
    let arrayLength = array.length;
    let total = 0;
    for (var i = 0; i < arrayLength; i++) {
      total += Math.pow(array[i], 2);
    }
    return total;
  }
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
  }
  getArraySquared(array) {
    let arrayLength = array.length;
    let total = 0;
    for (var i = 0; i < arrayLength; i++) {
      total += array[i] * array[i];
    }
    return total;
  }
  getMean(array) {
    let arrayLength = array.length;
    let sum = this.getSum(array);
    let mean = sum / arrayLength;
    return mean;
  }
  calculateStdDeviation(array) {
    let arrayLength = array.length;
    let sum = this.getSum(array);
    let mean = sum / array.length;
    let xMinusMean = 0;
    let xMinusMeanSq = 0;
    for (var x = 0; x < arrayLength; x++) {
      xMinusMean = array[x] - mean;
      xMinusMeanSq += xMinusMean * xMinusMean;
    }
    let stdDev = Math.sqrt(xMinusMeanSq / (arrayLength - 1));
    return stdDev;
  }
  calculateRegression(textArray1, textArray2) {
    this.array1 = this.getConvertArray(textArray1);
    this.array2 = this.getConvertArray(textArray2);
    this.arrayLength = this.array1.length;
    let xMean = this.getMean(this.array1);
    let yMean = this.getMean(this.array2);
    let xTimesY = this.getxTimesY(this.array1, this.array2);
    let xSquared = this.getArraySquared(this.array1);
    console.log(xMean, yMean, xTimesY, xSquared);
    let sigArray1 = xTimesY - this.arrayLength * xMean * yMean;
    let sigArray2 = xSquared - this.arrayLength * xMean * xMean;
    let beta1 = sigArray1 / sigArray2;
    let beta2 = yMean - beta1 * xMean;
    return "Beta 1: " + beta1 + " Beta 0: " + beta2;
  }
  calculateCorrelation(textArray1, textArray2) {
    this.array1 = this.getConvertArray(textArray1);
    this.array2 = this.getConvertArray(textArray2);
    this.arrayLength = this.array1.length;
    let array1Sum = this.getSum(this.array1);
    let array2Sum = this.getSum(this.array2);
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
    return "Correlation: " + finalCorrelation;
  }
}
