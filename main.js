fetch('https://cck-tickets.herokuapp.com/getAllEvents')
    .then(response => response.json())
    .then(data => console.log(data));