<template>
    <!-- component -->
 <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
   <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
     <h1 class="font-bold text-center text-2xl mb-5">Your Logo</h1>  
     <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">

      <RouterView />
       
      
     </div>
     <div class="py-5">
         <div class="grid grid-cols-2 gap-1">
           <div class="text-center sm:text-left whitespace-nowrap">
             <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                 </svg>
                 <span class="inline-block ml-1">Back to your-app.com</span>
             </button>
           </div>
         </div>
       </div>
   </div>
 </div>
 </template>
 
 <script setup lang="ts">
 
 </script>
 
 <style scoped>
 
 </style>