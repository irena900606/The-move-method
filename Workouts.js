
const API_URL = "https://script.google.com/macros/s/AKfycbzrqV7tIrGb3ghTgeH2yeg_PlQwvoLIs1Ujiv4qJc-dJ_L2wCF7m1TAFYIKYMmJwwT_3w/exec";

let weeklyPrograms = [];

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatSection(number, title, content) {
  if (!content || !content.trim()) return "";

  const lines = content.split("\n").filter(line => line.trim());
  const firstLine = lines.shift() || "";

  return `
    <section class="section">
      <div class="section-heading">
        <span class="number">${number}</span> ${title}
      </div>
      ${firstLine ? `<span class="work-label">${escapeHTML(firstLine)}</span>` : ""}
      ${lines.length ? `<ul>${lines.map(line => `<li>${escapeHTML(line)}</li>`).join("")}</ul>` : ""}
    </section>
  `;
}

function renderWorkoutForDate(date) {
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));

  const weekStart = [
    monday.getFullYear(),
    String(monday.getMonth() + 1).padStart(2, "0"),
    String(monday.getDate()).padStart(2, "0")
  ].join("-");

  const week = weeklyPrograms.find(program => program.weekStart === weekStart);

  document.querySelectorAll(".day-card").forEach(card => {
    const day = Number(card.dataset.day);
    const workout = week?.days.find(item => item.day ===
      ["", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"][day]
    );

    if (!workout) {
      card.querySelector(".day-focus").textContent = "PROGRAM NOT AVAILABLE";
      card.querySelector(".content").innerHTML = "<p>Workout not available for this week.</p>";
      return;
    }

    card.querySelector(".day-focus").textContent = "WEEKLY TRAINING";

    card.querySelector(".content").innerHTML = [
      formatSection("01", "WARM-UP", workout.warmup),
      formatSection("02", "ACTIVATION", workout.activation),
      formatSection("03", "SKILL / STRENGTH", workout.skillStrength),
      formatSection("04", "WOD", workout.wod),
      formatSection("05", "ACCESSORIES", workout.accessories)
    ].join("");
  });
}

window.loadWorkoutForDate = function(date) {
  if (weeklyPrograms.length) {
    renderWorkoutForDate(date);
  } else {
    window.pendingWorkoutDate = date;
  }
};

fetch(API_URL)
  .then(response => {
    if (!response.ok) throw new Error("Could not load programs");
    return response.json();
  })
  .then(data => {
    weeklyPrograms = data;

    const date = window.pendingWorkoutDate || window.selectedWorkoutDate;
    if (date) renderWorkoutForDate(new Date(date));
  })
  .catch(error => {
    console.error("Workout loading error:", error);
  });
