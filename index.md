<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description"
    content="Welcome to the official portfolio Site of Avinash A. Kshirsagar. A full-stack developer">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/viewPortfolioLightbox.css">
  <link rel="stylesheet" href="./css/styleResponsive.css">
  <link rel="stylesheet" href="./css/about.css">
  <title>Avinash's Website</title>
</head>

<body>

  <!-- HEADER -->
  <header id="header">
    <div class="logo">
      <img src="./images/logo.png" alt="logo" class="logoImage">
      Avinash
    </div>
    <div class="menu">
      <a class="underline active" href="#greeting">Home</a>
      <span class="underline" id="aboutButton">About</span>
      <a class="underline" href="#skills">Skills</a>
      <a class="underline" href="#portfolio">Portfolio</a>
    </div>
    <div class="contact">
      <a href="#contactMe" class="button" id="contactButton">
        Contact Me
      </a>
    </div>
  </header>

  <!-- HEADER RESPONSIVE -->
  <header id="resHeader">
    <div class="logo">
      <img src="./images/logo.png" alt="logo" /> Avinash
    </div>
    <div class="hamburgerMenu">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    </div>
  </header>
  <div id="resMenu">
    <div class="hamburgerMenu">&times</div>
    <div class="menu">
      <a class="underline active" href="#greeting">Home</a>
      <span class="underline" id="aboutButton">About</span>
      <a class="underline" href="#skills">Skills</a>
      <a class="underline" href="#portfolio">Portfolio</a>
      <a class="underline" href="#contactMe" id="contactButton">Contact Me</a>
    </div>
  </div>

  <!-- MAIN CONTENT   -->
  <div class="body">

    <!-- JUMBOTRON -->
    <div id="backdrop">
      <img src="./images/cover.png" alt="">
    </div>
    <div id="greeting">
      <h1> Hi, I'm Avinash !!</h1>
      <p>
        Welcome to my Portfolio website where you can know more about me, see all of my skills,
        and view some of my previous projects in frontend and backend application development.
      </p>
      <a class="button" href="./docs/Resume_Work_2019.pdf" download target="_blank"> Download Resume </a>
    </div>

    <div id="whiteSpace">

      <!-- ABOUT (BRIEF) -->
      <div id="aboutBrief">
        <h2 class="sectionHeader"> Personal Profile </h2>
        <div class="info">
          <p>
            My name is Avinash Ashok Kshirsagar. I am a full-stack web application developer with over 2 years of
            experience. I have close to two years combined work experience in web-development and digital marketing
            company in Pune.

            I have a BCA degree from Madurai Kamaraj University, college branch Nashik(MH).
          </p>
          <p>
            I have built multiple Client and Server Side applications for web and mobile platforms. These applications
            range from
            small personal projects to some client projects. My main development stack is
            ASP.NET and Angular
          </p>
        </div>

        <div id="moreAbout" class="button">More About Me</div>
      </div>

      <!-- SKILLS -->
      <div id="skills">
        <h2 class="sectionHeader"> Skills </h2>
        <div id="tools">

          <!-- TOOLS -->
          <ul></ul>
          <div id="toolsLabel">Development Tools</div>

          <!-- CONTROL BUTTONS -->
          <div id="left">
            <svg fill="currentColor" width="50" height="50" viewBox="0 0 40 40"
              style="vertical-align:middle;display:inline-block;" size="50" preserveAspectRatio="xMidYMid meet">
              <g>
                <path
                  d="m25.703333333333337 12.343333333333334l-7.65666666666667 7.656666666666666 7.656666666666666 7.656666666666666-2.3433333333333337 2.3433333333333337-10-10 10-10z">
                </path>
              </g>
            </svg>
          </div>
          <div id="right">
            <svg fill="currentColor" width="50" height="50" viewBox="0 0 40 40"
              style="vertical-align:middle;display:inline-block;" size="50" preserveAspectRatio="xMidYMid meet">
              <g>
                <path
                  d="m16.64 10l10 10-10 10-2.3433333333333337-2.3433333333333337 7.65666666666667-7.656666666666666-7.65666666666667-7.656666666666666z">
                </path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO -->
    <div id="portfolio">
      <div class="top">
        <h2 class="sectionHeader">Portfolio</h2>
        <p>
          Here are some of my current and past projects in Software Development. Some of which are still under
          development.
          Other projects can be found on my GitHub.
        </p>
      </div>
      <div id="portfolioContent">
        <div class="portWrapper">
        </div>

        <div class="portfolioGitHubButton">
          <a class="button" href="https://github.com/AviKshirsagar/" target="blank">More Projects</a>
        </div>
      </div>
    </div>

    <!-- SOCIAL MEDIA LINKS -->
    <div id="socialMedia">
      <h2>Social Media Links</h2>
      <p>
        Here are my social media links. Feel free to follow and/or contact me.
      </p>

      <div class="links">
        <a target="blank" href="https://www.facebook.com/" class="link fb">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a target="blank" href="https://twitter.com/?lang=en" class="link twi">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a target="blank" href="https://www.youtube.com/channel/UCN1WW6ojd_UMhwesx2qu3Dw?view_as=subscriber"
          class="link yt">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
        <a target="blank" href="https://www.instagram.com/" class="link ins">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a target="blank" href="https://github.com/AviKshirsagar/" class="link git">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>

    <!-- CONTACT ME -->
    <div id="contactMe">
      <div class="left">
        <h2 class="sectionHeader"> Contact Me </h2>
        <p>
          Fill in your name, official email and your message / Inquiry in the form provided and i'll get to it as soon
          as possible.
        </p>
        <p>
          Feel free to contact -
          <article>
            Mobile -  +91 8308740178
          </article>
          <article>
            E-mail -  avi.kshisagar@live.com
          </article>
        </p>
        <br />
        <br />
        <h3> Thank You </h3>
      </div>

      <!-- CONTACT FORM -->
      <form class="right" action="" method="POST">
        <input type="text" placeholder="Full Name">
        <input type="text" placeholder="Email">
        <textarea placeholder="Your Message"></textarea>
        <button class="button">Send Message</button>
      </form>
    </div>

    <!-- BOTTOM SECTION -->
    <a href="#greeting" id="backtoTop">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    </a>
    <div id="footerMenu">
      <a class="underline" href="#greeting"> Home </a>
      <span class="underline" id="footerAbout"> About </span>
      <a class="underline" href="#skills"> Skills </a>
      <a class="underline" href="#portfolio"> Portfolio </a>
    </div>
    <footer>&copyRight 2020 Developed By Avinash A. Kshirsagar</footer>
  </div>


  <!-- -------------------------------------------------------------------------------------------------------- -->
  <!-- ------------------ ABOUT PAGE -------------------------------------------------------------------------- -->
  <!-- -------------------------------------------------------------------------------------------------------- -->
  <div id="about">
    <!-- CANCEL ABOUT BUTTON -->
    <div id="cancelAbout">&#10006;</div>

    <!-- RIBBONS -->
    <div class="symbols">
      <div id="topRibbon"></div>
      <div id="bottomRibbon"></div>
    </div>

    <div class="aboutContent">

      <!-- AVATAR -->
      <div id="aboutAvatar">
        <img src="./images/pic_me.jpg" />
      </div>

      <!-- MAIN CONTENT -->
      <div id="aboutContent">
        <h1>Hi, i'm Avinash</h1>

        <article id="aboutBody">
          <section>
            <p>
              My name is Avinash Ashok Kshirsagar. I am 29 years old and I live in Pune, Maharashtra.
              I have Bachelor's degree in Computer Applications from Madurai Kamaraj University, Tamil-nadu, Center
              Nashik(MH).
            </p>
            <p>
              I started journey of Programming and development after my HSC
              I started by learning the basics of C and C++, but later moved to NIIT nashik, As the increasing interest
              in programming I started learning web technologies and grab the necessary knowledge in HTML css and dot
              net.
              Unfortunately I didnt searched the job in the same field due to lac of market studies during my
              Graduation.
              Later I join on the post of Service Manager in a Bike dealership, I performed as a manager for 3 years
              well. happy about the experience in the proprietorship.
              Everyting was good in the life, but the passion again make me able do something in the development.
              Suddenly I went to hyderabad for further web-technology studies. I have successfully completed the
              relevant courses in hyderabad and went back to Maharashtra in Pune city.
              And here I am now........! :)
            </p>
          </section>

          <section>
            <h2>Web Deisign/Development</h2>
            <p>
              I do fullstack web design and development, I am currently building the web platform (frontend and
              backend) for a startup app called <a href="ShopAny.com">ShopAny</a> (coming soon).
              I have also built other Websites and Web Applications, some of which can be found in the portfolo section,
              as well as my
              <a href="https://github.com/AviKshirsagar/" target="_blank">Github Page.</a>
            </p>
            <p>
              I am Good in frontend and backend web development languages like HTML5, CSS 4, JavaScript, C#
              and TypeScript as well as various frontend libraries like AngularJs and Angular-8.
            </p>
          </section>

          <section>
            <h2>Mobile App Development</h2>
            <p>
              I only recently started Mobile Application development. Although, I familiarized myself with Native
              Android and hybrid app designing with cordova libraries.
              development (Java and XML) a long time ago. In addition, I haven't completed any Mobile App Projects as of
              yet.
              But I have converted one web-site into android apk using Cordova.
            </p>
            <p>
              However, I am currently building a mobile app for the startup mentioned above. I build mobile
              applications with Angular framework. The hybrid app development framework is great for building Android
              and
              IOS Applications due to it's performance and features.
            </p>
            <p>
              Besides Angular, I also have experience with cordova, another all hybrid app development framework.
            </p>
          </section>

          <section>
            <h2>Backend Development</h2>
            <p>
              As a Full-stack developer, you need to know a few Server-side languges and frameworks. I currently
              use SQL DB and .NET WEB-API for my backend projects.
              In contrast, I use ASP .NET MVC for bigger applications what require speed and scalability.
            </p>
            <p>
              I am currently learning React, and plan to learn NodeJs next and MEAN stack as well Because these
              languages are very fast
              and
              scalable, and well suited for building efficient backend solutions.
            </p>
          </section>
        </article>

        <br>
        <br>
        <br>

        <div class="socialMedia">
          <h3>My Social Media Links</h3>

          <div class="links">
            <a href="https://www.facebook.com/" class="link fb">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://twitter.com/?lang=en" class="link twi">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCN1WW6ojd_UMhwesx2qu3Dw?view_as=subscriber" class="link yt">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" class="link ins">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://github.com/AviKshirsagar/" class="link git">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>

  <!-- -------------------------------------------------------------------------------------------------------- -->
  <!-- ------------------ SELECTED PROJECT LIGHTBOX ----------------------------------------------------------- -->
  <!-- -------------------------------------------------------------------------------------------------------- -->
  <div class="selectedProjectLightBox">

    <!-- THE BOX -->
    <div class="splBox">
      <div id="splCancel" onClick="toggleViewPortfolioLightBox()"> X </div>
      <div class="splMain">
        <div id="splTitle"></div>
        <div id="splContent"></div>
      </div>
      <div class="splDetails">
        <h3>Description</h3>
        <div id="splDesctiption"></div>

        <div id="splToolsUsed"></div>

        <h3>Link</h3>
        <div id="splLink"></div>
      </div>
    </div>

    <!-- BACK BUTTON -->
    <div class="splBack" onClick="toggleViewPortfolioLightBox()"></div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="./js/index.js"></script>
</body>

</html>
