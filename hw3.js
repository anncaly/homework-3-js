// task 1

function splitAndMerge(str, sp) {
	const words = str.split(' ');
	const arr = [];
	let result;
  
	for(let i = 0; i < words.length; i++) {
  		let letter = words[i].split('').join(sp);
    	arr.push(letter);
    	result = arr.join(' ');
  	}
  	return result;
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

// task 2

function convert(hash) {
	let arr = [];
	for(let key in hash) {
		arr.push([key, hash[key]]);
  	}
  	return arr;
}
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

// task 3

function toCamelCase(str) {
	const words = str.split(/[_-]/);
 	return words.map(function(word) {
	    if(words.indexOf(word) > 0) {
	       return word[0].toUpperCase() + word.substr(1);
	    } else {
	      	return word;
	    }
	}).join("");
}
console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the_stealth-Warrior")); 

// task 4

function reverseWord(str) {
	const words = str.split(" ");
  	return words.map(function(word) {
  		return word.split("").reverse().join("");
  	}).join(" ");
}	
console.log(reverseWord(" A fun little challenge! "));

// task 5

function stringExpansion(str) {
    let st = str.split("");
    let res = "";
    for(let i = 0; i < st.length; i++) {
   		if(!isNaN(st[i])) {
    		if(isNaN(st[i+1])) {
      			res += st[i+1].repeat(Number(st[i]-1));
      		}
   		} else {
    		res += st[i];
    	}
    }
    return res;
}
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));