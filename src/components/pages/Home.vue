<!-- @format -->

<template>
  <div class="home__container">
    <HeaderHome class="home__header"/>
    <div class="home__content">
      <div class="boby_header__lg ">
        <v-row class="d-flex">
          <v-col>
            <v-img height="100%" width="95%" src="images/gallery-img1.png" rounded="0"></v-img>
          </v-col>
          <v-col class="text_body__header">
            <p><small>march 27, 2020</small></p>
            <h3>Trendy Summer
              Fashion</h3>
            <p>
              To take a trivial example, which of us ever undertakes laborious physical exercise,
              except to obtain some advantage from it? But who has any right to find fault with a man
              who chooses...
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="boby_header__sm">
        <v-img height="100%" width="100%" src="images/video-cover1.jpg" class="d-flex align-center" rounded="0">
          <div class="opacity text-center d-flex flex-column justify-content-center">
            <a class="align-self-center pb-2" href="https://www.youtube.com/watch?v=vpO8sZDxOGI"><img
                src="images/play-icon.png" alt=""></a>
            <h5 class="font-weight-black title">Weekend In Boston</h5>
          </div>
        </v-img>
      </div>

      <div class="boby_content__lg">
        <div class="card">
          <img class="card-img h-100" src="images/gallery-img2.jpg" alt="">
          <div class="card-img-overlay">
            <div class="contact-box">
              <p><small>march 27, 2020</small></p>
              <h3>Trendy Summer
                Fashion</h3>
              <p>To take a trivial example, which of us ever undertakes laborious physical exercise,
                some advantage from it? fault with a man who chooses...</p>
            </div>
          </div>
        </div>
      </div>

      <div class="body_content__sm">
        <div class="card">
          <img class="card-img-top" src="images/gallery-img3.jpg" alt="">
          <div class="card-body bg-gray cus-pd2 cus-arrow-up">
            <p><small>march 27, 2020</small></p>
            <h3>Trendy Summer
              Fashion</h3>
            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, some
              advantage from it? fault with a man who chooses...</p>
          </div>
        </div>
      </div>

      <div class="boby_footer__lg">
        <v-row class="d-flex">
        <v-col>
          <v-img height="100%" width="95%" src="images/gallery-img4.jpg" rounded="0"></v-img>
        </v-col>
        <v-col class="text_body__header">
          <p><small>march 27, 2020</small></p>
          <h3>Trendy Summer
            Fashion</h3>
          <p>
            To take a trivial example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to find fault with a man
            who chooses...
          </p>
        </v-col>
        </v-row>
      </div>

      <div class="boby_footer__sm">
        <v-img height="100%" width="100%" src="images/video-cover2.jpg" class="d-flex align-center" rounded="0">
          <div class="opacity text-center d-flex flex-column justify-content-center">
            <a class="align-self-center pb-2" href="https://www.youtube.com/watch?v=vpO8sZDxOGI"><img
                src="images/play-icon.png" alt=""></a>
            <h5 class="font-weight-black title">Weekend In Boston</h5>
          </div>
        </v-img>
      </div>
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
