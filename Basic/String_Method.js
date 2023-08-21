let s = "My Name is Saikot";
let slic = s.slice(11,17); //select from  index to after last index
// let slic = s.slice(8); when we select one index it means form selected to last index
let x = "Badsha is a good boy";
let sb = x.substring(7);
let y = "Dhoni from India"
let str = y.substr(6,10); //The difference is that the second parameter specifies the length of the extracted part.
let rep = str.replace("India", "Bangladesh"); //Remember replace only check the first match and replace it.
console.log (slic,sb,rep);
// replace function also case sensitive. If we need avoid case sensitive then we should use i flag;;
let m = "Bangladesh BANGLADEsh BaNgladesh India Spain Italy USA";
console.log("Before replace: ", m);
let n = m.replace(/BanglaDesH/ig, "France");
console.log("After using 'i & g' flag then replace: ", n);
let f = n.replace(/France/g, "Brazil"); // g for global. it will replace all word that I need;;
console.log("After using 'g' flag then replace: ", f);
let r = "I love india. India is a good country. I born in india.";
console.log("Before replaceAll: ", r);
let ra = r.replaceAll(/India/ig, "Bangladesh");
console.log("After ReplaceAll: ", ra);

let t1 = "Hello";
let t2 = "World";
let t3 = t1.concat(" ",t2); //concat two string; 
let t4 = t3.toUpperCase(); // make upper case all string;
console.log(t4);
let t5 = t4.toLowerCase(); // make lower case all string;
console.log(t5);

let tr = "      Hello I am from dhaka";
let trm = tr.trim();
/*Trim will work for remove unusual spaces. trimStart will use remove space before string and trimEnd for after string*/
console.log(trm);

let num = 5;
let nm = num.toString();  //convert int to string 
let pd = nm.padStart(4,"0"); //add "0" before 5;
console.log(pd);
let pe = nm.padEnd(4,"0"); // add "0" after 5;;
console.log(pe);