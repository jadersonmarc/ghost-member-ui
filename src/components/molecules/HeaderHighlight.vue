<!-- @format -->

<template>
	<v-row class="justify-space-around flex-wrap mx-2 mb-5">
		<v-img src="images/architecture.png" max-height="180" max-width="310"
			><h5 class="pa-12 title highlight__item font-weight-black">Architecture</h5></v-img
		>
		<v-img src="images/interior.png" max-height="180" max-width="310"
			><h5 class="pa-12 title highlight__item font-weight-black">Interior</h5></v-img
		>
		<v-img src="images/food.png" max-height="180" max-width="310"
			><h5 class="pa-12 title highlight__item font-weight-black">Food</h5></v-img
		>
		<v-img src="images/travel.png" max-height="180" max-width="310"
			><h5 class="pa-12 title highlight__item font-weight-black">Travel</h5></v-img
		>
	</v-row>
</template>

<script>
	export default {
		name: 'header-highlight',
		components: {},
		data: () => ({}),
	};
</script>

<style lang="scss">
	@import '@/scss/main.scss';
</style>
