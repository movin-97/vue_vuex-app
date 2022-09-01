<template>
  <div class="container">
    <!-- <Table/> -->
    <Status/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Status from '../components/Product/Status.vue';
// import Table from '../components/Table.vue';

@Options({
  components: {
    // Table,
    Status,
  },
})
export default class HomeView extends Vue {}
</script>
