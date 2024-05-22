const sum = (...nums) => {
  total = 0;

  nums.forEach((num) => {
    total += num;
  });

  return total;
};
