export {};

function algorithm1(n: number) {
  if (n <= 0) return;

  let auxArr = [0];
  if (n > 1) {
    auxArr.push(1);
  }

  for (let i = 2; i < n; i++) {
    auxArr.push(auxArr[i - 1] + auxArr[i - 2]);
  }

  auxArr.forEach((result) => console.log(result));
}

algorithm1(20);
