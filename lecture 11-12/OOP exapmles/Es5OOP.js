// Функция конструктор
function Apple(type) {
    this.type = type;
    this.color = "red";
}

// Добавление методов через прототип
Apple.prototype.getInfo = function () {
    return this.color + ' '
        + this.type + ' apple';
};


// Создание екземпляра "класа"
var apple = new Apple('macintosh');
apple.color = "reddish";
// вызов метода
apple.getInfo();




// Тоже самое
var apple = {
    type: '',
    color: "red",
    getInfo: function (type) {
        return this.color + ' '
            + this.type + ' apple';
    },
}
apple.color = 'reddish';
apple.getInfo('macintosh')

// incapsulation 
function Apple(type) {
    var _defaultType = 'none';
    this.color = "red";

    this.type = type || _defaultType;
}



// inheritance

// by closure
var myObj = (function ClosureInheritance() {
    var elem = 'secret';
    var tick = 0;
    var timer = '';
    return {
        token: '',
        public: function () {
            return elem + this.token
        }
    }
})()




function Semerenko() {
    this.color = "red";
}
Semerenko.prototype = new Apple();
Semerenko.prototype.constructor = Semerenko;

Semerenko.prototype.getInfo = function () {
    return '[Semerenko "' + this.color + '"]';
}



var a = Object.create(AddProperty)


//polymorfism

var banana = {};
banana.color = 'yellow';
banana.type = 'just banana';

apple.getInfo.call(banana);

