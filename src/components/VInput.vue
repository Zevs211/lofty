<template>
  <div class="v-input">
    <input type="text" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    label: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
      console.log(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  height: 30px;
  margin-top: 20px;
  color: #fff;
  background-color: #51596b;
}
</style>
