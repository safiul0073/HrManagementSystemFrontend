<template>
  <div class="w-full md:w-1/2 xl:w-1/4 p-3 ">
                    
        <div class="bg-gray-500 border border-gray-800 rounded shadow p-2 h-32">
            <div class="flex flex-row items-center justify-center h-full">
                <div class="flex flex-col text-white text-5xl font-black">
                    {{gridData}}
                    <h1 class="text-base font-medium">{{name}}</h1>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["gridData", "name"]
}
</script>

<style>

</style>