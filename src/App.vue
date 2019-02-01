<template>
  <div class="App">
    <ais-index
      :app-id="appId"
      :api-key="appKey"
      :index-name="indexName"
    >
      <div class="container">
        <div class="row">
          <div class="col-3">
            <ais-search-box></ais-search-box>

            <custom></custom>

            <h4>Manufacturer</h4>
            <ais-refinement-list attribute-name="manufacturer"></ais-refinement-list>

            <h4>Type</h4>
            <ais-refinement-list attribute-name="type"></ais-refinement-list>
          </div>

          <div class="col-9">
            <ais-results>
              <template slot-scope="{ result }">
                <h2>
                  <ais-highlight :result="result" attribute-name="name"></ais-highlight>
                </h2>
              </template>
            </ais-results>
          </div>
        </div>
      </div>

    </ais-index>
  </div>
</template>

<script>
import Custom from './components/Custom';

export default {
  name: 'App',

  components: {
    Custom,
  },

  data() {
    return {
      appId: process.env.VUE_APP_ALGOLIA_APP_ID,
      appKey: process.env.VUE_APP_ALGOLIA_APP_KEY,
      indexName: process.env.VUE_APP_ALGOLIA_INDEX_NAME,
    };
  },
};
</script>

<style>
.App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
