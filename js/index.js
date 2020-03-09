$(document).ready(function () {

  // =======================================================================
  //  HEADER SECTION
  // =======================================================================
  var showingDropDown = false;

  function toggleDropDown() {
    if (showingDropDown) {
      $("#resMenu").css("width", "0");
      showingDropDown = false;
    } else {
      $("#resMenu").css("width", "100%");
      showingDropDown = true;
    }
  }
  $(".hamburgerMenu").click(function () {
    toggleDropDown();
  });


  // =======================================================================
  //  SMOOTH SCROLLING
  // =======================================================================
  var scrollLink = $('header a, #backtoTop, #footerMenu a, #resMenu a');

  //  Smooth scrolling
  scrollLink.click(function (e) {
    toggleDropDown();
    if (!showingAbout) {
      e.preventDefault();
      $('header a').removeClass('active');

      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
    }
  });

  $(window).scroll(function () {
    scrollLinkSwitch($(this).scrollTop());
  });

  //  Active link switching
  function scrollLinkSwitch(scrollbarLocation) {
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $("#contactButton").removeClass('active');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

      }
    })
  }


  // =======================================================================
  //  ABOUT SECTION
  // =======================================================================
  var showingAbout = false;

  // Toggle buttons
  $("#aboutButton, #moreAbout, #footerAbout").click(function () {
    toggleDropDown();
    toggleAbout();
  });

  // Dissmiss buttons
  $(".logo, #cancelAbout").click(function () {
    if (showingAbout) {
      removeAbout();
      showingAbout = false;
    }
  });

  // Toggle the About Section
  function toggleAbout() {
    if (showingAbout) {
      removeAbout();
      $("#aboutButton").removeClass("active");

      showingAbout = false;
    } else {
      showAbout();
      $("#aboutButton").addClass("active");
      $('header a').removeClass('active');
      showingAbout = true;
    }
  }

  function showAbout() {

    // Prevent double scrollbars
    $("body").css("overflow", "hidden");

    // Show the about
    $("#about").css("display", "block");

    // roll the ribbons
    setTimeout(function () {
      $("#topRibbon").addClass("roll");
      $("#bottomRibbon").addClass("roll");
    }, 100);

    // Slide up the Content
    setTimeout(function () {
      $("#aboutContent").addClass("roll");
    }, 400);

    // Bring up the Avatar
    setTimeout(function () {
      $("#aboutAvatar img").addClass("roll");
    }, 1200);
  }

  function removeAbout() {
    $("body").css("overflow", "visible");

    // Slide down the content
    $("#aboutContent").removeClass("roll");
    $("#aboutAvatar img").removeClass("roll");

    // remove ribbons
    setTimeout(function () {
      $("#topRibbon,#bottomRibbon").removeClass("roll");
    }, 400);

    // hide the about
    setTimeout(function () {
      $("#about").css("display", "none");
    }, 1000);
  }

  //  =======================================================================
  //   SKILLS SECTION
  //  =======================================================================
  var dom = $("#tools ul");
  var content = "";
  var skills = [
    {
      img: "./images/logo_html.png",
      title: "HTML 5",
      description: "I use HTML to build static web pages or PHP-based web applications.",
      proficiency: "90%"
    },
    {
      img: "./images/logo_css.png",
      title: "CSS 4",
      description: "I use CSS with HTML and Angular to style my web applications.",
      proficiency: "80%"
    },
    {
      img: "./images/logo_js.png",
      title: "JavaScript (ES6)",
      description: "I use JavaScript to build Client-side and Server-Side applications",
      proficiency: "65%"
    },
    {
      img: "./images/logo_angular.png",
      title: "Angular",
      description: "This is my main front-end development framework, and I use it for almost-all web applications.",
      proficiency: "75%"
    },
    {
      img: "./images/logo_apnet.png",
      title: "Asp .Net",
      description: "I use Asp .Net to build server side pages to my websites.",
      proficiency: "85%"
    },
    {
      img: "./images/mvc.png",
      title: "ASP .Net MVC",
      description: "I use ASP .Net MVC to build web applications with reusable functionality.",
      proficiency: "70%"
    },
    {
      img: "./images/logo_bootstrap.png",
      title: "Bootstrap",
      description: "I use bootstrap to design make responsive, well aligned content of html pages.",
      proficiency: "95%"
    },

    //3rd party libraries
    {
      img: "./images/logo_material.png",
      title: "Angular-Material",
      description: "I use material design to design User-Interfaces for my angular web and mobile applications.",
      proficiency: "80%"
    },
    {
      img: "./images/logo_highcharts.png",
      title: "High-Charts",
      description: "I use high-charts to implement the charts and diagrams for my angular web and mobile applications.",
      proficiency: "60%"
    }
    // {
    //   img: "./images/logo_cordova.png",
    //   title: "Cordova lib",
    //   description: "I use cordova to convert my stunning UI and html pages into Android and IOS apps.",
    //   proficiency: "50%"
    // }
  ];

  skills.forEach(function (item) {
    content += "<li>" +
      "<div class='tool' >" +
      "<div class='toolInfo'>" +
      "<div class='toolPic'>" +
      "<img src='" + item.img + "' />" +
      "</div>" +
      "<div class='toolDescription'>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.description + "</p>" +
      "</div>" +
      "</div>" +
      "<div class='toolBack'>" +
      "<div>" +
      "<h2>" + item.proficiency + "</h2>" +
      "</div>" +
      "<p>Proficiency</p>" +
      "</div>" +
      "</div >" +
      "</li>";
  });
  dom.html(content);


  //  =======================================================================
  //   SKILL SECTION
  //  =======================================================================
  function scrollTools(isLeft) {
    if (isLeft) {
      scrollNo = (scrollNo <= 0) ? 0 : scrollNo - 400;
    } else {
      scrollNo = (scrollNo >= $("#skills ul").outerWidth()) ? $("#skills ul").outerWidth() : scrollNo + 400;
    }

    $('#skills ul').animate({
      scrollLeft: scrollNo
    }, 600);

    var content = (scrollNo >= 800) ? "Design Tools" : "Development Tools";

    // Change Label
    $('#toolsLabel').html(content);
  }

  //  SCROLLING THE SKILLS SECTION
  var scrollNo = 0; // you can use this number to manipulate the label

  $('#left').click(function () { scrollTools(true); });
  $('#right').click(function () { scrollTools(false); });

});


