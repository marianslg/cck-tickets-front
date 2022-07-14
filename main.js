var ul = document.getElementById("event-list");

fetch('https://cck-tickets.herokuapp.com/getAllEvents', {
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });
    });