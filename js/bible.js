import bible from "/data/biblia.json";

function Bible() {
  return (
    <div class="card-post">
      <h1>Biblioteca bíblica</h1>

      {bible.books.map(book => (
        <div key={book.id}>
          {book.name}
        </div>
      ))}
    </div>
  );
}

export default Bible;
