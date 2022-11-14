window.addEventListener('load', () => {

    let sanitizeVal;
    let sanitizeUrl;
    

    document.getElementById("country").className += " load";
    document.getElementById("lookup").className += " load";
    

    let result = document.querySelector("div#result");
    document.querySelector("button#lookup").addEventListener("click", (event) => {
        sanitizeVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g, '');
        sanitizeUrl = `world.php?country= ${sanitizeVal}`.replace(/"[^-0-9+@#/%?~_|!:,.;\(\)]"/g, '');
        ajaxCall(event);

    });

    let ajaxCall = (event) => {
        event.preventDefault();
        fetch(sanitizeUrl, { method: 'GET' })
            .then(resp => resp.text())
            .then(info => {
                result.innerHTML = '';
                result.innerHTML = info;
            })
    }


});