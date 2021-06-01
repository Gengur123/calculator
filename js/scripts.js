function converter(num1){
  return (num1 * (3.78));
  }
  const num1 = parseInt(prompt("Enter gallons to convert to liters"));
  const result = converter(num1).toFixed(1);
  alert(result +"liters");