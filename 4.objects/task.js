function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){
        this.marks = [...marks];   
    } else {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if(this.marks === undefined){
        return 0;
    } else {
        return this.marks.reduce((acc, marks) => acc + marks / this.marks.length, 0);
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
