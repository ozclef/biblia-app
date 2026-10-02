



### README inicial

# 📖 biblia-txt

----

###  otros repos:


https://github.com/ozclef/mis-versiculos-favoritos

----


## PERSONAL CODE VERSE <3

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/dd497345-d5b1-4d0b-b59e-1cb4ebff7bbf" />


----


** repositorio de fuentes/datos bíblicos** 


 repositorio de la **aplicación**, 
conservar el historial de adquisición,limpieza,
conversión y organización de los datos sin ensuciar el repo de la app.


 HTML/JS/JSON, puedes hacer primero una PWA vanilla;interfaz,
migrar el frontend con este proyecto, 
`src/main.jsx` + componentes también es perfectamente válido.


repo `biblia-txt`  principalmente
**biblioteca de datos + documentación**, no la aplicación.


Colección y repositorio de datos bíblicos en formatos de texto y datos estructurados, 
preparada para experimentación, consulta local y desarrollo de aplicaciones.

Este repositorio funciona como una **biblioteca de fuentes y datos** 
para proyectos personales de lectura, búsqueda, 
comparación y visualización de textos bíblicos.

> 🚧 **Proyecto en desarrollo.**
> Actualmente estoy recopilando, organizando y normalizando diferentes
fuentes y formatos antes de construir la aplicación final.

---

## 🎯 Objetivo

La idea es construir una biblioteca que permita trabajar con diferentes
versiones y representaciones de textos bíblicos sin depender necesariamente 
de un servidor remoto.

Los datos recopilados pueden incluir:

* 📄 TXT
* 📝 Markdown
* 🗃️ JSON
* 🛢️ SQL
* 📚 diferentes versiones y traducciones
* 📑 estructuras por libro, capítulo y versículo
* 🔎 información preparada para búsquedas
* 🔄 datos transformados desde diferentes fuentes

El objetivo final es utilizar esta biblioteca
como base para una aplicación web propia.

---

## 🗂️ Estructura prevista

La estructura puede cambiar mientras se organiza el proyecto.

```text
biblia-txt/
│
├── BIBLIA.md
├── README.md
│
├── data/
│   ├── json/
│   ├── txt/
│   ├── sql/
│   └── markdown/
│
├── sources/
│   └── ...
│
├── scripts/
│   └── ...
│
└── app/
    └── ...
```

La separación entre **datos**, **scripts** y **aplicación** 
pretende mantener el proyecto reutilizable.

---

## 📚 Versiones

Entre los datos recopilados se encuentran
diferentes versiones de la Biblia en español.

Algunas pueden estar disponibles en varios formatos:

```text
TXT
JSON
SQL
Markdown
```

La disponibilidad de cada versión dependerá de la
fuente original y de sus condiciones de uso.

### Importante

Este repositorio **no pretende reclamar autoría sobre textos que pertenezcan a terceros**.

Antes de redistribuir o incorporar una traducción concreta, 
debe verificarse su licencia, dominio público o permiso correspondiente.

Cuando sea posible, se conservará información sobre:

* fuente original
* versión
* traducción
* autoría
* licencia
* fecha de incorporación
* transformaciones realizadas

---

## 🧹 Organización y normalización

Uno de los objetivos técnicos del proyecto es convertir
diferentes representaciones hacia estructuras que puedan utilizarse 
fácilmente desde aplicaciones.

Por ejemplo:

```json
{
  "book": "Juan",
  "chapter": 3,
  "verse": 16,
  "text": "..."
}
```

Una estructura de este tipo permitiría realizar operaciones como:

* búsqueda de palabras
* navegación por capítulos
* selección de versículos
* comparación de versiones
* favoritos
* notas
* referencias
* historial de lectura

---

## 💻 Aplicación

Los datos de este repositorio podrán utilizarse posteriormente como 
fuente para una aplicación web independiente.

La aplicación podrá comenzar con tecnologías sencillas:

```text
HTML
CSS
JavaScript
JSON
LocalStorage
Cache API
Service Worker
```

y posteriormente evolucionar hacia una arquitectura basada en componentes, por ejemplo:

```text
React
JSX
```

La intención es mantener la biblioteca de datos separada de la interfaz para que 
los datos puedan reutilizarse en diferentes implementaciones.

---

## 📴 Funcionamiento offline

Una de las metas del proyecto es que la aplicación pueda continuar

funcionando sin conexión después de haber cargado los recursos necesarios.

La arquitectura prevista contempla:

```text
             ┌─────────────────┐
             │   Biblia JSON   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │   Aplicación    │
             │   Web / PWA     │
             └────────┬────────┘
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
   ┌──────────────┐       ┌──────────────┐
   │ Cache API    │       │ LocalStorage │
   └──────────────┘       └──────────────┘
```

El objetivo es que:

* los archivos de la aplicación puedan almacenarse localmente;
* los datos puedan mantenerse disponibles sin conexión;
* las preferencias del usuario sobrevivan entre sesiones;
* la aplicación pueda instalarse como PWA posteriormente.

Para cantidades de datos mayores, también se podrá evaluar 
**IndexedDB** en lugar de depender únicamente de `localStorage`.

---

## 🧪 Estado actual

Actualmente el proyecto se encuentra en una etapa de recopilación y organización.

