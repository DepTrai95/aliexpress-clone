<template>
   <MainLayout>
      <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
         <div class="md:flex gap-4 justify-between mx-auto w-full">
            <div class="md:w-[40%]">
               <img class="rounded-lg object-fit" src="https://picsum.photos/id/212/800/800" alt="">
               
               <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                  <div v-for="image in images">
                     <img 
                        @mouseover="currentImage = image"
                        @click="currentImage = image"
                        width="70"
                        class="rounded-md object-fit border-[3px] cursor-pointer"
                        :class="currentImage === image ? 'border-[#ff5353]' : ''"
                        src="" 
                        alt=""
                     >
                  </div>
               </div>
            </div>
         </div>
      </div>
   </MainLayout>
</template>

<script setup>
   import { watchEffect } from 'vue';
import MainLayout from '../../layouts/MainLayout.vue';

   watchEffect(() => {
      
   })

   const images = ref([
      '',
      'https://picsum.photos/id/212/800/800',
      'https://picsum.photos/id/233/800/800',
      'https://picsum.photos/id/165/800/800',
      'https://picsum.photos/id/99/800/800',
      'https://picsum.photos/id/144/800/800',
   ])
</script>

<style lang="scss" scoped>

</style>