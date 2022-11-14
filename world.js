window.addEventListener('load', () => {

    let sanitizeUrl;
    let sanitizeVal;

    document.getElementById("country").className += " load";
    document.getElementById("lookup").className += " load";
    document.getElementById("citylookup").className += " load";

  

    let result = document.querySelector("div#result");
    document.querySelector("button#lookup").addEventListener("click", function() {
        sanitizeVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g, '');
        sanitizeUrl = `world.php?country= ${sanitizeVal}`.replace(/"[^-0-9+@#/%?~_|!:,.;\(\)]"/g, '');
        ajaxCall();

    });

    document.querySelector("button#lookupcity").addEventListener("click", function() {
        sanitizeVal = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g, '');
        sanitizeUrl = `world.php?country= ${sanitizeVal}&context=cities`.replace(/"[^-0-9+@#/%?~_|!:,.;\(\)]"/g, '');
        ajaxCall();
    });

    let ajaxCall = function() {
        this.preventDefault();
        fetch(sanitizeUrl, { method: 'GET' })
            .then(resp => resp.text())
            .then(info => {
                result.innerHTML = '';
                result.innerHTML = info;
            })
    }


});