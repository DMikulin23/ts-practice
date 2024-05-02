class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}
class ElectronicBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }
    getSummary() {
        return `${super.getSummary()}, available in ${this.format} format`;
    }
}
const book1 = new Book('Harry Potter', 'J.K. Rowling', 1997);
console.log(book1.getSummary());
const ebook1 = new ElectronicBook("JavaScript: The Good Parts", "Douglas Crockford", 2008, "PDF");
console.log(ebook1.getSummary());
