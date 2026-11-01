const workouts = {
  1: {
    focus: "CLEAN & JERK · CONDITIONING",
    content: `
      <section class="section">
        <div class="section-heading"><span class="number">01</span> WARM-UP</div>
        <ul>
          <li>Barbell Pass Throughs</li>
          <li>Good Mornings</li>
          <li>Hinge Lunge</li>
          <li>Thoracic Rotation</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">02</span> ACTIVATION</div>
        <span class="work-label">3 ROUNDS</span>
        <ul><li>15 Cal Row</li><li>10 Down Ups</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">03</span> SKILL / WEIGHTLIFTING</div>
        <span class="work-label">EMOM 10'</span>
        <ul><li>1 Squat Clean & Jerk @ 65%</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">04</span> WOD</div>
        <span class="work-label">AMRAP 16'</span>
        <ul>
          <li>300 m Run</li><li>6 Power Clean</li>
          <li>9 Chest to Bar</li><li>12 Wall Balls</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">05</span> ACCESSORIES</div>
        <span class="work-label">3 SETS · NOT FOR TIME</span>
        <ul><li>8 Bulgarian Squats</li><li>8 Hip Thrusts</li></ul>
      </section>
    `
  },

  2: {
    focus: "SNATCH · GYMNASTICS · CONDITIONING",
    content: `
      <section class="section">
        <div class="section-heading"><span class="number">01</span> WARM-UP</div>
        <ul>
          <li>3' Easy Bike</li><li>10 PVC Pass Throughs</li>
          <li>10 Overhead Squats with PVC</li>
          <li>10 Hip Openers</li><li>10 Scapular Push-ups</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">02</span> ACTIVATION</div>
        <span class="work-label">3 ROUNDS</span>
        <ul><li>15 Hyperextensions</li><li>10 Gakk Squat</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">03</span> WEIGHTLIFTING</div>
        <ul>
          <li>Muscle Snatch 4×6 · Medium Weight</li>
          <li>Power Snatch + Hip Snatch 1+3 reps</li>
          <li>Snatch Push Press 4×4</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">04</span> WOD</div>
        <span class="work-label">FOR TIME · DESCENDING REPS</span>
        <ul>
          <li>Burpees Box Jump Over 10-8-6-4-2</li>
          <li>Toes to Bar 20-16-12-8-4</li>
          <li>DB Snatch 30-24-18-12-6</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">05</span> RECOVERY</div>
        <ul><li>Stretching</li></ul>
      </section>
    `
  },

  3: {
    focus: "ENDURANCE · UPPER BODY · CORE",
    content: `
      <section class="section">
        <div class="section-heading"><span class="number">01</span> WARM-UP</div>
        <ul>
          <li>3' Easy Row</li><li>10 Air Squats</li>
          <li>10 Reverse Lunges</li><li>10 Arm Circles</li>
          <li>10 Inchworms</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">02</span> ACTIVATION</div>
        <span class="work-label">2 ROUNDS</span>
        <ul>
          <li>10 Glute Bridges</li>
          <li>10 Bird Dogs (5/side)</li>
          <li>20'' Hollow Hold</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">03</span> ENGINE</div>
        <span class="work-label">AMRAP 3' × 3 SETS</span>
        <ul>
          <li>A: 400m Run + Max Row</li>
          <li>Rest 2 min</li>
          <li>B: 400m Run + Max Ski</li>
          <li>Rest 2 min</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">04</span> ACCESSORIES</div>
        <span class="work-label">12-10-8-6</span>
        <ul><li>Bench Press</li><li>Seated Row</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">05</span> CORE TABATA</div>
        <ul><li>Hollow Rocks</li><li>Arch Hold</li></ul>
      </section>
    `
  },

  4: {
    focus: "CLEAN · STRENGTH · CONDITIONING",
    content: `
      <section class="section">
        <div class="section-heading"><span class="number">01</span> WARM-UP</div>
        <ul>
          <li>3' Easy Bike</li><li>10 Front Rack Mobilizations</li>
          <li>10 Ankle Rocks</li><li>10 Empty Bar Good Mornings</li>
          <li>10 Muscle Cleans</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">02</span> ACTIVATION</div>
        <span class="work-label">2 ROUNDS</span>
        <ul>
          <li>10 Banded Pull Aparts</li>
          <li>10 Scapular Pull-ups</li>
          <li>10 Empty Bar Front Squats</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">03</span> WEIGHTLIFTING</div>
        <ul>
          <li>Power Clean + Power Clean Below Knees 3×1+1 @70–75% Max C&J</li>
          <li>Clean Pull 3×3 @95–105% Max C&J</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">04</span> WOD</div>
        <span class="work-label">EMOM 12'</span>
        <ul><li>1st min: 6 Front Squats @60%</li><li>2nd min: 10 Burpees Over Bar</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">05</span> ACCESSORIES</div>
        <ul><li>10' Erg Bike</li></ul>
      </section>
    `
  },

  5: {
    focus: "BACK SQUAT · GYMNASTICS · CONDITIONING",
    content: `
      <section class="section">
        <div class="section-heading"><span class="number">01</span> WARM-UP</div>
        <ul>
          <li>3' Easy Row</li><li>10 Air Squats</li>
          <li>10 Walking Lunges</li><li>10 Leg Swings</li>
          <li>10 Hip Openers</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">02</span> ACTIVATION</div>
        <span class="work-label">3 ROUNDS</span>
        <ul>
          <li>12 Glute Bridges</li>
          <li>10 Banded Lateral Walks</li>
          <li>20'' Wall Sit</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">03</span> STRENGTH</div>
        <span class="work-label">EVERY 2:00 × 5 SETS</span>
        <ul><li>6 Back Squats @75%</li></ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">04</span> WOD</div>
        <span class="work-label">15' TIME CAP</span>
        <ul>
          <li>600m Run</li>
          <li>5 Rounds: 6 Power Snatch</li>
          <li>6 Muscle-ups</li><li>12 HSPU</li>
          <li>Remaining Time: Max Calories on Any Machine</li>
        </ul>
      </section>
      <section class="section">
        <div class="section-heading"><span class="number">05</span> ACCESSORIES</div>
        <span class="work-label">3 SETS</span>
        <ul><li>10 Bicep Curls</li><li>10 Tricep Extensions</li></ul>
      </section>
    `
  }
};

document.querySelectorAll(".day-card").forEach(card => {
  const day = Number(card.dataset.day);
  const workout = workouts[day];

  if (workout) {
    card.querySelector(".day-focus").textContent = workout.focus;
    card.querySelector(".content").innerHTML = workout.content;
  }
});
