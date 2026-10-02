

//  ///

const app = document.getElementById("app");

async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}

async function render(){
  const hash = location.hash || "#/feed";
  const [_, route] = hash.split("/");


///// ESTE REEMPLAZABA:    const profile = await loadJSON("data/profile.json");
	 const bible = await loadJSON("JSON/rvg.json");
	/*
const profile = await loadJSON("data/profile.json") || {
    theme:"dark",
    name:"RV",
    bio:"Book",
    avatar:"img/Designer.png",
    cover:"https://ozclef.github.io/mis-versiculos-favoritos/"
};
	
async function loadJSON(path){
  try{
    const res = await fetch(path);

    if(!res.ok){
      throw new Error(`${path} ${res.status}`);
    }

    return await res.json();

  }catch(err){
    console.warn("No pude cargar:", path);
    return null;
  }
}

//*/
	

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
  <div><strong>
  <a href="https://ozclef.vercel.app">
  Os🎼Clef
  </a>
  </strong></div>	
  <h3>BIBLE APP 📙💻</h3>
  	<nav>
		<a href="#/feed">Feed</a>
		<a href="#/bible">BIBLE</a>
		<a href="#/post">Post</a>
		<a href="#/photos">Fotos</a>
		<a href="#/videos">Videos</a>  
		<a href="#/settings">Ajustes</a>
	</nav>
	</header>
  <div class="container">
  `;

  if(route === "feed") html += await viewFeed();
  if(route === "bible") html += viewBible(bible);	
  if(route === "post") html += await viewPost();
  if(route === "photos") html += viewPhotos();
  if(route === "videos") html += viewVideos();
  if(route === "settings") html += viewSettings(bible);

  html += `</div>`;
  app.innerHTML = html;
}

async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
	
  let out = `<div class="card-post"><h2>Feed</h2>`;
 feed.forEach(p=>{
    out += `
			 		
    <div class="feed-item" aling-items="column">
      <div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
		<img class="thumb" loading="lazy"  width="400"  height="360px"  src="${p.img}">
        <a class="btn" href="${p.url}">Abrir  URL</a>
		</div>
      </div>
	  `;
  });
  return out + `</div>`;
}
/*
function viewProfile(p){
  return `
<div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>
  <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@os.clef" data-unique-id="os.clef" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@os.clef?refer=creator_embed">@os.clef</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
  
<!---

  <div class="card-post">
  <iframe src="social/index.html"  width="97%" height="3503"></iframe>
  <iframe src="/feed/profile.html" width="97%" height="3503"></iframe>
  </div>
----->
  `;
}

*/


import bible from "JSON/rvg.json";
async function Bible() {
	return `	  
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

export default Bible;


async function viewPost(){

  return `
      <!---
   <div>	
	<iframe src="feed/post.html"   width="100%"        height="2000"></iframe>
	</div>
	  --->
    <div class="card-post">	
      <h2>Post</h2>
	  <iframe src="/meme/index.html"
        width="100%"
        height="1000px"
        style="border:none;"
        loading="lazy">
      </iframe>
	  <!---<div id="app2"></div>--->
    </div>
  `;
}


function viewPhotos(){
  return `
        <iframe src="/feed/fotos.html"
        width="100%"
        height="5000"
        style="border:none;"
        loading="lazy">
      </iframe>
	  `;
}

function viewVideos(){
  return `
  
  <div class="card">
        <h2>Videos devs en facebook/youtube... </h2>
<div id="videos"></div>
      <iframe src="/feed/videos.html"
        width="100%"
        height="3000"
        style="border:none;"
        loading="lazy">
      </iframe>
</div>
  `;
}

function viewSettings(p){
  return `
  <div class="card-post"><h2>Ajustes</h2>
    <p>Tema actual: <strong>${p.theme}</strong></p>
    <p>(En próxima versión editable desde UI)</p>
  </div>`;
}

window.addEventListener("hashchange", render);
render();
