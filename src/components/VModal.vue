<template>
  <div class="modal" @click.self="closeModal">
    <form class="modal-form">
      <input placeholder="USERNAME" v-model="postBody.username" />
      <input placeholder="PASSWORD" v-model="postBody.password" />
      <button @click="login">SEND</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "VModal",
  data() {
    return {
      requestURL: "https://reqres.in/api/articles",
      postBody: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("on-modal-close");
    },
    login() {
      function sendRequest(method, url, body = null) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();

          xhr.open(method, url);

          xhr.responseType = "json";
          xhr.setRequestHeader("Content-Type", "application/json");

          xhr.onload = () => {
            if (xhr.status >= 400) {
              reject(xhr.response);
            } else {
              resolve(xhr.response);
            }
          };

          xhr.onerror = () => {
            reject(xhr.response);
          };

          xhr.send(JSON.stringify(body));
        });
      }

      sendRequest("POST", this.requestURL, this.postBody)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
    // async login() {
    //   const response = await axios.post(
    //     "https://reqres.in/api/articles",
    //     this.postBody
    //   );
    //   console.log(response);
    // },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 240px;
  height: 208px;
  padding: 15px;
  background-color: #222831;
  & > input {
    outline: none;
    height: 30px;
    margin-top: 20px;
    color: #fff;
    background-color: #51596b;
  }
  button {
    width: 100px;
    height: 60px;
    margin-top: 20px;
    background-color: #dfa612;
    &:hover {
      user-select: none;
      cursor: pointer;
      background-color: #ecc86d;
    }
  }
}
</style>
