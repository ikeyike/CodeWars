function positiveSum(arr) {
    return arr.reduce((sum, num) => {
      if (num > 0) {
        return sum + num;
      }
      return sum;
    }, 0); 
  }
  