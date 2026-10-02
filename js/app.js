import bible from "./data/biblia.json";

function App() {
  return (
    <main>
      <h1>Biblioteca bíblica</h1>

      {bible.books.map(book => (
        <div key={book.id}>
          {book.name}
        </div>
      ))}
    </main>
  );
}

export default App;
