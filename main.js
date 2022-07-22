fetch('https://cck-tickets.herokuapp.com/getAllEvents')
    .then(response => response.json())
    .then(data => {
        var div1 = document.getElementById("event-list");

        data.forEach(element => {
            var a = document.createElement("a");
            a.className = 'list-group-item list-group-item-action flex-column align-items-start'
            a.href = element.url
            a.target = '_blank';

            var div = document.createElement("div");
            div.className = 'd-flex w-100 justify-content-between'

            var h5 = document.createElement("h5");
            h5.className = 'mb-1 title'
            h5.innerText = (element.data.soldOut === true ? "(Agotado) " : "") + element.data.name

            var small = document.createElement("small");
            small.innerText = element.data.date
            small.className = "date"

            var p = document.createElement("p");
            p.className = 'mb-1 link'
            p.innerText = element.url

            div.appendChild(h5)
            div.appendChild(small)
            a.appendChild(div)
            a.appendChild(p)

            if (element.data.reserva != undefined) {
                var small2 = document.createElement("small");
                small2.innerText = element.data.reserva
                a.appendChild(small2)
            }

            if (element.data.soldOut == true)
                a.style.backgroundColor = 'rgba(255, 182, 193, .3)';

            div1.appendChild(a);
        });
    });
