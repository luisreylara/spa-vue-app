<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="flex flex-col ml-auto space-x-4 items-end h-10 sm:space-x-6">
        <div>
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
          <RouterLink :to="{ name: 'features' }"> Features </RouterLink>
          <RouterLink :to="{ name: 'pricing' }"> Pricing </RouterLink>
          <RouterLink :to="{ name: 'contact' }"> Contact </RouterLink>
        </div>
        <div class="space-x-4"  >
          <RouterLink to="/pokemon/1"> Pokémon </RouterLink>
          <RouterLink :to="{ name: 'auth' }"> Login </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">

        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          <RouterView />
        </p>
      </div>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} UPJR Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>