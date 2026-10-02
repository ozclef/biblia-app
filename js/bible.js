//  import bible from "/data/biblia.json";
// import bible from "data/biblia.json";

const bible = await loadJSON("JSON/rvg.json");

if(route === "bible") html += viewBible();

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
/// export default Bible;



function viewBible(bible) {
  let out = `
    <div class="card-post">
      <h1>Biblioteca bíblica</h1>
  `;

  if (!bible) {
    return out + `
      <p>No se pudo cargar la Biblia.</p>
    </div>`;
  }

  out += `<div class="bible-books">`;

  // Esto depende de la estructura REAL de rvg.json.
  // Primero necesitamos verla.
  
  return out + `
    </div>
  </div>`;
}

render ();


async function loadTXT(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`${path} ${res.status}`);
  }

  return await res.text();
}
