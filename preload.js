const fs = require('fs')
let params = {}
let result = {}
var createHTML = require('create-html')
var hyperstream = require('hyperstream')
var score = 0;
var identite

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
      // Créer le html 
      var pageSuivante = questions[k].numero + 1
      let listRep = questions[k].listRep

      fs.writeFile('questions'+ questions[k].numero +'.html', 

      "<h1>"+questions[k].question+"</h1>" + '<div><input type="radio"  value="'+ 1+'" name="'+ listRep.Rep1+ '" id="'+ listRep.Rep1+'">'+ listRep.Rep1 
      + '</div><div><input type="radio"  value="'+ 1 + '"name="'+ listRep.Rep2+ '" id="'+ 2+'">'+ listRep.Rep2 
      + '</div><div><input type="radio"  value="'+ listRep.Rep3+ '"name="'+ listRep.Rep3+ '" id="'+ 3+'">'+ listRep.Rep3 
      + '</div><div><input type="radio"  value="'+ listRep.Rep4+ '"name="'+ listRep.Rep4+ '" id="'+ 4+'">'+ listRep.Rep4 
      + '</div><div><input type="radio"  value="'+ listRep.Rep5+ '"name="'+ listRep.Rep5+ '" id="'+ 5+'">'+ listRep.Rep5 +
      '</div><a class="'+ questions[k].numero +'" href="questions'+ pageSuivante +'.html">question suivante</a>' , function (err) {
        if (err) throw err;
      // event listner sur le num de la question 
      document.getElementById(questions[k].numero) && document.getElementById(questions[k].numero).addEventListener('click', evt => {
        console.log("toto")
        // Si le bone element est check

       
        console.log(score)
          if (document.getElementById(questions[k].reponse).selected) {
            score++
            alert("correct")
            return score
          }
      })
        // quand il est cliquer je vérifie si se qui clique 

        // affichage dynamique des reponses
        // Object.keys(listRep).forEach(function(c){  
        //  console.log(listRep[c])
        //    var x = document.createElement("input");
        //    x.type = "radio";
        //    x.value = listRep[c]   
        //    x.innerHTML = listRep[c]          
        //    document.body.appendChild(x); 

        // });
        //getContent(questions[k])
        //console.log(questions[k])

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
      identite = {
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

      // var responses = "";
      // for (let index = 0; index < data.nbrReponse; index++) {
      //     responses.push
      // }
      // var result = '<h1>'+ data.question + '</h1>' +  '<input type="radio" name="" id="">' +
      // '<a href="questions'+ pageSuivante +'.html">question suivante</a>' 
      // + pageSuivante
      
      // return result
      var test = document.createElement("h1");   // Create a <button> element
      test.innerHTML = data.question;                   // Insert text
      document.body.appendChild(test);               // Append <button> to <body>

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
