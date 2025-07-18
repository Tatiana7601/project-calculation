//TODO: 1. create tax for Kirchensteuer
// with state in array({state: ?, tax: ?})
// 2.* select with options for States
// 3.* design
const  taxForKirchensteuer = [  { state: "Baden-Württemberg", tax: 8 },
    { state: "Bayern", tax: 8 },
    { state: "Berlin", tax: 9 },
    { state: "Brandenburg", tax: 9 },
    { state: "Bremen", tax: 9 },
    { state: "Hamburg", tax: 9 },
    { state: "Hessen", tax: 8 },
    { state: "Mecklenburg-Vorpommern", tax: 9 },
    { state: "Niedersachsen", tax: 9 },
    { state: "Nordrhein-Westfalen", tax: 9 },
    { state: "Rheinland-Pfalz", tax: 8 },
    { state: "Saarland", tax: 9 },
    { state: "Sachsen", tax: 9 },
    { state: "Sachsen-Anhalt", tax: 9 },
    { state: "Schleswig-Holstein", tax: 9 },
    { state: "Thüringen", tax: 9 }];

taxButton.onclick = function () {
    const income = +document.getElementById('income').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;

    const federalTax = calculateFederalTax(income);
    const result = income - federalTax;

    const revenueEl = createInfoElement(`Revenue: ${result}`, "h3");
    const taxEl = createInfoElement(`Tax: ${federalTax}`, 'h3');
    const infoBox = document.createElement("div");
    infoBox.append(revenueEl, taxEl);
    const boxResult = document.getElementById("result-side");
    if (boxResult.lastElementChild.nextElementSibling) {
        boxResult.replaceChild(infoBox, boxResult.lastElementChild.nextElementSibling);
    } else {
        boxResult.append(infoBox);
    }

}


function calculateFederalTax(income) {
    let tax = 0;
    if (income <= 11784) {
        tax = 0;
    } else if (income <= 18000) {
        tax = income * 0.14;
    } else if (income <= 62810) {
        tax = income * 0.24;
    } else if (income <= 277825) {
        tax = income * 0.42;
    } else {
        tax = income * 0.45;
    }
    return tax;
}

