<template>
    <!-- Hero section -->
    <section>
        <div class="relative w-auto min-w-full h-auto">
        <video
            autoplay
            loop
            muted
            class="w-auto min-w-full brightness-50"
        >
        <source
        src="/FlyThrough.mp4"
        type="video/mp4"
        />
        Your browser does not support the video tag.
         </video>
        <h1 class="absolute text-white top-1/2 left-1/2 text-center"> Kaze Wong</h1>
        </div>
    </section>
    <!-- Interest (Science/Animation/Jumping) --> 
    <section>
        <div>
            <h1>Scientist</h1>
            <h1>Animator</h1>
            <h1>High jumper</h1>
        </div>
    </section>

    <!-- Contact/CV -->
    <!-- Update from all blogs -->
</template>

<script>
export default{
    data(){
        return{
            isOpen: false
        }
    }
}
  
</script>