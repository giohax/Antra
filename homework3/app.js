"use strict"


//1
function reverseNum(num) {
    console.log( (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)) );
}


//2
function isPalindrome(word) {
    let arr = word.split('');
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    while(leftIdx < rightIdx) {
        if(arr[leftIdx] != arr[rightIdx]) {
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
}


//3
function generateString(word) {
    let combinations = [];
    for(let i = 0; i<word.length; i++) {
        for(let j = i + 1; j<word.length + 1; j++) {
            combinations.push(word.slice(i, j));
        }
    }
    return combinations
}


//4
function alphabeticalOrder(word) {
    let arr = word.split('');
    arr.sort();
    return arr.join('');
}


//5
function upperCase(word) {
    let arr = word.split(' ');
    let newWord = []
    arr.forEach(element => {
        let capitalized = element.charAt(0).toUpperCase() + element.slice(1);
        newWord.push(capitalized);
    });
    return newWord.join(' ');

}

//6
function longestWord(word) {
    let splitted = word.split(' ');
    let largest = splitted.at(0);
    for(const el of splitted) {
        if(el.length > largest.length) {
            largest = el;
        }
    }
    console.log(largest);
}


//7
function numberVowels(word) {
    const map = new Map();
    map.set('a', true);
    map.set('e', true);
    map.set('i', true);
    map.set('o', true);
    map.set('u', true);
    let count = 0;
    const splitted = word.split('');
    splitted.forEach((e) => {
        if(map.get(e)) {
            count++;
        }
    });
    return count;
}


//8
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i == 0) return false;
    }
    return num >= 2;
}


//9
function checkType(args) {
    return typeof args;
}


//10
function identityMatrix(n) {
    let i;
    let j;

    let matrix = [];

    for(i=0; i<n; i++){
        for(j=0; j<n; j++) {
            if(i==j) {
                matrix.push(1);
                console.log(' 1 ');
            }
            else {
                matrix.push(0);
                console.log(' 0 ');
            }
        }
    }
    return matrix;

}


//11
function second(arr) {

    let secondLowest;
    let secondGreatest; 

    if(arr.length < 4) {
        console.log('Enter a number at least 4');
    } else {
        arr.sort();
        secondLowest = arr[1];
        secondGreatest = arr[arr.length - 2];
    }

    return [secondLowest, secondGreatest];
}


//12

function isPerfect(num) {
    let facts = factors(num);
    let sum = 0;
    facts.forEach((num) => {
        sum = sum + num;
    });
    if((sum / 2) === num) {
        return true;
    }
    return false;
}


//13
function factors(n) {
    let numfactors = [];
    for(let i = 1; i < n; i++) {
        if( n % i === 0) {
            numfactors.push(i);
        }
    }
    numfactors.push(n);
    return numfactors;
}


//14
function convertToCoins(target, arr) {
    arr.sort((a, b) => { return a - b});
    let coinsUsed = [];
    let targetSum = target;
    let idx = arr.length - 1;
    while(targetSum > -1 && idx > -1) {
        let currentNum = arr.at(idx);
        while( (targetSum-currentNum) >= 0 ){
            targetSum = targetSum - currentNum;
            coinsUsed.push(currentNum);
        }
        idx--;
    }
    console.log( coinsUsed);
}



//15
function computeValue(base, number) {
    let sum = parseInt(base);
    for(let i = 0; i < parseInt(number) - 1; i++) {
        sum = sum * parseInt(base);
    }
    return sum;
}
// let base = window.prompt("Enter a base number: ");
// let exponent = window.prompt("Enter an exponent number: ");
// console.log(computeValue(base, exponent));

//16
function uniqueChars(word) {
    const set = new Set();
    let splitted = word.split('');
    let newWord = '';
    splitted.forEach((element) => {
        set.add(element);
    });

    set.forEach((element) => {
        newWord = newWord.concat(element);
    });

    return newWord;

}

//17
function occurance(word) {
    const num = new Map();
    let splitted = word.split('');
    splitted.forEach((element) => {
        if(num.has(element)) {
            num.set(element, num.get(element) + 1);
        } else {
            num.set(element, 1);
        }
    });
    return num;
}

//18
function binarySearch(arr, target) {
    return binarySearch(arr, target, 0, array.length - 1);
}
function binarySearch(arr, target, left, right) {
    let mid
    while(left <= right) {
        mid = (left + right) / 2;
        if(array[mid] == target) return mid;
        if(array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

//19
function largerThan(arr, target) {
    let largerValues = [];
    arr.forEach((element) => {
        if(element > target) {
            largerValues.push(element);
        }
    })
    return largerValues;
}



//20
function generateStringId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let charactersLength = characters.length;
    for(let i = 0; i<length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


//21
function subset(arr , target) {

}

//22
function countStr(string, letter) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}

//23
function getNonRepeating(string) {
    const map = new Map();
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);        
        }
    }
    for(let i = 0; i<string.length; i++){
        let char = string.charAt(i);
        if(map.get(char) === 1) {
            return char;
        }
    }
}

//24
function bubbleSort(arr) {
    if(arr.length === 0 ) {
        return [];
    }
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



//25
function longestCountry(countryList) {
    if(countryList.length === 0) {
        return null;
    }
    const map = new Map();
    countryList.forEach((element) => {
        map.set(element, element.length);
    });
    
    let largest = 0;
    let largestCountry = map[0];
    map.forEach((value, country) => {
        if(value > largest) {
            largest = value;
            largestCountry = country;
        }
    });
    return largestCountry;
 
}

//26
function longestSubstring(string) {
    const lastSeen = {};
    let longest = [0, 1];
    let startIdx = 0;
    for(let i = 0; i < string.length; i++) {
        const char = string[i];
        if(char in lastSeen) {
            startIdx = Math.max(startIdx, lastSeen[char] + 1);
        }
        if(longest[1] - longest[0] < i + 1 - startIdx) {
            longest = [startIdx, i + 1];
        }
        lastSeen[char] = i;
    }
    return string.slice(longest[0], longest[1]);
}



//27
function longestPalindromeSubstring(string) {
    let currentLongest = [0 , 1];
    for(let i = 1; i < string.length; i++) {
        const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
        const even = getLongestPalindromeFrom(string, i - 1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    return string.slice(currentLongest[0], currentLongest[1]);
}
function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
    while(leftIdx >= 0 && rightIdx < string.length) {
        if(string[leftIdx] != string[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
}


//29
let func1 = function() {
}
let func2 = func1.name;
console.log(func2);








