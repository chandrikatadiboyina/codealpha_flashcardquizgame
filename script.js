let workouts = [];
let fitnessGoal = "";

function setGoal() {
    fitnessGoal = document.getElementById("goal-input").value;
    document.getElementById("goal-display").innerText = `Your Goal: ${fitnessGoal}`;
}

function addWorkout() {
    const type = document.getElementById("exercise-type").value;
    const name = document.getElementById("exercise-name").value;
    const duration = parseInt(document.getElementById("duration").value);
    const calories = parseInt(document.getElementById("calories").value);

    if (name && duration > 0 && calories > 0) {
        const workout = { type, name, duration, calories };
        workouts.push(workout);
        displayWorkouts();
        clearInputs();
    } else {
        alert("Please enter valid workout details.");
    }
}

function displayWorkouts() {
    const list = document.getElementById("workout-list");
    list.innerHTML = "";
    let totalDuration = 0;
    let totalCalories = 0;

    workouts.forEach((workout, index) => {
        const item = document.createElement("li");
        item.innerText = `${index + 1}. [${workout.type}] ${workout.name} - ${workout.duration} min - ${workout.calories} kcal`;
        item.onclick = () => openLightbox(workout);
        list.appendChild(item);
        totalDuration += workout.duration;
        totalCalories += workout.calories;
    });

    document.getElementById("total-stats").innerText = `Total Duration: ${totalDuration} min | Total Calories: ${totalCalories} kcal`;
}

function openLightbox(workout) {
    const lightbox = document.getElementById("lightbox");
    const details = document.getElementById("lightbox-details");
    details.innerText = `Exercise: ${workout.name}\nType: ${workout.type}\nDuration: ${workout.duration} minutes\nCalories Burned: ${workout.calories} kcal`;
    lightbox.classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

function clearInputs() {
    document.getElementById("exercise-type").value = "Cardio";
    document.getElementById("exercise-name").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("calories").value = "";
}
