<template>
  <div class="Custom" v-if="refinements.length">
    <h3 class="Custom__title">Selected Refinements</h3>

    <div>
      <button class="btn btn-sm btn-primary Custom__button" v-for="item in refinements" :key="item.name" @click="handleClick(item)">{{ item.name }}</button>
    </div>
  </div>
</template>

<script>
import { Component } from 'vue-instantsearch';

export default {
  name: 'Custom',

  mixins: [Component],

  computed: {
    refinements() {
      return this.searchStore.activeRefinements;
    },
  },

  methods: {
    handleClick(item) {
      this
        .searchStore
        .toggleFacetRefinement(item.attributeName, item.name)
      ;
    },
  },
};
</script>

<style>
.Custom {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.Custom__title {
  font-size: 20px;
}

.Custom__button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
