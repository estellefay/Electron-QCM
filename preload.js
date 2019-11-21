const fs = require('fs')
let params = {}
var result = [];
var createHTML = require('create-html')
var hyperstream = require('hyperstream')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

  // data
  params = {
    name: () => document.getElementById('name').value,
    firstname: () => document.getElementById('firstname').value,
    email: () => document.getElementById('email').value,
  };
  // Lire le fichier quiz
  fs.readFile('quiz.json', (err, data) => {
    if (err) throw err;
    let datas = JSON.parse(data);
    let nbQuestion = datas.nbQuestion
    
  
    //saddDataJson()

    //AddText("title-quiz", datas.title)




    /**
     * Ecouter le bouton Démarrer
     */
    document.getElementById("start").addEventListener('click', evt => {
      //window.location.href = "winner.html"
      // if (params.name() || params.firstname() || params.email() === "undefined") {
      //     window.location.href = "index.html"     
      // } else {
      // Remove result data
        result = {}
        var identite = { 
          "name" :params.name(),
          "prenom" :params.firstname(),
          "email" :params.email()
        }
        // Save data 
        result = JSON.stringify(identite);
        console.log(result);
        // Create question
        console.log(datas)
        for (let index = 0; index < nbQuestion; index++) {
          console.log("toto")
          // créer toutes les pages html

        }
        var html = createHTML({
          title: 'example',
          script: 'example.js',
          scriptAsync: true,
          css: 'example.css',
          lang: 'en',
          dir: 'rtl',
          head: '<meta name="description" content="example">',
          body: '<p>example</p>',
        })

        var hs = hyperstream({
          'body': fs.createReadStream('some.html')
        })

        var stream = fromString(html)
        stream.pipe(hs).pipe(process.stdout)
      //   var opened = window.open("");
      // opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
    // }
    });
  }) 


    
})

  // Ajouter le text dans les éléments HTML
  // function AddText(id, contenue) {
  //   let b = document.body
  //   let selection = document.getElementById("title-quiz")
  //   let newTextTitle = document.createTextNode(contenue)
  //   selection.appendChild(newTextTitle);
  //   document.body.appendChild(selection);
  // }

 
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // } 
  
  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
