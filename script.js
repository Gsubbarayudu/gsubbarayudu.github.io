document.addEventListener("DOMContentLoaded", () => {
  // --- Card Animation Observer ---
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const cards = document.querySelectorAll(".card.animate-on-scroll");

  cards.forEach((card) => {
    const cardIndexInParent = Array.from(card.parentNode.children).indexOf(
      card
    );
    card.style.setProperty("--card-index", cardIndexInParent);
  });

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((element) => {
    animationObserver.observe(element);
  });

  // --- Navbar Active Link Scrollspy Observer ---
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const scrollspyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
    }
  );

  sections.forEach((section) => {
    scrollspyObserver.observe(section);
  });

  // --- Special Animations ---

  // 1. Hero Title Typing Effect
  const heroTitleElement = document.getElementById("hero-title");
  const heroTitleText = "Your Partner in Student Empowerment";
  let i = 0;
  function typeWriter() {
    if (i < heroTitleText.length) {
      heroTitleElement.innerHTML += heroTitleText.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }
  setTimeout(typeWriter, 500);

  // 2. Achievements Count-Up Effect
  const achievementsSection = document.getElementById("achievements");
  const numbers = document.querySelectorAll(".achievement-number");

  const countUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          numbers.forEach((number) => {
            const target = +number.getAttribute("data-target");
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;

            const timer = setInterval(() => {
              current += 10;
              number.textContent = current;
              if (current == target) {
                clearInterval(timer);
                number.textContent = target.toLocaleString() + "+";
              }
            }, stepTime);
          });
          observer.unobserve(achievementsSection);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (achievementsSection) {
    countUpObserver.observe(achievementsSection);
  }

  // --- Certificate Verification Logic ---
  const certificateForm = document.getElementById("certificate-form");
  if (certificateForm) {
    const studentIdInput = document.getElementById("student-id");
    const errorContainer = document.getElementById("id-error");

    certificateForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const studentIdValue = studentIdInput.value.trim().toUpperCase();
      const resultContainer = document.getElementById("certificate-result");

      if (studentIdValue === "") {
        studentIdInput.classList.add("input-error");
        errorContainer.textContent = "Please enter your Skillraace ID.";
        resultContainer.innerHTML = "";
        return;
      }

      studentIdInput.classList.remove("input-error");
      errorContainer.textContent = "";
      resultContainer.innerHTML = `<p>Searching...</p>`;

      const studentData = studentDatabase.find(
        (student) => student.id.toUpperCase() === studentIdValue
      );

      if (studentData) {
        if (studentData.hasCertificate) {
          const certificatePath = `${studentData.id}.pdf`;
          resultContainer.innerHTML = `
                        <div class="certificate-display animate-on-scroll visible">
                            <h3>Certificate for ${studentData.name}</h3>
                            <p>Displaying certificate for ID: ${studentData.id}.</p>
                            <iframe src="${certificatePath}" title="Certificate for ${studentData.name}"></iframe>
                            <a href="${certificatePath}" download class="btn">Download Certificate</a>
                        </div>
                    `;
        } else {
          // UPDATED VARIABLE from studentIdInput to studentIdValue
          resultContainer.innerHTML = `
                        <div class="highlight-box error-box animate-on-scroll visible">
                            <div class="error-cartoon">
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 90 A40 40 0 1 1 50 10 A40 40 0 1 1 50 90 Z" fill="#f0f0f0"/>
                                    <circle cx="35" cy="45" r="5" fill="#333"/>
                                    <circle cx="65" cy="45" r="5" fill="#333"/>
                                    <path d="M35 70 Q50 55 65 70" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
                                    <path d="M20 30 Q25 20 35 25" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="error-text">
                                <p><strong>Certificate Not Yet Available for ID: ${studentIdValue}</strong><br>The student record was found, but the certificate file has not been uploaded yet. Please check back later.</p>
                            </div>
                        </div>
                    `;
        }
      } else {
        // UPDATED VARIABLE from studentIdInput to studentIdValue
        resultContainer.innerHTML = `
                    <div class="highlight-box error-box animate-on-scroll visible">
                        <div class="error-cartoon">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 90 A40 40 0 1 1 50 10 A40 40 0 1 1 50 90 Z" fill="#f0f0f0"/>
                                <circle cx="35" cy="45" r="5" fill="#333"/>
                                <circle cx="65" cy="45" r="5" fill="#333"/>
                                <path d="M35 70 Q50 55 65 70" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
                                <path d="M75 25 Q80 20 85 30" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="error-text">
                            <p><strong>No certificate found for ID: ${studentIdValue}</strong>. Please check the ID and try again. If the issue persists, contact our support team.</p>
                        </div>
                    </div>
                `;
      }
    });

    studentIdInput.addEventListener("input", function () {
      if (studentIdInput.classList.contains("input-error")) {
        studentIdInput.classList.remove("input-error");
        errorContainer.textContent = "";
      }
    });
  }
});
// --- NEW: Hamburger Menu Logic ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
