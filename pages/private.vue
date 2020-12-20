<template>
  <div class="flex flex-col min-h-screen bg-white ">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
          <div class="flex-1 flex items-stretch justify-start">
            <div class="flex-shrink-0 flex items-center">
              <logo class="block h-8 w-auto" />
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="signOut"
            >
              <span class="sr-only">Sign-out</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <auth-state title="Private" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import AuthState from "~/components/AuthState.vue";

export default {
  name: "Private",
  components: {
    Logo,
    AuthState,
  },
  methods: {
    async signOut() {
      try {
        await this.$auth.logout();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
