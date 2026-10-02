const bibleContainer = document.getElementById("bible");
const selector = document.getElementById("version");

async function loadBible(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`${path} ${res.status}`);
  }

  return await res.json();
}

async function showBible(path) {

  try {

    const bible = await loadBible(path);

    bibleContainer.innerHTML = viewBible(bible);

  } catch (error) {

    console.error(error);

    bibleContainer.innerHTML = `
      <div class="card-post">
        <h2>Error</h2>
        <p>No se pudo cargar esta versión.</p>
      </div>
    `;
  }
}


function viewBible(bible) {

  let out = `
    <div class="card-post">
      <h1>Biblioteca bíblica</h1>
      <div class="bible-books">
  `;

  /*
    AQUÍ vamos a recorrer bible
    cuando sepamos exactamente
    cómo está estructurado rvg.json.
  */

  return out + `
      </div>
    </div>
  `;
}


selector.addEventListener("change", () => {

  const ruta = selector.value;

  showBible(ruta);

});
