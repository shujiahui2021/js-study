function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.setName = function(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setAge = function() {
    this.age = age;
}

Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.display = function() {
    console.log("name: ", this.name, "age: ", this.age);
}

let p = new Person("jiahui", 12);
p.display();