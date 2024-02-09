<template>
  <div class="q-pa-md">
    <q-editor
      toolbar-toggle-color="yellow-8"
      toolbar-bg="primary"
      style="margin-bottom: 20px"
      v-model="editorContent"
      :options="editorOptions"
      flat
      content-class="bg-blue-1"
      toolbar-text-color="black"
      :content-css="{ color: 'black' }"
      :toolbar="[
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"
    />
    <q-btn
      disable
      class="meu-botao"
      label="Enviar para Documentação"
      @click="enviarParaDocumentacao"
    ></q-btn>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      editor: ref('Customize it.'),
      editorContent: '',
      theme: 'light', // Supondo que você tenha uma variável para controlar o tema
      editorOptions: {
        // Opções do editor Quill
        // Consulte a documentação do Quill para mais opções: https://quilljs.com/docs/configuration/
      },
    };
  },
  methods: {
    ...mapMutations(["setEditorContent"]), // Mapeie as mutações necessárias
    enviarParaDocumentacao() {
      this.setEditorContent(this.editorContent); // Use a mutação corretamente
      this.$router.push({
        path: "/",
      });
    },
  },

};
</script>
<style scoped>
.meu-botao {
  margin-top: 20px;
  /* Estilos personalizados para o botão */
  background-color: rgb(20, 0, 66);
  border-color: rgb(20, 0, 66);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px 20px;
}

/* Estilos para quando o botão está pressionado */
.meu-botao:active {
  background-color: rgb(47, 0, 156);
}
</style>
