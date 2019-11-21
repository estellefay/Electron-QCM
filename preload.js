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

  /**
   * Lire le fichier quiz
  */
  fs.readFile('quiz.json', (err, data) => {
    if (err) throw err;
    let datas = JSON.parse(data);
    let questions = datas.listQuestion
    let nbQuestion = datas.nbQuestion

    // parcourir le fichier JSON  
    Object.keys(questions).forEach(function(k){  
      var content = getContent(questions[k])
      console.log(content)
      fs.createWriteStream('questions.html')
      fs.writeFile('questions'+ questions[k].numero +'.html', content, function (err) {
        if (err) throw err;
      });    
    });

  /**
   * Ecouter le bouton Démarrer
   */

  document.getElementById("start") && document.getElementById("start").addEventListener('click', evt => {
    //window.location.href = "winner.html"
    // if (params.name() || params.firstname() || params.email() === "undefined") {
    //     window.location.href = "index.html"
    // } else {
    // Remove result data
      result = {}
    // Add DATA
      var identite = {
        "name" :params.name(),
        "prenom" :params.firstname(),
        "email" :params.email()
      }

      // Save data
      result = JSON.stringify(identite);
      // redirection first question
      window.location.href = "questions1.html"
    });

  })
      //   var opened = window.open("");
      // opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
    // }
});

    function getContent(data) {
      //console.log(data.listRep)
      var pageSuivante = data.numero + 1
      var listRep = data.listRep
      var rep = []

      Object.keys(listRep).forEach(function(k){  
        rep.push(listRep[k])
      });
      console.log(rep)

      var responses = "";
      for (let index = 0; index < data.nbrReponse; index++) {
          responses.push
      }
      var result = '<h1>'+ data.question + '</h1>' +  Array.keys(rep).forEach(function(k){ '<h1>' + listRep[k] + '</h1>' }) +
      '<a href="questions'+ pageSuivante +'.html">question suivante</a>' 
      + pageSuivante
      
      return result

    }


























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
