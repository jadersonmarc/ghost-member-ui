<!-- @format -->

<template>
	<v-row class="d-flex flex-wrap justify-center  pb-6">
		<v-card height="385" width="45%" min-width="375" img="images/left-img.jpg">
			<div class="header__seemore">
				<p>Spirituality</p>
				<hr />
				<h2 class="font-weight-black">Free template designed by FreeHTML5.co</h2>
				<a href="article.html" class="btn">READ MORE</a>
			</div>
		</v-card>
		<v-card height="385" width="45%" min-width="375" img="images/right-img.jpg">
			<div class="header__seemore">
				<p>Spirituality</p>
				<hr />
				<h2 class="font-weight-black">Free template designed by FreeHTML5.co</h2>
				<a href="article.html" type="button" class="btn">READ MORE</a>
			</div>
		</v-card>
	</v-row>
</template>

<script>
	export default {
		name: 'header-img',
		components: {},
		data: () => ({}),
	};
</script>

<style lang="scss">
	@import '@/scss/main.scss';
</style>
