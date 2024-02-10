<template>
  <div class="fullscreen bg-dark-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Algo deu errado ...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="dark"
        unelevated
        to="/"
        label="Voltar para o início"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>

<style scoped>
.fullscreen {
  width: 100%;
  height: 100%;
}

.bg-dark-blue {
  background-color: #0f3057; /* ou qualquer outro código de cor azul escuro */
}
</style>
