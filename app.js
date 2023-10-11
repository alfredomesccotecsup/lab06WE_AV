const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para definir la variable "perfil"
app.use(['/ejs', '/perfil/:id', '/miplantilla-ejs'], (req, res, next) => {
  const perfilUsuario = { nombre: 'usuario ALFREDO' }; // Puedes definir datos de perfil aquí
  res.locals.perfil = perfilUsuario;
  next();
});

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Alfredo(usuario)' });
});

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs');
});

// Ruta para renderizar la página de perfil de usuario (Pug)
app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Simulación de datos de usuario (puedes obtenerlos desde una base de datos)
    const user = {
      id: userId,
      nombre: 'Alfredo ' + userId,
      edad: 19,
      correo: 'rosendo.mescco@tecsup.edu.pe',
      fechaNacimiento: '12/01/20045',
      descripcion: 'Apasionado del diseño y desarrollo de software, mi carrera es mi pasión. Mi enfoque se centra en crear soluciones innovadoras y colaborar efectivamente en equipos. Siempre busco aprender y mejorar, comprometido con la excelencia y la constante evolución en esta emocionante industria',
      imagen: 'ruta/a/imagen.jpg'
    };
    res.render('perfil', { user });
  });
  
  // Ruta para renderizar una plantilla Pug mejorada
  app.get('/miplantilla-pug', (req, res) => {
    const perfilUsuario = {
      nombre: 'ALFREDO',
      edad: 19,
      correo: 'rosendo.mescco@tecsup.edu.pe',
      fechaNacimiento: '12/01/2004',
      descripcion: 'Apasionado del diseño y desarrollo de software, mi carrera es mi pasión. Mi enfoque se centra en crear soluciones innovadoras y colaborar efectivamente en equipos. Siempre busco aprender y mejorar, comprometido con la excelencia y la constante evolución en esta emocionante industria',
    }; // Puedes definir datos de perfil aquí
    res.render('miplantilla', { perfil: perfilUsuario });
  });
  
  // Ruta para renderizar una plantilla EJS mejorada
  app.get('/miplantilla-ejs', (req, res) => {
    const perfilUsuario = {
      nombre: 'ALFREDO',
      edad: 19,
      correo: 'rosendo.mescco@tecsup.edu.pe',
      fechaNacimiento: '12/01/2004',
      descripcion: 'Apasionado del diseño y desarrollo de software, mi carrera es mi pasión. Mi enfoque se centra en crear soluciones innovadoras y colaborar efectivamente en equipos. Siempre busco aprender y mejorar, comprometido con la excelencia y la constante evolución en esta emocionante industria',
    }; // Puedes definir datos de perfil aquí
    res.render('miplantilla.ejs', { perfil: perfilUsuario });
  });
  

// Ruta para renderizar una plantilla Pug mejorada
app.get('/miplantilla-pug', (req, res) => {
    const perfilUsuario = { nombre: 'Usuario ALFREDO' }; // Puedes definir datos de perfil aquí
    res.render('miplantilla', { perfil: perfilUsuario });
  });

// Ruta para renderizar una plantilla EJS mejorada
app.get('/miplantilla-ejs', (req, res) => {
  res.render('miplantilla.ejs');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
