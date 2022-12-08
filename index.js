var valyuta = document.querySelector(".valyuta");


alert(`Welcome to our currency converter! If you want to convert your money(sum), Click the button "Ok".`);
var type = prompt(`We have three options to choose: a.dollar; b.euro; c.rubl. which currency do you prefer to convert? (enter the relevant letter)` );
var sum = Number (prompt (`Enter the amount of your sum.`));

var a = 11.257;
var b = 11.85;
var c = 180;

var dlrCnvrt = sum / a;
var eroCnvrt = sum / b;
var rblCnvrt = sum / c;


var dlrRslt = `You will have ${a} dollars`;
var eroRslt = `You will have ${b} euros`;
var rblRslt = `You will have ${c} rubls`;




if (type === "a") {
   valyuta.textContent = dlrRslt;
}
 else if (type === "b") {
    valyuta.textContent = eroRslt;
}
else if (type === "c") {
    valyuta.textContent = rblRslt;
}
else {
    valyuta.textContent = "Error! try again.";
}

