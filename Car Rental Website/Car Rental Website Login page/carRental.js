const h1 = document.querySelector("h1");
let check = true;
const buttons = {};
for (i = 0; i < 3; i++) {
   buttons[i] = `<a class="btn" id="${i + 1}" href="#" type="button">button${3-i}</a>`;
   h1.insertAdjacentHTML("afterend", buttons[i]);
}
for (i = 0; i < 3; i++) {
    if (check == false) break;
document.querySelectorAll('.btn')[i].addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target, i);
    const htmlTag = `<div class="card">
                       <img class="image" src="image/car${e.target.id}.jpg" alt="image of car"/>
                       <p> First </p>
                    </div>`;
    h1.insertAdjacentHTML("afterend", htmlTag);
    setTimeout(function() {
        document.querySelector('.card').remove();
    }, 1000);
    check = false;
});
}
