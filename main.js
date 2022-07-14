var ul = document.getElementById("event-list");

fetch('https://cck-tickets.herokuapp.com/getAllEvents')
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });
    });