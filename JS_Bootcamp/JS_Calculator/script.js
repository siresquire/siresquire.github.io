const date = new Date();
const date_string = date.toDateString();
document.getElementById('date').innerHTML = "Date: " + date_string + "  Time: " + date.toLocaleTimeString();

const number = document.getElementById('number').value;
const operator = document.getElementById('operator').value;

const display_field = document.getElementById('display');
const input_number = num => display_field.textContent += num;
const calculate = () => (display_field.textContent) ? display_field.textContent = parseFloat(eval(display_field.textContent)) : false;
const delete_button = () => display_field.textContent = display_field.textContent.substring(0, display_field.textContent.length - 1);
const all_clear = () => display_field.textContent = ' ';