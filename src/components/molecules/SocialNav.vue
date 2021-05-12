<!-- @format -->

<template>
	<nav class="nav-fill">
		<ul class="nav-list">
			<li class="nav-item">
				<a class="nav-link" href="#"><v-icon dark class="mr-2">mdi mdi-facebook</v-icon></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#" target="_blank"><v-icon dark class="mr-2">mdi mdi-twitter</v-icon></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><v-icon dark class="mr-2">mdi mdi-instagram</v-icon></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><v-icon dark class="mr-2">mdi mdi-google-plus</v-icon></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><v-icon dark class="mr-2">mdi mdi-rss</v-icon></a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'social-nav',
		components: {},
		data: () => ({}),
	};
</script>

<style lang="scss">
	@import '@/scss/main.scss';
</style>
