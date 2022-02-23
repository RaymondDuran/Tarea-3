function agregarDatos(){
    var contacto = {nombre : document.getElementById("txtNombre").value,apellido : document.getElementById("txtApellido").value,telefono : document.getElementById("txtTelefono").value};
    fetch("https://www.raydelto.org/agenda.php",
    {
        method: "POST",
        body: JSON.stringify(contacto)
    }).then(function (contactos){
        return contactos.json();
    }).then(function (contactos){
        actualizarTabla();
    });
}

function actualizarTabla(){

    
    fetch("https://www.raydelto.org/agenda.php").then(function (contactos){
        return contactos.json();
    }).then(function (contactos){
        let vainas = document.getElementById('cuerpoTabla');
        vainas.innerHTML = '';
        for (let i = 0; i < contactos.length; i++) {
            let x = contactos[i];
            vainas.innerHTML += `
            <tr>
                <td>`+x.nombre+`</td>
                <td>`+x.apellido+`</td>
                <td>`+x.telefono+`</td>
            </tr>
            `
        }
    });

    }

