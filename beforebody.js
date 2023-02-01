window.onclick = function() {
    // crea una serie de elements por cada tag
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("quieres ser mi moorrit@");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

