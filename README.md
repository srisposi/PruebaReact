# Aura Movie

Proyecto Aura Movie para ver las últimas películas publicadas y más populares consultando la API de 'The Movie DataBase'

# Funcionalidades

Se desarrolló una aplicación web mediante React Js con el objetivo de poder cargar la información de las últimas películas publicadas y las más populares mediante el consumo de la API ofrecida por 'The movie Database'. Se desarrollo trabajando con los componentes funcionales de React y las dependencias que mencionadas a continuación:

# Dependencies

1) Para mejorar las rutas se trabajó con React Router
    npm i history react-router-dom@next
2) Para crear el CSS de los componentes se utilizó Styled-Components
    npm i styled-components
3) Para trabajar con tipos se utilizó prop-types con la idea de refactorizar a futuro trabajando con typescript   
    npm i prop-types

# Otros archivos importantes

## .env 
Para crear las variables de entorno 
Lo más importante en este archvio es definir la API key para consumir la misma. También tener en cuenta la key para definir las variables de entorno cuando se configure el servidor y realizar el correcto CD/CI.

## config 
En este archivo se definen los endpoint para obtener las películas populares y para la búsqueda
Además, se define la URL Base de la imagen.

## API.js 
Donde se define:
a. Fetch para buscar los datos de las películas
b. fetch para buscar las películas
c. fetch para buscar los créditos.

## helpers.js
Este archivo contiene las funciones para:
1) calcular el tiempo
2) para convertir dinero
Pensando para implementar en el próximo refactor.

# Justificación de las dependencias.

Styled-components: Se utiliza está dependencia por los siguientes beneficios:
a. Se obtiene alcance de css 
b. se puede utilizar sintáxis como en sass, permitiendo hacer nesting sin necesidad de utilizar polyfills
c. Se puede tener props dentro, lo que permite modificar el css enviando difernetes props a sus estilos.

# ¿Qué tengo que tener instalado para correr el proyecto?

    - `node js versión 14 o superior`
    - `npm versión 7 o superior`

# Como correr el proyecto desde 0

Se debe generar crear una cuenta en https://www.themoviedb.org/ luego de esto se solicitará una API key la cuál se deberá configurar en el .env del proyecto.

Luego de esto se deberán correr los siguientes comandos:
- `npm ci`
- `npm start`

# Arquitectura

Se trabajó con una arquitectura de funtional components aprovechando las props y hooks que React js ofrece de forma nativa.
Se organizó el proyecto en carpetas, cada una para un componente o función especifica como el caso de los hooks, y dentro de cada carpeta se estableció un index.js para dejar la importación de archivos de forma más ordenada. Además dentro de cada carpeta se puede observar el archivo styled que define los estilos de cada uno de los componentes de la página.
# Infraestructura

Se trabajo como controlador de versiones a GitHub y para hacer el deploy con Netlify mediante el concepto de CD/CI para que cada vez que se realice el 'push' o subida de una parte del código a GitHub, se pudiera deployar ese cambió en el momento realizado.