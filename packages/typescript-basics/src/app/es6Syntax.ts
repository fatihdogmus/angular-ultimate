export function es6Syntax() {
  const pizza = {
    name: "Peperonni",
    getName: () => {
      console.log(pizza.name);
    }
  };

  pizza.getName();

  const fn = () => {
    console.log("Hebele");
  };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  function multiply(a, b = 25) {
    return a * b;
  }

  console.log(multiply(2));
  console.log(multiply(2, 20));

}
