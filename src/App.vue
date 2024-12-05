<template>
  <div id="HotelWeb">
    <router-view/> 
  </div>
</template>

<script>
</script>

<style>
#HotelWeb {
  display: flex;
  width: 80vw;
  height: 100vh;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

@media (min-width: 1024px) {
  #HotelWeb {
    margin: auto;
  }
}

.title-bold, .title-regular {
    font-family: SimSun, Microsoft YaHei, serif;
}
</style>
