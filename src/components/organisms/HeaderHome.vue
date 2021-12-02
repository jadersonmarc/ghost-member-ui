<!-- @format -->

<template>
	<div class="text-center ">
		<div class="bg-cover mb-3 ">
			<h1 class="text-header font-italic font-weight-medium">Ghost Member</h1>
			<social-nav />
			<header-nav />
		</div>
		<header-image />
<!--		<header-highlight />-->
	</div>
</template>

<script>
	import SocialNav from '../molecules/SocialNav';
	import HeaderNav from '../molecules/HeaderNav';
	import HeaderImage from '../molecules/HeaderImage';


	export default {
		name: 'home-header',
		components: { SocialNav, HeaderNav, HeaderImage, },
		data: () => ({}),
	};
</script>

<style lang="scss">
	@import '@/scss/main.scss';
</style>
