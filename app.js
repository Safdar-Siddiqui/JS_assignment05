// ------------ Task 01  and 02 --------------
var num1 = +prompt("Please enter 1st number");
var num2 = +prompt("Please enter 2nd number");

var result= num1 + num2;

document.write("Sum of " + num1+ " and " +num2 + " is " + result + "<br>");

result = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + result + "<br>");

result = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + result + "<br>");

result = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + result + "<br>");

result = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + result + "<br>");


document.write("<hr> <hr>")


// ------------ Task 03 --------------

var a;
document.write("Value of variable after declaration is: " + a);
document.write("<br>")
a=5;
document.write("Initial value is: " + a + "<br>");

a++;
document.write("Value of variable after increment is: " + a + "<br>");

a = a+7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value of variable after decrement is: " + a + "<br>");

a = a%3;
document.write("Output: The Remainder is: " + a);

document.write("<hr> <hr>");


// ------------ Task 04 --------------

var ticketPrice= 600;
var totPrice= ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is: " + totPrice);


document.write("<hr> <hr>");


// ------------ Task 05 --------------

var table = +prompt("Enter a number for Multiplication Table");
var i = 1;

document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

i++;
document.write(table + " x " + i + " = " + (table*i) + "<br>");

document.write("<hr> <hr>")


// ------------ Task 06 --------------

var celsius = 36;
var fahrenheit = (celsius*9/5)+32;

document.write(celsius +"&#176;C is " + fahrenheit + "&#176;F");
document.write("<br>")

fahrenheit = 96.8;
celsius = (fahrenheit-32)*5/9;
document.write(fahrenheit +"&#176;F is " + celsius + "&#176;C");

document.write("<hr> <hr>")


// ------------ Task 07 --------------

var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var total = (item1*quantity1) + (item2 * quantity2) + shippingCharges;

document.write("Price of Item 1 is: " + item1 + "<br>");
document.write("Quantity of Item 1 is: " + quantity1 + "<br>");
document.write("Price of Item 2 is: " + item2 + "<br>");
document.write("Quantity of Item 2 is: " + quantity2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br>");
document.write("Total Cost of your order is: " + total + "<br>");

document.write("<hr> <hr>")


// ------------ Task 08 --------------

var totalMarks= 600;
var obtMarks= 450;
var percentage = obtMarks *100 / totalMarks;

document.write("Total Marks are: " + totalMarks + "<br>");
document.write("Obtained Marks are: " + obtMarks + "<br>");
document.write("Percentage is: " + percentage + "<br>");

document.write("<hr> <hr>")


// ------------ Task 09 --------------

var USD = 10; 
var SAR = 25;
var totCurrency = (USD * 104.80) + (SAR * 28);

document.write("<h2> Currency in PKR </h2>");
document.write("Total currency in PKR: " + totCurrency);

document.write("<hr> <hr>")


// ------------ Task 10 --------------

var val = 20;
var calc = (val+5) * 10 / 2;
document.write(calc);

document.write("<hr> <hr>")



// ------------ Task 11 --------------

var currentYear= 2023;
var birthYear = 1986;
var age= currentYear - birthYear;
document.write("Current year: " + currentYear + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Your age is: " + age + "<br>");

document.write("<hr> <hr>")


// ------------ Task 12 --------------

var radius = 20;
var pi=3.142;
var circumference = 2*pi*radius;
document.write("Radius of a circle is: " + radius + "<br>");
document.write("The Circumference is: " + circumference + "<br>");
var area = pi * radius * radius;
document.write("Total area of cirlce is: " + area);

document.write("<hr> <hr>")


// ------------ Task 13 --------------

var favSnack = "Chocolate Chip";
var currentAge = 15;
var estimatedAge = 65;
var amountPerDay = 3;
var totSnack = (estimatedAge - currentAge) * amountPerDay;

document.write("You will need " + totSnack + " " + favSnack + " to last you until the ripe old age of " + estimatedAge);

document.write("<hr> <hr>")

