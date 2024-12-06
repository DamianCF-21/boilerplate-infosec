const express = require('express');
const app = express();
import React from 'react';
import './App.css';

// Importa Helmet
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* Usa Helmet para configurar el título de la página */}
      <Helmet>
        <title>Mi Aplicación React</title>
        <meta name="description" content="Descripción de mi aplicación" />
        {/* Puedes agregar más metadatos o configuraciones aquí */}
      </Helmet>

      {/* El contenido de tu aplicación */}
      <h1>Bienvenidos a mi aplicación React</h1>
      {/* Aquí puedes agregar más componentes */}
    </div>
  );
}

export default App;
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
