function fibs(n) {
    let fibs = [0, 1];
    for (let i = 2; i < n; i++) {
      fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    return fibs;
  }
  
  function fibsRec(n) {
    if (n <= 2) return [0, 1].slice(0, n);
    let fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
  }
  
  console.log(fibs(8));
  console.log(fibsRec(8));
  