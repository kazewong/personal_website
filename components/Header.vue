<template>
    <div class="container mx-auto">
		<header class="text-gray-600 body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<!-- Header buttons -->
					<DropdownMenu name="About" linkList=[{message:'Foo'}]/>
					<DropdownMenu name="Science"/>
					<!-- <NuxtLink class="mr-5 hover:text-gray-900" to="/">About</NuxtLink>
					<NuxtLink class="mr-5 hover:text-gray-900" to="/science">Science</NuxtLink>
					<NuxtLink class="mr-5 hover:text-gray-900" to="/personal">Personal</NuxtLink>
					<NuxtLink class="mr-5 hover:text-gray-900" to="/blog">Blog</NuxtLink>					 -->
				</nav>
			</div>
		</header>
    </div>
</template>

