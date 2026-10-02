//  import bible from "/data/biblia.json";

import bible from "JSON/rvg.json";

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