// =======================================================================
//  PORTFOLIO SECTION
// =======================================================================
const portfolio = [
  {
    title: "My Farming",
    image: './images/portfolioScreenshots/Screen_MyFarming.png',
    description: `
      A web application to help farmers, administrators record of daily expenses calculate wages, track yearly income expenditure of farming and crop management.
    `,
    content: `
      <img src="./images/portfolioScreenshots/Screen_MyFarming.png"/>
      <img src="./images/portfolioScreenshots/Screen_MyFarmingAdmin.png"/>
      <img src="./images/portfolioScreenshots/Screen_MyFarmingHighchartImport.png"/>
    `,
    toolsUsed: "Angular, Angular-Material, High-charts, TypeScript",
    link: "https://github.com/AviKshirsagar/"
  },

  {
    title: "Gym Club",
    image: './images/portfolioScreenshots/ScreenUR-Gym.png',
    description: `
      A web application developed for the local gym, Cross-fit material and staff, organized in the application.
      Members can access the all events of gym and registraion, login and Quotation modules are implemented.
    `,
    content: `
      <img src="./images/portfolioScreenshots/ScreenUR-Gym.png"/>
      <img src="./images/portfolioScreenshots/ScreenUR-Gym.png"/>
    `,
    toolsUsed: "ASP .Net, HTML5, CSS3, SQL",
    link: "http://#/"
  },

  {
    title: "Html bootstrap Portfolio responsive design",
    image: './images/portfolioScreenshots/ScreenHtmlBootstrapPotfolio.png',
    description: `
      The portfolio simple html template designed to understand the responsive designing using bootstrap
      It is hosted too on the github <b>This application is still under development</b>
    `,
    content: `
      <img src="./images/portfolioScreenshots/ScreenHtmlBootstrapPotfolio.png"/>
      <img src="./images/portfolioScreenshots/ScreenHtmlBootstrapPotfolioSignUp.png"/>
    `,
    toolsUsed: "Html-5 and Bootstrap only",
    link: "https://avidotnethyd.github.io/site/index.html"
  },

  {
    title: "Cordova implementation with html site",
    image: './images/portfolioScreenshots/ScreenHtmlMobile.png',
    description: `
      As the simple html and bootstrap portfolio template is designed same is converted into the Android apk using Cordova library implentation, same we can create a platform for IOS. 
    `,
    content: `
      <img src="./images/portfolioScreenshots/ScreenHtmlMobile.png"/>
      <img src="./images/portfolioScreenshots/ScreenHtmlMobile3.png"/>
    `,
    toolsUsed: "Html, bootstrap, cordova",
    link: "http://github.com/AviKshirsagar/"
  },

  {
    title: "MyPortfolio site",
    image: './images/portfolioScreenshots/ScreenMyPortfolio1.png',
    description: `
      My portfolio website where you can find all my development skills and project details. 
    `,
    content: `
      <img src="./images/portfolioScreenshots/ScreenMyPortfolio1.png"/>
      <img src="./images/portfolioScreenshots/ScreenMyPortfolio2.png"/>
      <img src="./images/portfolioScreenshots/ScreenMyPortfolio3.png"/>
      <img src="./images/portfolioScreenshots/ScreenMyPortfolio4.png"/>
    `,
    toolsUsed: "Html, css, javaScript, bootstrap",
    link: "http://github.com/AviKshirsagar/MyPortfolio/"
  }
];
let portfolioItems = '';


// Map the portfolio items to widgets
for (var i = 0; i < portfolio.length; i++) {
  let extraClass = "";
  if (portfolio[i].title == "Vybite") extraClass = "app";

  portfolioItems += `
    <div class="portfolioItem ${extraClass}" onClick="viewPortfolioDetails(${i})">
      <div class="portfolioPicture">
        <img src="${portfolio[i].image}"/>
      </div>
      <b>${portfolio[i].title}</b>
    </div>
  `;
}

// Show the portfolio Items
$(".portWrapper").html(portfolioItems);

/**
* View Portfolio Details
*/
function viewPortfolioDetails(index) {
  let data = portfolio[index];
  $("#splContent").html(data.content);
  $("#splTitle").html(data.title);
  $("#splDesctiption").html(data.description);
  $("#splToolsUsed").html(data.toolsUsed);
  $("#splLink").html(`<a href=${data.link} target="blank"> ${data.link} </a>`);

  toggleViewPortfolioLightBox();
}

/**
 * Toggle the View Portfolio Lightbox
 */
function toggleViewPortfolioLightBox() {
  let display = $(".selectedProjectLightBox").css("display") === "none" ? "block" : "none";
  $(".selectedProjectLightBox").css("display", display);
}