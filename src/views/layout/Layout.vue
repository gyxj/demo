<template>
  <div class="app-wrapper">
    <page-head></page-head>
    <app-main></app-main>
    <page-foot></page-foot>
  </div>
</template>

<script>
import pageHead from './components/pageHead'
import pageFoot from './components/pageFoot'
import AppMain from './components/AppMain'

export default {
  name: 'layout',
  components: {
    pageHead,
    pageFoot,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
