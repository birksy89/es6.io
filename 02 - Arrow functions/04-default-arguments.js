//  Method 1
function calculateBillVeryOld(total, tax, tip) {
    if (tax === undefined) {
        tax = 0.13
    }
    if (tip === undefined) {
        tip = 0.15
    }
    return total + (total * tax) + (total * tip);
}
const totalBillVeryOld = calculateBillVeryOld(100);
console.log(totalBillVeryOld);


//  Method 2
function calculateBillOld(total, tax, tip) {
    tax = tax || 0.13;
    tip = tip || 0.15;
    return total + (total * tax) + (total * tip);
}
const totalBillOld = calculateBillOld(100);
console.log(totalBillOld);


//  Method 3
function calculateBill(total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);
}
const totalBill = calculateBill(100, undefined, 0.15);
console.log(totalBill);

//Can pass "undefined" ^^^