function writeLog(message, message2) {
    console.log(message)
    
    
    if(message) {
        console.log(message)
    }

    if(message2) {
        console.log(message2)
    }
}

writeLog(1,2);

function writeLog() {
    console.log(arguments)
}

writeLog(1,2,3,4,5,5,6,);

function writeLog() {
    var myString = '';
    for(var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
writeLog('log1', 'log2', 'log3', 'log4', 'log5', 'log6);

var isConfirm = confirm('Message');
console.log(isConfirm);

function cong(a,b) {
    return a + b;

}
var result = cong(2,8);
console.log(result);

function cong(a,b){
    return a.toString() + b.toString();
}
var result = cong(2,8);
console.log(result)

function showMessage() {

}

var showMessage = function() {
    
}
console.log(`toi la: ${showMessage} ${fgdfhf}`)


var myString = 'hoc js string method'
console.log(myString.length)
console.log(myString.indexOf('js',5))
console.log(myString.lastIndexOf('js')
console.log(myString.search('js'))

console.log(myString.slice(4, ))
console.log(myString.slice(4, 6))
console.log(myString.slice(0))
console.log(myString.slice(-3, -1))

console.log(myString.replace('js','javascrit'))
console.log(myString.replace(/js/g, 'javascrit'))

console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

console.log(myString.trim().length)

var languages = 'javascrit, PHP, RUBY';

console.log(languages.split(', '))//tach ra cac chuoi
console.log(languages.split(''))

const myString2 = 'Son Dang';
console.log(myString2.charAt(2))
console.log(typeof myString2.charAt(100))
console.log(myString2[2])

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'

var languages = [
    'JavaScript',
    'c',
    'PHP',
    'ruby',
     null,
     undefined,
     function(){

     },
];

console.log(languages)
var languages = new Array()

;
console.log(Array.isArray(languages))
console.log(languages[2])


var language = [
    'Javascript',
    'PHP',
    'Ruby',

];
console.log(language.toString())
console.log(language.join(' - '))
console.log(language.pop())
console.log(language)
console.log(language.push('Dart'))
console.log(language)
// console.log(language.shift())
// console.log(language)
// console.log(language.unshift('ruby'))
// console.log(language)
language.splice(1, 0, 'JS')//them chuoi JS vao vi tri 1
var language2 = [
    1,
    2,
]
console.log(language2.concat(language))//noi 2 chuoi
console.log(language.slice(1, 2))
console.log(language.slice(1 ))
console.log(language.slice(0))




var myInfo = {
    name: 'Duong Trinh',
    age: 18,
    address: 'Da Nang, VN'
};
var myKey = 'address'
myInfo.email = 'Duongtrinh@gamil.com'
myInfo['my-email'] = 'trinh@gamil.com'
console.log(myInfo.name);
console.log(myInfo['age']);
console.log(myInfo['address']);
delete myInfo.email;


//object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Nguyen', 'duong', 'avatar' );
var user = new User('son', 'dang', 'avatar');

console.log(author.constructor ===User);
console.log(user);

author.title = ' chia se';
user.comment = 'tai sao';
console.log(author);
console.log(user);
console.log(user.getName());
console.log(author.getName());

User.prototype.className = 'f8';


var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours() + 1;
var minute = date.getMinutes() + 1;
var second = date.getSeconds() + 1;
console.log(year)
console.log(month, day, hour, minute, second)
 
var myInfo = {
    name: 'duong trinh',
    age: 18,
    address: 'da nang',
};
for(var key in myInfo) {
    console.log(myInfo[key], key);
}

function run(object) {
    var arr = [];
    for(var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);

    }
    return arr;

};
console.log(run({name: 'Nguyen Van A', age: 16, email: 'nguyen@gmail'}));

var myInfo = {
    name: 'duong trinh',
    age: 18,
};
for(var value of Object.values(myInfo)) {
    console.log(value);
}



var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('nap the lan' + i);

    if (false) {
        isSuccess = true;
    }
}while (!isSuccess && i <= 3);


var myArray = [
    [1,2],
    [3,4],
    [5,6],
];

for (var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray.length; j++) {
        console.log(myArray[i][j]);
}
}


var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log([...(new Set(array))]);

function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
        
    }
   return num;
}
countDown(3)

function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start+1, end, cb);
    }
}

var array = ['js','php', 'ruby'];

loop(0, array.length, function(index){
    console.log('index: ', index);
});


var courses = [
    {
        id: 1,
        name:'a',
        coin: 0,

    },
    {
        id: 2,
        name:'b',
        coin: 0,
    },
    {
        id: 3,
        name:'c',
        coin: 0,
    },
    {
        id: 4,
        name:'d',
        coin: 0,
    }
];
var isFrees = courses.filter(function(cou,id) {
    console.log(id);
    return cou.coin === 0;
});
console.log(isFrees)


var courses = [
    {
        id: 1,
        name:'a',
        coin: 0,

    },
    {
        id: 2,
        name:'b',
        coin: 88,
    },
    {
        id: 3,
        name:'c',
        coin: 0,
    },
    {
        id: 4,
        name:'d',
        coin: 77,
    }
];

console.table(courses);
function coiHandler(acc, cur) {
    return acc + cur.coin;
}
var totalCoin = courses.reduce(coiHandler, 0);
console.log(totalCoin);



// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr) {
    var tatal = arr.reduce(function mymy(acc,abb) {
        acc[abb[0]]=abb[1];
        return acc
        
    },{})
    return tatal
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
