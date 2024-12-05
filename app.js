const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, "web")));


app.get('/', async (req, res) => {

    try {


        // Lecture du fichier index.html
        const filePath = path.join(__dirname, 'web', 'index.html');
        
        let html = fs.readFileSync(filePath, 'utf-8');

       
        
        // Envoi de l'HTML modifié au client
        res.send(html);

    } catch (error) {
         // Lecture du fichier index.html
         const filePath = path.join(__dirname, 'web', 'index.html');
         let html = fs.readFileSync(filePath, 'utf-8');
 
         // Insertion directe des variables dans l'HTML
 
 
         // Envoi de l'HTML modifié au client
         res.send(html);
    }
});


// Démarrage du serveur
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
