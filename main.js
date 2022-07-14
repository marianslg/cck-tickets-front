fetch('https://cck-tickets.herokuapp.com/getAllEvents')
    .then(response => response.json())
    .then(data => {
        var ul = document.getElementById("event-list");
        data.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });
    });