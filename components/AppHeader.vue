<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl">
      <div class="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
        <nav
          class="flex items-center justify-between lg:justify-start"
          aria-label="Global"
        >
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              alt="Your Company"
              class="h-12 w-auto"
              src="https://cdn4.vectorstock.com/i/1000x1000/64/23/lion-head-logo-icon-on-black-background-vector-26566423.jpg"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
          <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
            <nuxt-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="text-sm font-semibold leading-6 text-white no-underline"
              >{{ item.name }}</nuxt-link
            >
          </div>
        </nav>
      </div>
    </div>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-6 w-auto"
              src="https://cdn4.vectorstock.com/i/1000x1000/64/23/lion-head-logo-icon-on-black-background-vector-26566423.jpg"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 no-underline text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <nuxt-link
                :to="signIn"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</nuxt-link
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<script setup>
  import { Dialog, DialogPanel } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
  const navigation = [
    { name: "Product", to: "#" },
    { name: "Features", to: "#" },
    { name: "Marketplace", to: "#" },
    { name: "Company", to: "#" },
    { name: "Log in", to: "signIn" },
  ];

  const mobileMenuOpen = ref(false);
</script>