/**
 * App.jsx
 * Este es el componente principal de la aplicación React.
 * Aquí se manejan los componentes principales y la lógica básica.
 */

// Importación de estilos CSS para la aplicación
import './App.css'

/**
 * Componente principal App
 * Este componente actúa como contenedor principal y muestra:
 * - Un saludo personalizado
 * - Una descripción
 * - Un mensaje de bienvenida
 * - Una operación matemática básica
 */
function App() { 
  // Definición de variables y constantes
  const mensaje = "Hola a todos";  // Mensaje de bienvenida
  let a = 2;                       // Primer número para la suma
  let b = 3;                       // Segundo número para la suma
  
  return (
    <>      
      {/* Componente Saludar con prop 'nombre' */}
      <Saludar nombre="Daniel"/>
      
      <br />
      <p>A continuacion, una breve descripcion: </p>
      <br />
      
      {/* Componente Descripcion con prop 'texto' */}
      <Descripcion 
        texto="Esta es una breve descripcion de lo feliz que me siento por esta utilizando REACT"
      />
      <br />

      <Autor name="Juan Camilo Ballesteros" />

      <br /> 
      
      {/* Contenedor principal con clase 'App' */}
      <div className='App'>
        {/* Interpolación de strings y variables en JSX */}
        {mensaje + " esto es REACT, estamos evaluando desde JSX "} 
        <br />
        {/* NOTA: Aquí falta agregar paréntesis para la suma correcta: (a + b) */}
        {"El resultado de la suma es: " + (a + b)}        
      </div>
      <br />   
    </>
  )
}

/**
 * Componente Saludar
 * @param {Object} params - Objeto de parámetros
 * @param {string} params.nombre - Nombre que se mostrará en el saludo
 * @returns {JSX.Element} Encabezado H1 con el nombre
 * 
 * Este componente renderiza un saludo personalizado usando
 * el parámetro 'nombre' que recibe como prop
 */
const Saludar = (params) => {   
  return (
    <>
      <h1>{params.nombre}</h1>
    </>
  )
}

/**
 * Componente Descripcion
 * @param {Object} params - Objeto de parámetros
 * @param {string} params.texto - Texto que se mostrará en el párrafo
 * @returns {JSX.Element} Párrafo con el texto proporcionado
 * 
 * Este componente muestra un texto descriptivo que
 * recibe como prop en el parámetro 'texto'
 */
const Descripcion = (params) => {
  return (
    /*Fragment: Utilizado para llamar varios elementos en una sola peticion de una funcion*/
    <>
      <p>{params.texto}</p> 
      <p>Estamos usando un Fragment</p> 
    </>
  )
}

/**
 * Componente Autor
 
 */
const Autor = (params) => {
  return (
    /*Solo es posible retornar un elemento, por eso usamos el "div". Usamos un elemento HTML*/
    <div className='one'>
    <p> El nombre del Autor es: {params.name} </p>
    <p> La edad del autor es:  </p>
    </div>

    
  )
}

/*EJERCICIO #1 - USANDO GITHUB*/



// Exportación del componente principal
export default App