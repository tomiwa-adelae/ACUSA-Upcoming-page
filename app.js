const countdown = document.querySelector(".count-down");
const launchDate = new Date("Feb 8, 2024, 12:00:00").getTime();

// Update every sec
const intvl = setInterval(() => {
	// Get Todays Date and Time (ms)
	const now = new Date().getTime();

	// Distance from Now to launch Date
	const distance = launchDate - now;

	// Calculations
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display Results
	countdown.innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${mins}<span>Minutes</span></div>
      <div>${seconds}<span>Seconds</span></div>
   `;

	// If Launch Date Passed
	if (distance < 0) {
		// Stop the Coundown
		clearInterval(intvl);
		// Style and Output Text
		countdown.style.color = "#102082";
		countdown.innerHTML = "<h2><a href='#'>Launched</a></h2>";
	}
}, 1000);
