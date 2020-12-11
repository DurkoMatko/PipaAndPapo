<template>
  <div class="main">
    <h1 class="lg-heading">My Professional Work And School</h1>
    <vue-timeline-update
      :date="new Date()"
      category="NETPOWER WEB SOLUTIONS"
      title="Full Stack Developer"
      description="<p class='myWorkHeader'>Flydrone.no is a complete platform for registering all drones, droneoperators and organizations operating drones in Norway.</p>
      <p>This projects is created for The Civil Aviation Authority of Norway after a change in the registration requirements for all drone operators in the EU. The product includes a comprehensive user interface for the operators as well as a detailed admin dashboard for the CAA. </p>
      <p>Flydrone has been built as a custom product in a robust C#/.NET backend with a React.js frontend, utilizing Mobx for store management.</p>
      <p>This was my first project at Netpower after my hiring in June 2020. My role was as full stack devloper. In this project I had the oppertunity to take on a senior/project leader role in short periodes of time when needed.<p>"
      thumbnail="/images/flydrone.png"
      icon="code"
      color="blue"
    />
    <vue-timeline-update
      :date="new Date('2020-05-15')"
      category="University of stavanger"
      title="Computer Science Bachelors Thesis"
      description="<p class='myWorkHeader'>In our bachelors thesis we created an algorithm that can move a drone from point A to point B whilst avoiding obstacles.</p>
        <p>We used Python to interpret images and calculate a path that dodges obstacles while moving toward a destination. The algorithm is able to dodge some moving obstales as well as move through a simple maze, with no external input.</p>"
        icon="school"
        color="red"
    />
    <vue-timeline-update
      :date="new Date('2020-05-10')"
      category="CORETREK AS"
      title="Full Stack Developer"
      description="<p class='myWorkHeader'>Nordkraft.no is a website for Nordkraft powered by CoreTreks CMS CorePublish.</p>
      <p>This website was built with BootStrap and on a PHP backend. It has several intricate custom components including an interactive map, video billboards and easy-to-use adding of articles, power plants and projects.</p>
      <p>For the short time I worked at CoreTrek I worked on this problem by my self. I started in CoreTrek in February 2020, but had to move on as soon as in June 2020 because of a reduction of workload as a result of COVID-19.</p>
      <p>The site is live at <a href='http://www.nordkraft.no' target='_blank'>nordkraft.no</a> (as of 08/2020)"
      thumbnail="/images/nordkraft.png"
      icon="code"
      color="orange"
    />
    <vue-timeline-update
      :date="new Date('2019-12-01')"
      category="Smartstudy AS"
      title="Project Leader / Advisor / Developer"
      description="<p class='myWorkHeader'>Introduksjon.no and Smartstudy.no were two LMS platforms for teaching Norwegian.</p>
      <p>Introduksjon and Smartstudy were two Learning Management Systems created with the purpose of simplifying the learning experiance for immigrants to Norway. Both platforms were built using Vue.js with Vuex for store management. The backend was run on Node.js with Hapi.js, using a MongoDB database.</p>
      <p>I worked at Smartstudy from early fall 2018 until they went bankrupt a year and a half later. Introduksjon.no and Smartsudy.no were a small part of Smartstudys business but still a very ambitious digitalization project for a business of Smartstudys size. In this project I was hired as and Advisor/Developer, but quickly moved into a Project Leader role. The technology stack also stays one of my favorite stacks, as proved in <a href='/#/projects'>my projects</a></p>"
      icon="code"
      color="green"
      is-last
    />
  </div>
</template>

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