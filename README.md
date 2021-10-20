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

# Justificación de las dependencias.
React Router: Se utiliza para realizar el routeo de las distintas partes del sitio.

Styled-components: Se utiliza está dependencia por los siguientes beneficios:
a. Se obtiene alcance de css 
b. se puede utilizar sintáxis como en sass, permitiendo hacer nesting sin necesidad de utilizar polyfills
c. Se puede tener props dentro, lo que permite modificar el css enviando difernetes props a sus estilos.

Prop-types: Se utiliza para verificar los tipos de props que se envían a los componentes.
Se pueden hacer diferentes tipos de validaciones, en el proyecto se realizarán los más simples por se un proyecto pequeño y no necesitar mayor validación.
Se piensa hacer una refactorización para realizar esta validación mediante Typescript

# Arquitectura
Se trabajó con una arquitectura de funtional components aprovechando las props y hooks que React js ofrece de forma nativa.

Se organizó el proyecto en carpetas, cada una para un componente o función especifica como el caso de los hooks, y dentro de cada carpeta se estableció un index.js para dejar la importación de archivos de forma más ordenada. Además dentro de cada carpeta se puede observar el archivo styled que define los estilos de cada uno de los componentes de la página.

Además de lo mencionado, es importante destacar la creación de Hooks personalizados que se pueden visualizar en una de las carpetas del proyecto como hooks

# Componentes

## Header
Componente donde se podrá observar la cabecera del proyecto
## Hooks
Carpeta dónde se podrán encontrar los Hooks personalizados:
1) Uno para montar en el Home
2) Otro para montar con la película
## HeroImage
Componente que diseña la Imagen de cabecera que aparece en la página inicial y que aparece también en la búsqueda de las películas
## Grid
Componente de grilla donde se colocarán las películas en la págima inicial y cuando se busquen las películas apareceran datos de la misma.
## Thumb 
Componente para manejar las imagenes de las películas que aparecen en la grilla (imágen detalle de la película)
## Spinner
Spinner que aparece al cargar nuevas películas.
## SearchBar
Barra que permite realizar la búsqueda de las películas
## Button
Botón que realiza la carga de las películas en la página inicial
## BreadCrumb
Detalle que se realiza en el menú en la parte de búsqueda de películas
## MovieInfo
Cuando se está realizando la búsqueda de las películas, permite obtener en el header de la página, información de la misma.
## MovieInfoBar
Barra que aparece debajo del header y permite obtener información de la película:
1. Duración.
2. Presupuesto.
3. Ingresos.
Se utilizan las funciones que se encuentra en helpers para realizar esta funcionalidad
## Actor 
Componente que se utiliza par traer la información de los actores de las películas:
1. nombre
2. descripión
3. imagen
# Otros archivos importantes
## Home
Se encuentran los componentes que renderizarán la página inicial del sitio
## Movie
Se podrá ver el render de los componentes que permiten obtener una película
## NotFound
Para el caso de que no se encuentren la información se accederá a este archivo de no encontrado
## GlobalStyle
Se configuran los estilos básicos de la aplicación en general
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
3) Función para almacenar los session storage

# ¿Qué tengo que tener instalado para correr el proyecto?
    - `node js versión 14 o superior`
    - `npm versión 7 o superior`

# Como correr el proyecto desde 0
Se debe generar crear una cuenta en https://www.themoviedb.org/ luego de esto se solicitará una API key la cuál se deberá configurar en el .env del proyecto.

Luego de esto se deberán correr los siguientes comandos:
    - `npm ci`
    - `npm start`

# Infraestructura
Se trabajo como controlador de versiones a GitHub y para hacer el deploy con Netlify mediante el concepto de CD/CI para que cada vez que se realice el 'push' o subida de una parte del código a GitHub, se pudiera deployar ese cambió en el momento realizado.

# Demo de la Aplicación
https://youthful-albattani-dbd244.netlify.app
