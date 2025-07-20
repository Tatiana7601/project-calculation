export function calculateFederalTax(income, rate) {
    let tax = 0;
    if (income <= 12000) {
        tax = 0;
    } else if (income <= 20000) {
        tax = income * 0.6;
    } else if (income <= 35000) {
        tax = income * 0.12;
    } else if (income <= 50000) {
        tax = income * 0.18;
    } else if (income <= 70000) {
        tax = income * 0.24;
    }else {
        tax = income * 0.30;
    }
    const socialContributions = income * 0.2025;
    const churchTax = tax * rate;
    return {tax,
        socialContributions,
        churchTax,
        totalTax: tax + socialContributions + churchTax
    };
}
