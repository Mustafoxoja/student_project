// 1. foydalanuvchi abdullohni malumotlari ni yarating yaratgan malumotlarni oziga tenglab id va ismini ko'rsating
// let user = { name: "abdulloh", age: 7, lang: "uzbek", id: 1 };
// let { name, age, lang, id } = user;
// console.log(name, id);

// 2.ixtiyoriy 4 ta qiymat oling, va uni ozgaruvchiga tenglab, o'sha qiymatlarni ildizga chiqaring va standart yaxlitlang
// let number = [29, 48, 67, 98];
// let [a, b, c, d] = number;
// console.log(Math.round(Math.sqrt(a, b, c, d)));

// 3.2 ta ozgaruvchi, birida viloyat nomlari birida ismlar har biriga 3 tadan. 2 lasini shunday qilingki natijada 1 qatorda bo'lsin
// let bar = ["abdujalil", "asliddin", "bahora"];
// let bar1 = ["qashqadaryo", "sirdaryo", "daryo"];
// let result = [...bar, ...bar1];
// console.log(result);

// 4. 4 ta qiymat bor va ularni jamlab umumiy hisobini chiqaramiz
// function number(...num) {
//   return num.reduce((a, b) => a + b, 0);
// }
// let result = number(44, 24, 46, 88);
// console.log(result);

// 5.
// let number = [18, 13, 11, 15];
// let numbers = [24, 21, 26, 25];
// let result = [...number, ...numbers];
// console.log(result.sort());

// 6.
// function numbers(...number) {
//   return number.reduce((a, n) => a + n, 0);
// }
// let result = numbers(2, 4, 5, 1, 9, 7);
// console.log(result);

// 7;
// let student = ["azizbek", "adambek", "jahongir"];
// let professor = ["abduqodir", "abduvohid", "javohir", 1];
// result = student.concat(professor);
// console.log(result.sort());

// 8.
// let = talaba = ["Abdurahmon", "Akbarali", "Oybek"];
// let = ustolar = ["Bekzod", "Muhammad", "Jasur"];
// console.log(talaba);
// let result = talaba.push("Ali", "Akbar");
// console.log(talaba.sort());

// 9.
// let student = ["Abdumalik", "Abdulla", "Mustafo"];
// let special = ["34", "45", "98"];
// student.push("Baxrom");
// student.unshift("Diyorbek");
// console.log(student);
// console.log(student);

// 10;
// let phone = { name: "Iphone", brand: "Apple" };
// console.log(Object.keys(phone));
// console.log(Object.values(phone));
