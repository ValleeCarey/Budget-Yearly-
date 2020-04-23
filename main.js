const monthlyBill = (month) => {
  switch (month) {
    case 'january':
      return 3000
    case 'february':
      return 1200
    case 'march':
      return 600
         case 'april':
      return 245
    case 'may':
      return 250
    case 'june':
      return 1000
         case 'july':
      return 1000
    case 'august':
      return 1500
    case 'september':
      return 900
         case 'october':
      return 350
    case 'november':
      return 600
    case 'december':
      return 1000
}
};
//console.log(monthlyBill('december'))

const yearlyTotal = () =>
monthlyBill('january')+ monthlyBill('february')+
monthlyBill('march')+
monthlyBill('april')+
monthlyBill('may')+
monthlyBill('june')+
monthlyBill('july')+
monthlyBill('august')+
monthlyBill('september')+
monthlyBill('october')+
monthlyBill('november')+ monthlyBill('december');

const getBudget = () => {
  idealBill = 10000
  return idealBill * 2 
};
console.log(getBudget());
console.log(yearlyTotal());

const calculateYearlyTotal = () => {
  const year = yearlyTotal();
  const budget = getBudget();
  
  if (year === budget) {
    return ('Master budgeting!');
  } else if (year < budget) {
    return ('congratulations! you saved $' + (budget - year) + ' dollar(s) this year!');
  } else if (year > budget) {
    return ('you spent $' + (year-budget) +' dollar(s) this year, you need to slow down on spending!');
  } else {
    return ('Error, please drop me');
  } 
};
console.log(calculateYearlyTotal());
calculateYearlyTotal();
