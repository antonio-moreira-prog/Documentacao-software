<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Documentação de software
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          :icon="darkMode ? 'dark_mode' : 'light_mode'"
          aria-label="Toggle Dark Mode"
          @click="toggleDarkMode"
        />

        <div>


        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navegação </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from 'quasar'

const linksList = [
  {
    title: "Início",
    caption: "Voltar para o início",
    icon: "home",
    link: "/",
    onClick: (event) => {
      event.preventDefault(); // Impede o comportamento padrão
      window.location.href = "/"; // Navegação manual
    }
  },
  {
    title: "Editor",
    caption: "Ir para o editor",
    icon: "edit",
    link: "/editor",
    disabled: true,
    // onClick: (event) => {
    //   event.preventDefault(); // Impede o comportamento padrão
    //   window.location.href = "/editor"; // Navegação manual
    // }
    onClick: (event) => {
      // event.preventDefault();
      window.location.href = "/"; // Navegação manual
    }
  },
  {
    title: "Github",
    caption: "antonio.moreira.prog",
    icon: "code",
    link: "https://github.com/antonio-moreira-prog",
    target: "_blank"
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar()
    const darkMode = ref($q.dark.isActive)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    const toggleDarkMode = () => {
    darkMode.value = !darkMode.value; // Alternar o valor de darkMode localmente
    $q.dark.set(darkMode.value); // Aplicar o novo valor do modo escuro
}

    onMounted(() => {
      $q.dark.set(darkMode.value)
    })

    return {
      darkMode,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
      toggleDarkMode,
    };
  },
});
</script>
