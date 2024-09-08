let card = document.querySelectorAll(".card");
let restart = document.getElementById("restart");
let restart2 = document.getElementById("restart2");

// Restart Button to reload the Game

restart.addEventListener("click", () => {
  window.location.reload();
});
restart2.addEventListener("click", () => {
  window.location.reload();
});

// Shuffle the cards when game open or restart

function shuffle(card) {
  for (let i = card.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [card[i], card[j]] = [card[j], card[i]];
  }
  return card;
}

let card_order = shuffle([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);
for (let i = 0; i < card_order.length; i++) {
  let order = `order-[${card_order[i]}]`;

  card[i].setAttribute("class", order);
  card[i].classList.add("w-20", "card");
}

card.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.children[0].classList.contains("matched")) {
      // element.children[0].classList.remove('flip')
    } else {
      let flipped = document.querySelectorAll(".flip");

      if (flipped.length >= 2) {
        console.log(flipped.length);
        flipped[0].classList.remove("flip");
        flipped[0].nextElementSibling.classList.remove("hidden");
        flipped[1].classList.remove("flip");
        flipped[1].nextElementSibling.classList.remove("hidden");
        element.children[0].classList.add("flip");
        element.children[1].classList.add("hidden");
      } else if (flipped.length < 1) {
        element.children[0].classList.add("flip");
        element.children[1].classList.add("hidden");
      } else {
        let f1 = flipped[0].children[0].getAttribute("src");
        let f2 = element.children[0].children[0].getAttribute("src");

        if (f1 == f2) {
          element.children[0].classList.add("matched");
          element.children[1].classList.add("hidden");
          flipped[0].classList.add("matched");
          flipped[0].classList.remove("flip");
        } else {
          element.children[0].classList.add("flip");
          element.children[1].classList.add("hidden");
        }
      }
    }
    let matched = document.querySelectorAll(".matched");
    if (matched.length == 16) {
      document.getElementById("gameover").classList.remove("hidden");
      document.getElementById("gameover").classList.add("block");
      document.getElementById("gameboard").classList.add("hidden");
      document.getElementById("gameheader").classList.add("hidden");
    }
  });
});
