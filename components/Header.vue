<template>
    <div class="container mx-auto">
		<header class="text-gray-600 body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<!-- Header buttons -->
                    <DropdownMenu name="About" class="px-10"></DropdownMenu>
					<DropdownMenu name="Science" class="px-10" :linkList="scienceList" />
                    <DropdownMenu name="Personal"  class="px-10" :linkList="personalList" />
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
            {dir:'/Science/blog' , name:'Blog'},
            {dir:'/Science/summary', name:'Summary'}
        ],
        personalList: [
            {dir:'/Personal/animation', name:'Animation'},
            {dir:'/Personal/highjump', name:'High jump'},
        ]
        }
    }
}
</script>