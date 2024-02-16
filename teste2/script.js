let searchTerm = document.querySelector('#  input');
searchTerm.addEventListener('input', function () {
  fetch(`http://localhost:3000/artists?name_like=Foo`)
    .then((response) => {
      response.json();
    })
    .then((results) => {
      console.log(results);
    });
});

//${searchTerm}
