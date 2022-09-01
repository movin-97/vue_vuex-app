<template>
  <!-- Button trigger modal -->
  <div class="mt-3 d-flex justify-content-center">
    <button
      type="button"
      class="btn btn-danger"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalThree"
    >
      Delete
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalThree"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h2>Are you Sure Delete User?....</h2>
          <div class="mt-3"></div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";



export default class UserModal extends Vue {



  // mounted() {
  //   this.deleteUser()
  // }
  public deleteUser(id:number){
    axios.delete(`https://reqres.in/api/users/{id}`).then((res)=>{
      console.log(res)
    })
  }
  
}
</script>

<style>
</style>