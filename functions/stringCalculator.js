function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numArray = numbers.split(new RegExp(`[${delimiter}\n]`));

  const sum = numArray.reduce((acc, num) => {
    const parsedNum = parseInt(num, 10);
    return acc + parsedNum;
  }, 0);

  return sum;
}

module.exports = add;
