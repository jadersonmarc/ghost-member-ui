<!-- @format -->

<template>
	<div class="text-center ">
		<div class="bg-cover">
			<h1 class="text-header font-italic font-weight-medium">ghost member</h1>
			<nav class="nav-fill">
				<ul class="nav-list">
					<li class="nav-item">
						<a class="nav-link" href="#"><v-icon dark class="mr-2">mdi mdi-facebook</v-icon></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" target="_blank"
							><v-icon dark class="mr-2">mdi mdi-twitter</v-icon></a
						>
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
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home-header',
		components: {},
		data: () => ({}),
	};
</script>
<style lang="scss">
	@import '@/scss/main.scss';
</style>
