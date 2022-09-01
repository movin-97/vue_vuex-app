<template>
  <div class="shadow-lg p-3 mb-5 mt-5 bg-body rounded">
    <div class="d-flex justify-content-around">
      <div class="">
        <div class="text-center" :style="stepperProgress"></div>
      </div>

      <div
        class="stepper-item"
        :class="{ current: step == item, success: step > item }"
        v-for="item in 3"
        :key="item"
      >
        <div class="stepper-item-counter">
          <span class="">
            {{ item }}
          </span>
        </div>
        <span class=""> Step {{ item }} </span>
      </div>
    </div>
    <div class="card" >
      <div class="card-header"></div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          
          <footer class="blockquote-footer">
            
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-info" @click="step--" :disabled="step == 1">
        Back
      </button>
      <button
        class="btn btn-success ms-3"
        @click="step++"
        :disabled="step == 4"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Status extends Vue {
  step: number = 1;
  stepperProgress() {
    return (100 / 3) * (this.step - 1) + "%";
  }
}
</script>
<style scoped>
.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  transition: all 500ms ease;
}

.stepper-item.current .stepper-item-counter {
  border-color: #75cc65;
  background-color: #75cc65;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
}
</style>