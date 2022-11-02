const file = document.getElementById("file");
const photos = document.querySelector(".photos");
const label = document.querySelector(".label");
const SubmitButton = document.querySelector(".button-submit");
let files;
let file_reader;

// import { db } from './db.js';

// if (db.html) {
//  db.each('SELECT * FROM photos', (err, data) => {
//     if(err) {
//         throw err
//     } else {
//       photos.innerHTML += `${data}`;
//     }
//   });
// } else {
//     // Créer la db
//     db.run(`CREATE TABLE photos(html VARCHAR(255))`);
//     db.run('INSERT INTO photos(html) VALUES(?)', [photos.innerHTML]);
// 

if(localStorage.Photos) {
  photos.innerHTML = localStorage.Photos;
}

const getFiles = () => {
  file.addEventListener("input", (e) => {
    files = e.target.files[0];
    file_reader = new FileReader();
    file_reader.readAsDataURL(files);
  });
};

const displayImg = () => {
  SubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (files == undefined || files == null || files == false) {
      label.textContent = "Aucun fichier sélectionner";
      label.classList.add("label2");

      setTimeout(() => {
        label.textContent = "Sélectionner le fichier à envoyer";
        label.classList.remove("label2");
      }, 600);
    } else {
      photos.innerHTML += `
          <div class='picture'>
              <img src="${file_reader.result}">
              <div class='container-button-sup'>
                  <span></span>
                  <span></span>
              </div>
          </div>
      `;
      buttonSupFunction();
      // db.run('UPDATE JSP COMMENT FAIRE');
      localStorage.Photos = photos.innerHTML;
      files = false;
    }
  });
};

const buttonSupFunction = () => {
  const ButtonSup = document.querySelector(".container-button-sup");

  if (ButtonSup) {
    ButtonSup.addEventListener("click", () => {
      ButtonSup.parentElement.remove();
      // db.run('UPDATE JSP COMMENT FAIRE');
      localStorage.Photos = photos.innerHTML;
      buttonSupFunction();
    });
  };
};

buttonSupFunction();
getFiles();
displayImg();
