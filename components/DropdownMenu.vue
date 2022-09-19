<template>
    <div class="mx-5 hover:text-indigo-700" @click="toggleDropdown">
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
        class="absolute z-20 w-28 py-2 mt-2 bg-gray-200 rounded-md shadow-xl dark:bg-gray-800">
        <li v-for="link in linkList" class="list-none">
            <NuxtLink class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" :to=link.dir> {{ link.name }} </NuxtLink>
        </li>
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
        setDropdownFalse() {
            setTimeout(() => this.isOpen = false, 500);
        }
    }
}
</script>

