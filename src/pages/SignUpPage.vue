<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-dark-blue">
        <q-card class="q-pa-md shadow-2 my_card" bordered style="background-color: rgba(255, 255, 255, 0.678);">
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Criar conta</div>
            <div class="text-grey-8">
              Complete os campos abaixo para criar sua conta
            </div>

          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="email" label="Email"></q-input>
            <q-input
              dense
              outlined
              class="q-mt-md"
              v-model="password"
              type="password"
              label="Senha"
            ></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn
              style="border-radius: 8px;"
              color="dark"
              rounded
              size="md"
              label="Criar conta"
              @click="signup"
              no-caps
              class="full-width q-mb-md"
              :loading="loading"
            ></q-btn>
            <ErrorMessage
            :message="errorMessage"
            />
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              Já tem uma conta?
              <a
                href="/"
                class="text-dark text-weight-bold"
                style="text-decoration: none"
                >Entrar</a
              >
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { firebaseErrorMap } from "../helpers/firebaseErros";
import ErrorMessage from '../components/ErrorMessage.vue';

export default defineComponent({
  name: "SignUpPage",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: '',
      loading: false,
    };
  },
  methods: {
    signup(){ // Altere o nome do método para 'signup'
      this.loading = true;
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Autenticação bem-sucedida
          const user = userCredential.user;
          console.log("Usuário criado:", user);
          setTimeout(() => {
            this.$router.push('/');
            this.loading = false;
          }, 1000); // Atraso de 500 milissegundos

          // Adicione a mensagem de boas-vindas aqui
          

          // Adicione um atraso antes de redirecionar o usuário

        })
        .catch((error) => {
          const errorCode = error.code;

        });
    },
  },
});
</script>

<style scoped>
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.bg-dark-blue {
  background-color: #00306b;
}
</style>
