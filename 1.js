const num1 = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
const num2 = (num1*9/5)+32;

alert(`Цельсий: ${num1}, Фаренгейт: ${num2.toFixed(1)}`);