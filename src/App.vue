<template>
  <div id="app">
    <Navbar />
      <div class ="container">
        <router-view />
      </div>

  </div>
</template>

<script>
import postcards from '@/components/postcards'
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
