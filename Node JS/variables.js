
// var type String, Integer and Float
var _names = 'Jose Ramon';
var _surnames = 'Hdez Vega';
var _age = 31;
var _salary = 510.98

console.log('Name: ' + _names  + ' ' + _surnames);
console.log('Age: ' + _age + ' years old');
console.log('Salary: ' + _salary + '$');

console.log('\n');

// var type Array
var _namesList = ['Jose Ramon', 'Claudia', 'Ramses', 'Maricusa'];

for (let _index = 0; _index < _namesList.length; _index++) {
  console.log('Index (' + _index + ') Name: ' + _namesList[_index]);
}

console.log('\n');

_index = 0;
for (let _value of _namesList) {
  console.log('Index (' + _index + ') Name: ' + _value);
  _index ++;
}

console.log('\n');

// JavaScript Object Notation (JSON)
var _worker = {
  _name : 'Jose Ramon',
  _surname : 'Hdez Vega',
  _completeName : function() {
    return this._name + ' ' + this._surname;
  },
  _age : 31,
  _activities : ['Software Developer', 'Software Ingeneer'],
  _salary : 510.98
};

console.log('Human Resources Worker Data:');
console.log('Name: ' + _worker._completeName());
console.log('Age: ' + _worker._age);
console.log('Activities:');

_index = 0;
for (let _value of _worker._activities) {
  console.log('  (' + _index + ') ' + _value);
  _index ++;
}

console.log('Salary: ' + _worker._salary);

console.log('\n');

// Objects Array
var _workers = [{
    _name : 'Jose Ramon',
    _surname : 'Hdez Vega',
    _completeName : function() {
      return this._name + ' ' + this._surname;
    },
    _age : 31,
    _activities : ['Software Developer', 'Software Ingeneer'],
    _salary : 510.98
  }, {
      _name : 'Ramses',
      _surname : 'Fernandez Bestia',
      _completeName : function() {
        return this._name + ' ' + this._surname;
      },
      _age : 31,
      _activities : ['Head of Department', 'Software Developer', 'Software Ingeneer'],
      _salary : 687.96
  }];

console.log('Human Resources Worker Data:');
console.log('\n');
for (let _value of _workers) {
  console.log('Name: ' + _value._completeName());
  console.log('Age: ' + _value._age);
  console.log('Activities:');

  _index = 0;
  for (let _offSet of _value._activities) {
    console.log('  (' + _index + ') ' + _offSet);
    _index ++;
  }

  console.log('Salary: ' + _value._salary);
  console.log('Accounting Note: ' + ((_value._salary > 550) ? 'Has a big Salary' : 'NOT has a big Salary'));

  console.log('\n');
}
