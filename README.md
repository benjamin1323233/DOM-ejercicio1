# Adivina el Número - Juego en JS

Este es un ejercicio interactivo realizado como parte de un trabajo práctico de DOM. El objetivo del proyecto es crear un juego sencillo donde el usuario tiene que adivinar un número aleatorio generado por el sistema.

### Autor: Quiros José Benjamín

## Descripción

Este proyecto consiste en un juego simple donde el usuario debe adivinar un número generado aleatoriamente entre 1 y 10. La interfaz está construida usando **HTML**, **CSS** y **JavaScript** con la ayuda de **Bootstrap** para una estructura rápida y responsive.

### Funcionamiento

1. Al presionar el botón **"Comenzar Juego"**, el sistema genera un número aleatorio entre 1 y 10.
2. El usuario debe ingresar un número en el campo de texto.
3. Al presionar el botón **"ENVIAR"**, el sistema verifica si el número ingresado es correcto:

   * Si el número es correcto, el sistema muestra un mensaje de éxito.
   * Si el número es incorrecto, el sistema indica si el número es mayor o menor al número correcto.
4. El proceso se repite hasta que el usuario adivine el número.

---

## Tecnologías utilizadas

* **HTML**: Estructura básica de la página.
* **CSS**: Estilos para darle formato y hacer la interfaz atractiva.
* **JavaScript**: Lógica para el funcionamiento del juego.
* **Bootstrap**: Framework de CSS para facilitar el diseño responsivo y atractivo.

---

## Instrucciones de uso

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en un navegador para probar el juego.
3. Haz clic en el botón **"Comenzar Juego"** para iniciar el juego.
4. Ingresa un número en el campo de texto y haz clic en **"ENVIAR"** para verificar si adivinaste correctamente.

---

## Estructura del Proyecto

```
/adivina-el-numero
│
├── index.html          # Página principal con la estructura HTML
├── css/
│   └── style.css       # Estilos CSS para el diseño del juego
├── js/
│   └── app.js          # Lógica de JavaScript para el juego
└── README.md           # Este archivo README
```

---

## Notas

* El número generado por el sistema es aleatorio y solo puede ser un valor entre 1 y 10.
* Se utiliza `min="1"` y `max="10"` en el campo de entrada para limitar el rango de los valores permitidos.
* Este proyecto es interactivo y está diseñado para ser simple y directo al punto, ideal para aprender sobre el manejo de eventos en JavaScript y el DOM.

---

## Autor

* **Nombre**: Quiros José Benjamín
