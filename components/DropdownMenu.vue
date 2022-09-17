<template>
    <div class="mr-5 hover:text-gray-900" @click="toggleDropdown" @mouseleave="setDropdownFalse">
        <h1>
            {{ name }}
        </h1>

        <!-- Dropdown menu -->
        <div v-if="isOpen"
        x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-100"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90" 
        class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
        <li v-for="link in linkList">
            <NuxtLink to={{link.dir}}>{{link.name}}</NuxtLink>
        </li>
            <!-- <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> your profile </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Your projects </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Help </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Settings </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Sign Out </a> -->
        </div>
    </div>
</template>

<script>

export default{
    props: {
        name: String,
        linkList: Array
    },
    data(){
        return{
            isOpen: false
        }
    },
    methods:{
        toggleDropdown(){
            this.isOpen = !this.isOpen
        },
        setDropdownFalse(){
            this.isOpen = false
        }
    }
}
</script>