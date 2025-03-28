document.addEventListener("DOMContentLoaded", function () {

  
  const navLinks = document.querySelectorAll(".navbar ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseleave", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "translateY(0)";
      }
    });});

   
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

 
  const getStartedBtn = document.querySelector(".get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      
      this.classList.add("pulse");

      
      setTimeout(() => {
        window.location.href = "explore.html";
      }, 500);
    });
  }


  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = "";

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      typingText.appendChild(span);
    }
  }


  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";

   
      const playIcon = this.querySelector(".play-icon");
      if (playIcon) {
        playIcon.style.opacity = "1";
        playIcon.style.transform = "translate(-50%, -50%) scale(1.2)";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";


      const playIcon = this.querySelector(".play-icon");
      if (playIcon) {
        playIcon.style.opacity = "0.7";
        playIcon.style.transform = "translate(-50%, -50%) scale(1)";
      }
    });

  
  //   card.addEventListener("click", function () {
  //     window.open("https://youtu.be/XmLOwJHFHf0?si=YWc6zqYP_pU1TFkx", "_blank");
  //   });
  // });


  const pathCards = document.querySelectorAll(".path-card");


  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 
  function handleScrollAnimation() {
    pathCards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("animate-in");
      }
    });
  }


  pathCards.forEach((card) => {
    card.classList.add("pre-animation");
  });


  window.addEventListener("scroll", handleScrollAnimation);


  handleScrollAnimation();


  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

     
      if (email === "") {
        alert("Please enter your email address.");
        return false;
      }

      
      alert(
        `Thank you! Your email (${email}) has been subscribed to our newsletter.`
      );
      emailInput.value = "";
    });
  }


  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });


  window.addEventListener("pageshow", function () {
    document.body.classList.add("fade-in");
  });


  const allLinks = document.querySelectorAll('a:not([target="_blank"])');
  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = this.getAttribute("href");
      }, 300);
    });
  });
});

const style = document.createElement("style");
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.fade-in {
        opacity: 1;
    }
    
    body.fade-out {
        opacity: 0;
    }
    
    .pulse {
        animation: pulse 0.5s ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .pre-animation {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("page-loader");


  window.addEventListener("load", function () {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 300);
  });

  
  document.querySelectorAll(".navbar a, .track-tab").forEach((link) => {
    link.addEventListener("click", function (e) {
      
      if (this.href !== window.location.href) {
        loader.classList.remove("hidden");
      }
    });
  });
});


document
  .querySelector("#html-chaiaurcode")
  .addEventListener("click", function () {
    window.open(
      "https://www.youtube.com/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI&index=1&pp=iAQB",
      "_blank"
    );
  });


document
  .querySelector("#python-cwh")
  .addEventListener("click", function () {
    window.open(
      "https://www.youtube.com/watch?v=UrsmFxEIp5k&t=581s&pp=ygUWcHl0aG9uIGNvZGUgd2l0aCBoYXJyeQ%3D%3D",
      "_blank"
    );
  });


document
  .querySelector("#c++-chaiaurcode")
  .addEventListener("click", function () {
    window.open(
      "https://www.youtube.com/watch?v=gCkPJTSZ9mU&pp=ygURY2hhaSBhdXIgY29kZSBjKys%3D",
      "_blank"
    );
  });