* [x] Crear repositorio
* [x] Recopilar diferentes fuentes
* [x] Incorporar formatos TXT
* [x] Incorporar datos JSON
* [x] Incorporar estructuras SQL
* [ ] Documentar cada fuente
* [ ] Revisar licencias
* [ ] Normalizar estructuras
* [ ] Crear conversores
* [ ] Definir esquema JSON definitivo
* [ ] Crear aplicación web
* [ ] Implementar búsqueda
* [ ] Implementar navegación por libros/capítulos
* [ ] Implementar almacenamiento local
* [ ] Implementar funcionamiento offline
* [ ] Convertir aplicación en PWA

---

## 🌱 Filosofía del proyecto

Este repositorio comenzó como una colección de archivos, 

pero la intención es convertirlo progresivamente en una **biblioteca de datos reutilizable**.

La aplicación final no necesariamente dependerá directamente de GitHub ni de un backend.

La idea es poder descargar los datos, procesarlos y utilizarlos localmente.

```text
datos
  ↓
normalización
  ↓
JSON estructurado
  ↓
aplicación
  ↓
cache local
  ↓
lectura offline
```

---

## 🔬 Experimentación

Este repositorio también sirve como espacio de experimentación para:

* procesamiento de texto
* transformación de datos
* JSON
* SQL
* JavaScript
* almacenamiento local
* PWA
* Service Workers
* búsqueda local
* interfaces de lectura
* comparación de estructuras de datos
* aplicaciones web offline-first

---

## ⚠️ Licencias y derechos

Los archivos contenidos en este repositorio pueden tener 
**diferentes condiciones legales**.

No debe asumirse que todo el contenido posee la misma licencia.

Cada versión o fuente debe evaluarse individualmente antes de redistribuirla, 
modificarla o utilizarla en un producto público/comercial.

La presencia de un archivo en este repositorio no constituye una afirmación
de propiedad intelectual sobre su contenido.

---

## 👤 Autor

**Oscar Cruz Díaz — ozclef**

* GitHub: [https://github.com/ozclef](https://github.com/ozclef)

Este repositorio forma parte de mis experimentos personales de desarrollo
y organización de datos.

---

## 📌 Relación con otros proyectos

Este repositorio  **biblioteca/fuente de datos**, 

mientras que la aplicación que consuma estos datos podrá mantenerse

en un repositorio independiente.

Esto permite conservar:

* el historial de recopilación;
* transformaciones;
* limpieza de datos;
* experimentos;
* versiones anteriores;

sin mezclar todo ese historial con el código de la aplicación final.

---

> **Estado:** 🧪 Experimental / En desarrollo
> **Propósito:** Biblioteca de datos + experimentación
> **Formato principal:** TXT / JSON / SQL
> **Aplicación prevista:** Web / Offline / PWA

### Y sobre lo del historial: sí, hay una forma interesante

No necesitas obligatoriamente hacer:

```text
biblia-txt
biblia-app
biblia-app-2
biblia-app-final-final
```

Puedes mantener:

```text
ozclef/biblia-txt
        │
        ├── historial de datos
        ├── conversiones
        ├── limpieza
        └── versiones
```

y después crear:

```text
ozclef/biblia-app
        │
        └── consume una versión concreta de los datos
```

Incluso puedes hacer que la app consuma un **JSON generado desde `biblia-txt`**, en lugar de copiar manualmente todos los archivos.

Y si posteriormente quieres conservar una versión exacta de los datos, puedes usar **tags/releases**:

```text
biblia-txt
│
├── v0.1.0  → primera colección
├── v0.2.0  → JSON normalizado
├── v0.3.0  → varias versiones
└── v1.0.0  → dataset estable
```

Eso te da una separación muy limpia entre **"biblioteca de datos"** y **"producto/aplicación"**.

### Sobre `index.jsx`

Si vas a usar React, yo no haría un `index.jsx` gigante. Algo como:

```text
biblia-app/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── biblia.json
    ├── components/
    │   ├── BibleReader.jsx
    │   ├── BookSelector.jsx
    │   └── Verse.jsx
    └── storage/
        └── offline.js
```

Y después:

```jsx
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
```

** `localStorage`:**

para una Biblia completa y varias traducciones,

yo no lo usaría como almacenamiento principal.

`localStorage` está muy bien para cosas pequeñas:


```js
localStorage.setItem("theme", "dark");
localStorage.setItem("lastVerse", "Juan 3:16");
localStorage.setItem("version", "RVR1960");
```

Para **todo el texto bíblico + varias versiones + índices de búsqueda + favoritos/notas**, 

conviene mirar **IndexedDB**. 
Y para que la aplicación completa funcione offline, **Service Worker + Cache API**.

La arquitectura podría terminar siendo:

```text
                 GitHub
                   │
                   ▼
             biblia-txt
             ┌──────────┐
             │ TXT/SQL  │
             │ JSON/etc │
             └────┬─────┘
                  │
             normalización
                  │
                  ▼
             biblia-app
                  │
          ┌───────┴────────┐
          ▼                ▼
      IndexedDB        Cache API
       (datos)        (app/assets)
          │                │
          └───────┬────────┘
                  ▼
             📖 PWA offline
```

 "un proyecto de Biblia"; 

**proyecto técnico de procesamiento de datos + frontend + almacenamiento local + offline-first**,


que es bastante más interesante para tu portafolio.
