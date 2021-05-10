<!-- @format -->

<template>
	<div class="home__container">
		<HeaderHome class="home__header" />
		<div class="home__content">
			<h4>Lorem ipsum dolor sit.</h4>
		</div>
		<div class="home__footer">
			<h4>Lorem ipsum dolor sit.</h4>
		</div>
	</div>
</template>

<script>
	import HeaderHome from '../organisms/HeaderHome';
	export default {
		name: 'Home',

		components: {
			HeaderHome,
		},
		data: () => ({}),
	};
</script>
<style lang="scss">
	@import '@/scss/main.scss';
</style>
