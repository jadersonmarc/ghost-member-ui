<!-- @format -->

<template>
	<v-row class="d-flex flex-wrap justify-center pl-6 pr-6 pb-1">
		<v-card height="415" width="50%" min-width="375" img="images/left-img.jpg" rounded="0">
			<div class="header__seemore pa-12">
				<p>Spirituality</p>
				<hr />
				<h2 class="font-weight-black">Free template designed by FreeHTML5.co</h2>
				<a href="article.html" class="btn">READ MORE</a>
			</div>
		</v-card>
		<v-card height="415" width="50%" min-width="375" img="images/right-img.jpg" rounded="0">
			<div class="header__seemore pa-12">
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
