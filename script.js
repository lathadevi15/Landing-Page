function loadSection(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

// Load all sections
loadSection("hero", "hero.html");
loadSection("about", "about.html");
loadSection("benefits", "benefits.html");
loadSection("features", "features.html");
loadSection("agencies", "agencies.html");
loadSection("contact", "contact.html");


  // Save scroll position before the page unloads
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPos", window.scrollY);
  });

  // Scroll to previous position on load
  window.addEventListener("load", function () {
    const scrollPos = localStorage.getItem("scrollPos");
    if (scrollPos) {
      window.scrollTo(0, parseInt(scrollPos));
    }
  });

