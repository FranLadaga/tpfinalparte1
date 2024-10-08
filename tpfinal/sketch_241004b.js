let texto = [" La noche de mantequilla \n Julio cortazar","Estevez llega a el estadio \n donde se realizara la pelea buscando su lugar","De pronto se le acerca una mujer la cual le indica su asiento","pero al mirar detenidamente Estevez se da cuenta que no es el correcto","quinto"];
let imagenes = [];
let cantCol = 1;
let anchoCol = 640;
let altoFil = 480;
let indexActual = 0;
let botonSiguiente;


function preload() {
  for (let i = 0; i < texto.length; i++) {
    imagenes[i] = loadImage("imagenes/imagen" + (i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480); 
  textSize(32);
  textAlign(CENTER, CENTER);

  botonSiguiente = createButton('Siguiente');
  botonSiguiente.position(width / 2 - 50, height - 40);
  botonSiguiente.size(100, 30);
  botonSiguiente.mousePressed(cambiarImagen);

  // crear los botones adicionales para el cuarto casillero 
  botonOpcion1 = createButton('Aclararle que se está equivocando');
  botonOpcion2 = createButton('Seguir a la mujer');
  
  // configurar posición, tamaño y eventos para los nuevos botones
  botonOpcion1.position(width / 2 - 150, height - 100); 
  botonOpcion1.size(300, 50); 
  botonOpcion2.position(width / 2 - 150, height - 40); 
  botonOpcion2.size(300, 50);


  botonOpcion1.hide();
  botonOpcion2.hide();

  // agregar eventos a los botones
  botonOpcion1.mousePressed(() => {
    console.log("Opción 1: Aclararle que se está equivocando");
  });
  botonOpcion2.mousePressed(() => {
    console.log("Opción 2: Seguir a la mujer");
  });
}

function draw() {
  background(0);


  image(imagenes[indexActual], 0, 0, width, height);


  fill(255); 
  text(texto[indexActual], width / 2, height / 2);
  
    if (indexActual === 3) {
    botonOpcion1.show();
    botonOpcion2.show();
    botonSiguiente.hide(); 
  } else {
    botonOpcion1.hide();
    botonOpcion2.hide();
    botonSiguiente.show(); 
  
}
}

function cambiarImagen() {
  indexActual = (indexActual + 1) % texto.length; 
}
