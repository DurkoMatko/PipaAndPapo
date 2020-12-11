<template>
  <div class="main">
    <h1 class="lg-heading">My Personal Projects</h1>
    <vue-timeline-update
    :date="new Date('2020-08-08')"
    category="GAME / WEB DEVELOPMENT"
    title="AVALON: THE RESISTANCE"
    description="<p class='myWorkHeader'>Avalon: The Resistance is a card role playing game for multiple players, which we have digitalized.</p>
    <p>Avalon is a game of social deduction in which 5-10 players work together to find the players that have been dealt the evil roles. To remove the need for a separate person called a 'game master', we have digitalized Avalon so that you and your friends can play using your smartphones and a TV.</p>
    <p>My motivation for this project was that we used to play Avalon, but every round one player had to sit out and function as the 'game master'. In our version the application functions as the game master, resulting in a game experience where all players can partake.</p>
    <p>When the time came to choose a tech stack for this project, I had just started working at Netpower. Therefore I decided that we should use the same stack as in Flydrone.no, so that this project could be used as a learning grounds for the project at work. This includes a C#/.NET Core backend with a React.js with Mobx frontend. The database uses Entity Framework Core for code-first migrations and this whole project is hosted, with full CI/CD, on Azure. Additionally, we used WebSockets for real-time connections, which has grown to become one of my favorite technologies.<p>
    <p>This project is made in collaboration with Simon Degen. Check out <a href='http://www.github.com/SimonDegen' target='_blank'>his GitHub</a>, and check out the project at <a href='http://avalon.s0rensen.no' target='_blank'>avalon.s0rensen.no</a></p>"
    thumbnail="/images/avalon.png"
    icon="sports_esports"
    color="blue"
    />
    <vue-timeline-update
    :date="new Date('2020-07-08')"
    category="WEB DEVELOPMENT"
    title="Foospower - Foosball statistics for Netpower"
    description="<p class='myWorkHeader'>For more competetive play of foosball in the breaks at Netpower I created an appilcation which tracks stats for each player.</p>
    <p>This web application lets the user chose from a pool of players consiting of the employees at the Netpower office. The chosen players are randomly assigned roles at the foosball table.</p>
    <p>After the game number of goals are recorded. Therefore we can extract fun statistics about each player. For example, global win rate, difference in win rate at the different positions and average outcome with a specific teammate.<p>
    <p>I wanted to create this project as fast as possible. Therefore, I chose the familiar MEVN (MongoDB, Express, VueJS, Node.js) stack. On this project I decided to host the backend on Azure to further experiment with the different cloud hosting services.</p>"
    thumbnail="/images/foospower.png"
    icon="code"
    color="green"
    />
    <vue-timeline-update
    :date="new Date('2019-05-01')"
    category="WEB DEVELOPMENT"
    title="LED WEBSITE"
    description="<p class='myWorkHeader'>LED is the student organization for Computer Science and Elictrical Engineering at The University of Stavanger</p>
    <p>When I joined the LED board, it was obvious that we needed a new website. This was less than half a year after I started at Smartstudy AS. To further explore the technological stack we used at Smartstudy I decided to create this website in a similar stack. Read more about this in <a href='/#/work'>My Work</a>.</p>
    <p>The LED website is running on a Vue.js frontend with an Express.js backend which is hosted on AWS. The site is live at <a href='http://led-uis.no' target='_blank'>led-uis.no</a>. (as of 08/2020)</p>"
    thumbnail="/images/led.png"
    icon="code"
    color="green"
    />
    <vue-timeline-update
    :date="new Date('2019-04-01')"
    category="GAME / WEB DEVELOPMENT"
    title="Multiplayer Hangman"
    description="<p class='myWorkHeader'>A multiplayer hangman game with lots of bugs ;)</p>
    <p>For our web development course I wanted to challenge myself with a project that was a bit more complicated than what we learned in that course.</p>
    <p>This hangman game was created in Flask as this was what we used for the course. This helped towards my exam and further growth as a developer.</p>
    <p>Check out the horrible code at <a href='https://github.com/sorensenmarius/mpHangman' target='_blank'>my GitHub</a>.</p>"
    icon="code"
    color="blue"
    />
    <vue-timeline-update
    :date="new Date('2018-10-01')"
    category="WEB DEVELOPMENT"
    title="THIS PORTFOLIO"
    description="<p class='myWorkHeader'>A simple static portfolio made in Vue.js. One of my first web development projects.</p>
    <p>When I started in Smartstudy I created this project to learn Vue faster, and use it as a playground. </p>"
    icon="code"
    color="green"
    />
  </div>
</template>
<!-- Avalon, LED Nettsiden, Portfolio, Multiplayer hangman -->

<script>
export default {
  name: "work"
};
</script>
<style lang="scss">
@import "../css/work.scss";
@import '../css/config';
@import '../css/mobile';

a {
  color: white;
}

h6 {
  margin: 0;
}
</style>