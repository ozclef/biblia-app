//  import bible from "/data/biblia.json";
// import bible from "data/biblia.json";

const bible = await loadJSON("JSON/rvg.json");

if(route === "bible") html += viewBible(bible);

function Bible() {
  return  `
    <div class="card-post">
      <h1>Biblioteca bíblica</h1>

      {bible.books.map(book => (
        <div key={book.id}>
          {book.name}
        </div>
      ))}
    </div>
  `;
}

   render ();
export default Bible;
