const button = document.querySelector(".button");
const container = document.querySelector("#container");
const emojiRatings = document.querySelectorAll("emojiratings");

emojiRatings.forEach(emoji => {
	emoji.addEventListener("click", () => {
		emojiRatings.forEach(innerEmoji => {
			innerEmoji.classList.remove("active");
		});

		emoji.classList.add("active");
});
});

button.addEventListener("click", () => { 
	container.innerHTML = `
	<strong class="thankyou">Thank You</strong>
	<i class="fas fa-heart fa-3x"></i>
	<p>Want to hear more from us?, get connected.</p>
	<div class="sm">
	<i class="fab fa-twitter fa-2x"></i>
	<i class="fab fa-instagram fa-2x"></i>
	<i class="fab fa-facebook fa-2x"></i>
	</div>
	`;
});


