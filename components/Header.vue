<template>
    <div class="container mx-auto min-w-full bg-transparent">
		<header class="text-white body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-row items-center">
                <div class="flex mr-auto">
                        Kaze Wong
                </div>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

					<!-- Header buttons -->
					<NuxtLink to="/" class="mx-5"> About </NuxtLink>
					<DropdownMenu name="Science" class="" :linkList="scienceList" />
                    <DropdownMenu name="Personal"  class="" :linkList="personalList" />
				</nav>
			</div>
		</header>
    </div>
</template>

<script>
export default{
    data(){
        return {
            scienceList: [
            {dir:'/Science/summary', name:'Summary'},
            {dir:'/Science/blog' , name:'Blog'},
            {dir:'/Science/tutorials', name:'Tutorials'},
        ],
        personalList: [
            {dir:'/Personal/animation', name:'Animation'},
            {dir:'/Personal/highjump', name:'High jump'},
        ]
        }
    }
}
</script>