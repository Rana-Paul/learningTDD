function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";

  // handling custom delimiters
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbers = numbers.substring(delimiterEnd + 1);
  }

  // splitting the numbers based on the delimiter
  const numArray = numbers.split(new RegExp(`[${delimiter}\n]`));
  const negativeNumbers = [];

  const sum = numArray.reduce((acc, num) => {
    const parsedNum = parseInt(num, 10);

    // pushing negative numbers to an array
    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    }

    return acc + parsedNum;
  }, 0);

  // throwing an exception for negative numbers
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return sum;
}

module.exports = add;
