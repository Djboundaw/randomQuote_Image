const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.author);
      quote.innerHTML = `« ${data.content} » <br/> <br/> by ${data.author}`;
    });

  let num = nombreAleatoire();
  // console.log(num);
  // document.getElementById('pic').innerHTML = `<img src="img/${num}.jpg" sty/>`;
  document.getElementById("pic").backgroundImage = `url('${num}.jpg')`;
};

function nombreAleatoire() {
  return Math.floor(Math.random() * 50 + 1);
}

quote.addEventListener("click", () => getQuote());
