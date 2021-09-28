document.querySelector(".get-jokes").addEventListener("click", function (e) {
  e.preventDefault();
  var number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status == 200) {
      let response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        response.value.forEach(function (res) {
          output += `<li>${res.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
});
