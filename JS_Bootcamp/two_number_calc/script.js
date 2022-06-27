const date = new Date();
const date_string = date.toDateString();
document.getElementById('date').innerHTML = "Date: " + date_string + " Time: " + date.toLocaleTimeString();


function calculate(){
    const first_number = document.getElementById('first-operand').value
    const second_number = document.getElementById('second-operand').value
    const operator = document.getElementById('operator').value

    if(first_number != "" && second_number != "" && operator == "+"){
            let result = parseFloat(first_number) + parseFloat(second_number);
            document.getElementById('result').value = parseFloat(result);
    } else if ((first_number && second_number != "") && (operator == "-")){
            let result = parseFloat(first_number) - parseFloat(second_number);
            document.getElementById('result').value = parseFloat(result);
    } else if ((first_number && second_number != "") && (operator == "/")){
            let result = parseFloat(first_number) / parseFloat(second_number);
            document.getElementById('result').value = parseFloat(result);
    } else if ((first_number && second_number != "") && (operator == "*")){
        let result = parseFloat(first_number) * parseFloat(second_number);
        document.getElementById('result').value = parseFloat(result);
    } else {
        alert('Enter a number in both fields to calculate')
    }
}