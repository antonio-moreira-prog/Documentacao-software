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

        <q-toolbar-title> Documentação de software </q-toolbar-title>

        <div>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Links </q-item-label>

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
    title: "Github",
    caption: "antonio.moreira.prog",
    icon: "code",
    link: "https://github.com/antonio-moreira-prog",
  },
  // restante dos links...
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
      $q.dark.set(!darkMode.value)
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
