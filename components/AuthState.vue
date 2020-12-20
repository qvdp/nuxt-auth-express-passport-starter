<template>
  <div class="max-w-md w-full space-y-8 mx-auto my-auto">
    <div class="flex flex-col text-center justify-center items-center">
      <logo />
      <h1 class="text-3xl font-bold leading-tight text-gray-900 py-6">
        {{ title }}
      </h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Auth details
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              These details are stored in $auth state.
            </p>
          </div>
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Loggedin
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $auth.loggedIn }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                User
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $auth.user }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Strategy
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $auth.$state.strategy }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  name: "AuthState",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    Logo,
  },
}
</script>
