<template>
  <div>
    <div class="row mt-4">
      <div class="col">
        <div class="d-flex justify-content-between mb-3">
          <div class="col-4">
            <label for="searchInput" class="form-label">Search</label>
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              @keyup="getSearchItem($event)"
            />
          </div>
          <div class="mt-4 pt-2">
            <AddUser />
          </div>
        </div>

        <!-- <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <h5>User Add Successfully</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div> -->

        <table class="table border">
          <thead class="bg-dark text-white">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.id">
              <td>
                <img
                  :src="item.avatar"
                  :alt="item.first_name"
                  width="50"
                  height="50"
                />
                {{ item.first_name }}
              </td>
              <td>{{ item.last_name }}</td>
              <td>{{ item.email }}</td>
              <td>
                <div class="d-flex justify-content-around">
                  <button
                    type="button"
                    class="btn btn-info"
                    @click="editUser(item.id)"
                  >
                    Edit
                  </button>
                  <!-- <EditUser /> -->
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteUser(item.id)"
                  >
                    Delete
                  </button>
                  <!-- <DeleteUser @click="deleteUser"/> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { UserModel } from "@/model";
import EditUser from "./EditUser.vue";
import DeleteUser from "./DeleteUser.vue";
import AddUser from "../components/AddUser.vue";

@Options({
  components: {
    EditUser,
    DeleteUser,
    AddUser,
  },
})
export default class TableComp extends Vue {
  users: Array<UserModel> = [];
  dataSource: Array<UserModel> = [];

  mounted() {
    this.getUsers();
  }

  private getUsers() {
    this.users = [];
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        this.users = res.data.data;
        this.dataSource = res.data.data;
        console.log(this.users);
      })
      .then((err) => {
        console.log(err);
      });
  }

  public deleteUser(id: number) {
    axios.delete(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res);
      this.getUsers();
    });
  }
  public editUser(id: number) {
    axios.put(`https://reqres.in/api/users/${id}`).then((res) => {
      console.log(res);
      this.getUsers();
    });
  }

  getSearchItem(searchValue: Event) {
    let data:any = searchValue.target;
    let value:any  =data.value;
    return (this.users = this.dataSource.filter(
      (item) =>
        item.email.toLowerCase().toUpperCase().includes(value.toLowerCase().toUpperCase()) ||
        item.first_name.toLowerCase().toUpperCase().includes(value.toLowerCase().toUpperCase()) ||
        item.last_name.toLowerCase().includes(value.toLowerCase())
    ));
  }
  created() {
    this.getUsers();
  }
}
</script>