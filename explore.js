
document.addEventListener("DOMContentLoaded", function () {

  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".search-btn");
  const topicCards = document.querySelectorAll(".topic-card");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const noResultsMessage = document.createElement("p");


  noResultsMessage.className = "no-results";
  noResultsMessage.textContent =
    "No learning paths found. Try a different search term.";
  noResultsMessage.style.textAlign = "center";
  noResultsMessage.style.padding = "2rem";
  noResultsMessage.style.color = "#bbb";
  noResultsMessage.style.fontSize = "1.2rem";
  noResultsMessage.style.display = "none";

 
  const topicGrid = document.querySelector(".topic-grid");
  topicGrid.parentNode.insertBefore(noResultsMessage, topicGrid.nextSibling);

 
  let activeFilter = "All Topics";

 
  function filterCards() {
    const searchTerm = searchBar.value.toLowerCase();
    let visibleCount = 0;

    topicCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      const cardContent = title + " " + description;

      
      const isAdvanced =
        description.includes("master") || title.includes("Data Structures");
      const isIntermediate =
        description.includes("frameworks") ||
        title.includes("Git") ||
        title.includes("Cloud");
      const isBeginner = !isAdvanced && !isIntermediate;


      const matchesSearch =
        searchTerm === "" || cardContent.includes(searchTerm);

    
      const matchesFilter =
        activeFilter === "All Topics" ||
        (activeFilter === "Beginner" && isBeginner) ||
        (activeFilter === "Intermediate" && isIntermediate) ||
        (activeFilter === "Advanced" && isAdvanced);

    
      if (matchesSearch && matchesFilter) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });


    if (visibleCount === 0) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
    }
  }


  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    filterCards();
  });


  searchBar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      filterCards();
    }
  });

 
  searchBar.addEventListener("input", function () {
    filterCards();
  });

 
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
   
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

    
      activeFilter = this.textContent;

      filterCards();
    });
  });

  function highlightMatches(searchTerm) {
    if (!searchTerm) return;

    topicCards.forEach((card) => {
      if (card.style.display !== "none") {
        const title = card.querySelector("h3");
        const description = card.querySelector("p");

      
        card.classList.add("search-highlight");
        setTimeout(() => {
          card.classList.remove("search-highlight");
        }, 500);
      }
    });
  }


  searchBtn.addEventListener("click", function () {
    this.classList.add("search-pulse");
    setTimeout(() => {
      this.classList.remove("search-pulse");
    }, 300);

    highlightMatches(searchBar.value.toLowerCase());
  });


  const clearButton = document.createElement("button");
  clearButton.className = "clear-search";
  clearButton.innerHTML = '<i class="fas fa-times"></i>';
  clearButton.style.position = "absolute";
  clearButton.style.right = "60px";
  clearButton.style.top = "50%";
  clearButton.style.transform = "translateY(-50%)";
  clearButton.style.background = "transparent";
  clearButton.style.border = "none";
  clearButton.style.color = "rgba(255, 255, 255, 0.7)";
  clearButton.style.cursor = "pointer";
  clearButton.style.display = "none";

  searchBar.parentNode.appendChild(clearButton);

  
  searchBar.addEventListener("input", function () {
    clearButton.style.display = this.value ? "block" : "none";
  });

  clearButton.addEventListener("click", function () {
    searchBar.value = "";
    clearButton.style.display = "none";
    filterCards();
  });


  const style = document.createElement("style");
  style.textContent = `
    .search-highlight {
      animation: highlightPulse 0.5s ease-in-out;
    }
    
    .search-pulse {
      animation: buttonPulse 0.3s ease-in-out;
    }
    
    @keyframes highlightPulse {
      0% { transform: translateY(0); }
      50% { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); }
      100% { transform: translateY(0); }
    }
    
    @keyframes buttonPulse {
      0% { transform: translateY(-50%) scale(1); }
      50% { transform: translateY(-50%) scale(1.2); }
      100% { transform: translateY(-50%) scale(1); }
    }
  `;

  document.head.appendChild(style);
});

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
