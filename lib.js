// Definir la URL de la API
const apiUrl = 'https://practicas-backend-fg.onrender.com/api/personas';


async function fetchData(){
    try {
        // Realizar una solicitud GET a la API
        const response = await fetch(apiUrl)
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (response.status === 200) {
            // Convertir la respuesta a formato JSON
            const data = await response.json()

            //Mostramos los datos mediante consola con formato de tabla
            console.table(data)
        } else {
            // Manejar errores de solicitud
            throw new Error('No se pudo obtener la información de la API');
          }
    } catch (error) {
        // Manejar errores generales
        alert("Hay un error. Ver consola")
        console.error(error);
    }
}

fetchData()