// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Skill Set
$(document).ready(function() {
  var skillset = {
    languages: [
      {
        name: "Python",
        skill: 5
      },
      {
        name: "Java",
        skill: 4
      },
      {
        name: "Shell",
        skill: 3
      },
      {
        name: "C",
        skill: 3
      },
      {
        name: "HTML",
        skill: 2
      }
    ],

    ds: [
      {
        name: "Pandas",
        skill: 4
      },
      {
        name: "NumPy",
        skill: 4
      },
      {
        name: "Scikit-learn",
        skill: 3
      },
      {
        name: "Pytorch",
        skill: 2
      }
    ],
    frameworks: [
      {
        name: "DRF",
        skill: 4
      },
      {
        name: "Django",
        skill: 3
      },
      {
        name: "Sass",
        skill: 2
      }
    ],
    databases: [
      {
        name: "MySQL",
        skill: 4
      },
      {
        name: "Postgres",
        skill: 3
      },
      {
        name: "MongoDB",
        skill: 3
      },
      {
        name: "Redis",
        skill: 2
      }
    ],

    other: [
      {
        name: "Docker",
        skill: 4
      },
      {
        name: "Nginx",
        skill: 3
      },
      {
        name: "AWS",
        skill: 2
      }
    ],
    pm: [
      {
        name: "Git",
        skill: 4
      },
      {
        name: "Jira",
        skill: 3
      },
      {
        name: "Slack",
        skill: 3
      }
    ]
  };

  for (var i in skillset.languages) {
    var percent = (skillset.languages[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.languages[i].name +
      "</div></div></li>";
    $(str).appendTo($(".languages"));
  }

  for (var i in skillset.ds) {
    var percent = (skillset.ds[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.ds[i].name +
      "</div></div></li>";
    $(str).appendTo($(".ds"));
  }

  for (var i in skillset.frameworks) {
    var percent = (skillset.frameworks[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.frameworks[i].name +
      "</div></div></li>";
    $(str).appendTo($(".frameworks"));
  }
  for (var i in skillset.databases) {
    var percent = (skillset.databases[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.databases[i].name +
      "</div></div></li>";
    $(str).appendTo($(".databases"));
  }
  for (var i in skillset.other) {
    var percent = (skillset.other[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.other[i].name +
      "</div></div></li>";
    $(str).appendTo($(".other"));
  }

  for (var i in skillset.pm) {
    var percent = (skillset.pm[i].skill * 100) / 5;
    var str =
      '<div class="skillbar-container"><div class="skillbar" style="background: #FFF;" data-percent="' +
      percent +
      '%"><li>' +
      skillset.pm[i].name +
      "</div></div></li>";
    $(str).appendTo($(".pm"));
  }
  $(".skillbar").each(function() {
    $(this).animate(
      {
        width: $(this).attr("data-percent")
      },
      2000
    );
  });
});
