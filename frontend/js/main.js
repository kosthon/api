
    function get(parametro){
        fetch('http://localhost/laboratorio/backend/'+parametro)
        .then(valor=>valor.json())
        .then(valor=>{
            var resultado = document.getElementById('resultados');
            resultado.innerHTML ='';
            for(let dato of valor){
                resultado.innerHTML +=`
                
                <li>ID: ${dato.id} - Nombre: ${dato.nombre} - Apellido: ${dato.apellido} - Edad: ${dato.edad}</li>
                
                `;
            }
        });
    }
    function filtrar(){
        var id = document.getElementById('campo').value;
        fetch('http://localhost/laboratorio/backend/'+id)
        .then(valor=>valor.json())
        .then(valor =>{
            var resultado = document.getElementById('resultados');
            resultado.innerHTML ='';
            for(let dato of valor){
                resultado.innerHTML +=`
                
                <li>ID: ${dato.id} - Nombre: ${dato.nombre} - Apellido: ${dato.apellido} - Edad: ${dato.edad}</li>
                
                `;
            }
        })
    }
    function eliminar(){
        var id = document.getElementById('campoEliminar').value;
        fetch('http://localhost/laboratorio/backend/eliminar;'+id)
    }

    function post(){
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('edad').value;
        var concatenador = ";";

       fetch('http://localhost/laboratorio/backend/post;'+nombre+concatenador+apellido+concatenador+edad)
    }