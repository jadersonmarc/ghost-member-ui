<!-- @format -->

<template>
	<div class="text-center ">
		<div class="bg-cover">
			<h1 class="text-header font-italic font-weight-medium">Ghost Member</h1>
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
			<div class="ml-0 mr-0 pb-1 nav-news">
				<nav class="navbar navbar-expand-md">
					<div id="my-nav" class="">
						<ul class="navbar-nav mx-auto">
							<li class="nav-item">
								<a class="nav-link" href="article.html">NEWS</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="article.html">HISTORY</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">CULTURE</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">TECH</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">LIFE</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">OPINION</a>
							</li>
							<li class="nav-item">
								<form action="" method="POST">
									<div class="input-group mt-0 mx-auto" style="width:16px;">
										<div class=""></div>
									</div>
								</form>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
		<div class="container__img_header">
			<v-card class="my-card">
				<img src="images/left-img.jpg" />
				<div class="header__seemore">
					<p>Spirituality</p>
					<hr />
					<h2 class="font-weight-black">Free template designed by FreeHTML5.co</h2>
					<a href="article.html" class="btn">READ MORE</a>
				</div>
			</v-card>
			<v-card class="my-card">
				<img src="images/right-img.jpg" />
				<div class="header__seemore">
					<p>Spirituality</p>
					<hr />
					<h2 class="">Free template designed by FreeHTML5.co</h2>
					<a href="article.html" type="button" class="btn">READ MORE</a>
				</div>
			</v-card>
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
