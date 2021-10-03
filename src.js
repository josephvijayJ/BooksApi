const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

async function displayallBooks() {
  try {
    const data = await fetch('https://www.anapioficeandfire.com/api/books', {
      method: 'GET',
    });
    const books = await data.json();

    return books;
  } catch (error) {
    console.log(error, 'Data error . . .');
  }
}

// async function display5Characters() {
//   let characters = await displayallBooks();
//   characters.forEach((books) => {
//     // console.log(books.characters);
//     fetch(`'${books.character}'`).then((n) => {
//       console.log(n);
//     });
//   });
// }
// let toDisplaycharacter = display5Characters();

async function displayBooknames() {
  try {
    let allbooks = await displayallBooks();
    console.log(allbooks);
    allbooks.forEach((books) => {
      console.log(books.name);
      container.innerHTML += `<div class = "outline"><h3 class = 'title'>${books.name}</h3>
    <div class= " content-style push-effect">
    <h4>isbn :<span style="color:blue"> ${books.isbn}</span></h4>
    <h4>Number of Pages : <span style="color:red"> ${books.numberOfPages}</span></h4>
    <h4>Authors         : <span style="color:#457085">${books.authors}</span></h4>
    <h4>publisher       : <span style="color:#99617B">${books.publisher}</span></h4>
    <h4>Released        : <span style="color:#4A536F">${books.released}</span></h4>
    </div>
    <i class="fas fa-book-open"></i>
    </div>
    `;
    });
  } catch (error) {
    console.log(error, 'Something went wrong');
  }
}
displayBooknames();
console.log('Jose');
