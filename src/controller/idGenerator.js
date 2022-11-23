const generateId = function () {
  return Math.random()
    .toString(36)
    .split("")
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
    .join("")
    .substring(2, 8);
};

module.exports = generateId;
