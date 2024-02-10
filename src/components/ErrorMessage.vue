<template>
  <div v-if="isVisible" class="q-banner" :class="[typeClass]">
    <span class="q-banner-text">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'error',
      validator: value => ['info', 'success', 'warning', 'error'].includes(value)
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    typeClass() {
      return 'q-banner-' + this.type;
    }
  },
  watch: {
    message(newValue) {
      if (newValue) {
        this.isVisible = true;
      }
    }
  },
  methods: {
    dismiss() {
      this.isVisible = false;
    }
  }
}
</script>

<style scoped>
.q-banner {
  padding: 10px;
  display: flex;
  align-items: center;
}

.q-banner-text {
  margin-right: 10px;
}

.q-banner-close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  font-weight: bold;
}
.q-banner-info {
  background-color: #e2f1ff;
  color: #1e88e5;
}

.q-banner-success {
  background-color: #d7f0d6;
  color: #2e7d32;
}

.q-banner-warning {
  background-color: #fff8e1;
  color: #f57c00;
}

.q-banner-error {
  background-color: #fde7e9;
  color: #c62828;
}
</style>
