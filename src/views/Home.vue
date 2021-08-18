<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__content">
        <button class="btn" @click="openModal">Sign up</button>
      </div>
    </div>
    <div class="container">
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
      <div class="container__item"></div>
    </div>
    <transition name="fade">
      <v-modal v-if="isModalVisible" @on-modal-close="closeModal" />
    </transition>
  </div>
</template>

<script>
import VModal from "@/components/VModal.vue";

export default {
  name: "Home",
  components: { VModal },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
