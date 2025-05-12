# TP2 – ReactJS + Node.js

Trabajo Práctico N° 2



##  Objetivo

Crear una aplicación web con ReactJS y Node.js que permita ingresar un nombre de usuario, validarlo en el backend y mostrar un mensaje personalizado de bienvenida si es válido.

##  Instrucciones para ejecutar el proyecto

###  Backend (Node.js + Express)

1. Ir a la carpeta del backend:
   
   cd Backend

   2. Instalar las dependencias:
   npm install

3. Ejecutar el servidor:
node server.js

4. El servidor se ejecutará en: http://localhost:3000

### Frontend (ReactJS + Vite)

1. Ir a la carpeta del frontend:
cd Frontend

2. Instalar las dependencias:
npm install

3. Iniciar la aplicación:
npm run dev

4. Abrir en el navegador: http://localhost:5173

### Funcionalidad
El usuario ingresa un nombre.

Al presionar el botón:

Se valida el nombre con GET /validar/:nombre.

Si es válido, se obtiene un saludo con GET /saludo/:nombre.

Se muestra el mensaje “Hola, [nombre]!” en pantalla.

Si no es válido, se muestra un mensaje de error.

### Tecnologías Utilizadas

Frontend: ReactJS (Vite), JavaScript

Backend: Node.js, Express.js, CORS

