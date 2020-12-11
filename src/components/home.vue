categories: SPORTS, OUTINGS, NATURE / HIKING, 

<template>
  <main id="home">
    <h1 class="lg-heading"><span class="text-secondary">Pipa</span> & Papo</h1>

    <vue-timeline-update
    :date="new Date('2020-12-07')"
    category="SPORTS"
    title="Beginning of our acroyoga 'career'"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/AcroYogaBeginnings.png"
    icon="sports_soccer"
    color="blue"
    />

    <vue-timeline-update
    :date="new Date('2020-11-29')"
    category="NATURE / HIKING"
    title="Above the clouds"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/Inversion.jpg"
    icon="filter_hdr"
    color="green"
    />

    <vue-timeline-update
    :date="new Date('2020-07-08')"
    category="TRAVEL"
    title="HE GOT SUNBURNED AND SHE DIDN'T EVEN NEED THE SUNSCREAM"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/AmalfiBeach.png"
    icon="flight"
    color="red"
    />

    <vue-timeline-update
    :date="new Date('2020-07-08')"
    category="TRAVEL"
    title="FIRST HOLIDAY"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/FirstHoliday.png"
    icon="flight"
    color="red"
    />

    <vue-timeline-update
    :date="new Date('2020-06-08')"
    category="SPORTS"
    title="Chill in Slacklinepark"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/FirstSlacklineSession.jpg"
    icon="sports_soccer"
    color="blue"
    />

    <vue-timeline-update
    :date="new Date('2019-05-15')"
    category="OUTINGS"
    title="FIRST TIME SPOTTED TOGETHER"
    description="<p class='myWorkHeader'>Quarantine Hike with the 'Truppe'</p>
    <p>em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
    t dolore magna aliquyam erat, sed diam voluptu</p>"
    thumbnail="/images/FirstTimeSeenTogether.png"
    icon="local_bar"
    color="green"
    />
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      titles: ["Love", "Couple", "Personal Site", "Blog"]
    }
  }
}
</script>


<style lang="scss">
@import '../css/home.scss';
</style>