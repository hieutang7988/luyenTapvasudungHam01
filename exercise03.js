var numberA = +prompt("Nhập vào số A :");
var numberB = +prompt("Nhập vào số B : ");
function compareTwoNumber (numberA,numberB) {
    if (numberA > numberB) {
    } else {
        return(numberA + numberB);
    }
}
document.write( "Tổng hai số a và b : "+ compareTwoNumber(numberA,numberB));