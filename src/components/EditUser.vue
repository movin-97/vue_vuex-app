<template>
  <!-- Button trigger modal -->
  <div class="mt-3 d-flex justify-content-center">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalOne"
    >
      Edit
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalOne"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="row p-3" @submit.prevent="editUser">
            <div class="mb-3">
              <label for="first_name" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                placeholder="First Name"
              />
            </div>

            <div class="mb-3 mt-2">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-3 mt-2">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="mt-3">
              <button type="submit" class="btn btn-success w-100" data-bs-dismiss="modal"
            aria-label="Close">
                Edit User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import {Vue } from "vue-class-component";

export default class UserModal extends Vue {

  public editUser(id:number){
    axios.put(`https://reqres.in/api/users/${id}`)
  }

}
</script>

<style>
</style>