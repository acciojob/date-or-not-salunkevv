var isDate = function (date) {
  //   write your code here
	return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
};

//Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

