//  Criando um Objeto

let bookTitle = 'Atomic Habitcs'
let bookAutor= 'James Clear'
let bookPages = 306

const book = {
    bookTitle: 'Atomic Habitcs',
    bookAutor: 'James Clear',
    bookPages : 306,
    bookChapter: {
        chap1: 'Fundamentals',
        chap2: '1st law',        
    },
    printBook: function() {
        console.log('Printing...')
    }
}
book.printBook()





