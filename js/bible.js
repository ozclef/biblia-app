//  import bible from "/data/biblia.json";
// import bible from "data/biblia.json";

const bible = await loadJSON("JSON/rv_1858.json");
const bible = await loadJSON("JSON/rv_1909.json");
const bible = await loadJSON("JSON/rv_1909_strongs.json");
const bible = await loadJSON("JSON/rvg_2004.json");
const bible = await loadJSON("JSON/sagradas.json");
const bible = await loadJSON("JSON/rvg.json");
if(route === "bible") html += viewBible(rvg);
//   if(route === "bible") html += viewBible(rvg);


localStorage.setItem("version", "rvg");
localStorage.setItem("lastBook", "book");
localStorage.setItem("lastChapter", 0);
/////  1er   brrador 

async function Bible(rvg) {
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

///   RENDER TXT  
const texto = await loadTXT("biblia txt/rv95-1.txt");
async function loadTXT(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`${path} ${res.status}`);
  }

  return await res.text();
}


  /*
  <select id="version">
  <option value="JSON/rvg.json">RVRG</option>
  <option value="JSON/rv_1909.json">RV 1909</option>
  <option value="JSON/rv_1858.json">RV 1858</option>
</select>
  */



///    SEPARRAR POR LINEAS contenido por 100  paginas 
      const lineas = texto.split("\n");
const pagina = lineas.slice(0, 100);
out += pagina.map(linea => `<p>${linea}</p>`).join("");

  
