//Задача 1. Печатное издание

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state (newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state () {
      return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      super (name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
      super (name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  //Задача 2. Библиотека

  class Library {
    constructor (name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book){
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
        }
        return null;
    }
  
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
      }
  }

  //Задача 3. Журнал успеваемости *

  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }

    addMark(mark, subject) {
        if (this.marks[subject] === undefined && mark >= 2 && mark <= 5) {
            this.marks[subject] = [];
            this.marks[subject].push(mark);
        } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
            this.marks[subject].push(mark);
          }
    }
    
    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject) === false) {
          return 0;
        }
        const averageRating = this.marks[subject].reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
            return averageRating;
    }
      
    getAverage() {
        if (Object.keys(this.marks).length === 0) {
          return 0;
        }
        let allSubjects = Object.keys(this.marks);
        for (let subject of allSubjects) {
            allSubjects[allSubjects.indexOf(subject)] = this.getAverageBySubject(subject);
        }
        const allAverageRating = allSubjects.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
            return allAverageRating;
    }
  }  