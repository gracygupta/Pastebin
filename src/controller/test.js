const str = "first\nsecond\nthird\n";
const result = str.split("\n");
console.log(result, result.length);

const result = data.split("\r\n");
id = gen_id();
console.log("id: ", id, result.length);
console.log(result);
res.cookie("data", result, {
  expires: new Date(Date.now() + mins),
  httpOnly: false,
});
