<template>
  <div class="m-0 p-0">
    <!-- Button trigger modal -->
    <div class="">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add User
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create New User</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- <div class="alert-success" v-if="isSuccessful">User Successfully Add</div> -->
            <form class="row p-3" @submit.prevent="addUser">
              <div class="mb-3">
                <label for="first_name" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  placeholder="First Name"
                  v-model="userData.username"
                />
              </div>

              <div class="mb-3 mt-2">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  v-model="userData.email"
                />
              </div>
              <div class="mb-3 mt-2">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="userData.password"
                />
              </div>
              <div class="mt-3">
                <button
                  type="submit"
                  class="btn btn-success w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CreateUserModel } from "@/model";
import { Prop } from "vue-property-decorator";
import axios from "axios";

@Options({
  components: {},
})
export default class UserModal extends Vue {
  @Prop() modelType: string;

  public userData: CreateUserModel = new CreateUserModel();

  isSuccessful: any = "";

  public addUser() {
    axios.post("https://reqres.in/api/users").then((res) => {
      console.log(res.status);
      this.isSuccessful = res.status;
      this.$emit("success",res.status);
    });
  }
}
</script>

<style>
</style>