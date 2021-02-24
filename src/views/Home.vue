<template>
 <div class="home">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000 "
        fade
        indicators
        img-width="1024"
        img-height="250"
      >
        <b-carousel-slide
        style="height:30rem"
          caption="First slide"
          img-src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/143946663_3668399586614922_4667594776300357034_o.jpg?_nc_cat=106&ccb=3&_nc_sid=730e14&_nc_eui2=AeEnlAOVv1wnefae4xcK-bgIybNVgI1-ajjJs1WAjX5qODwBiHBpjvbJOcmOFRauwmoSV6xbKri_4-AhU5MoqTyO&_nc_ohc=Ko3FXHUDSz0AX_5rZ6A&_nc_ht=scontent.fcnx3-1.fna&oh=d2929c8aee8a2db4e1c869736af6b627&oe=60598ED2"
        ></b-carousel-slide>
        <b-carousel-slide
        style="height:30rem"
          caption="Second Slide"
          img-src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/144543677_3668399543281593_8115677965231902458_o.jpg?_nc_cat=100&ccb=3&_nc_sid=730e14&_nc_eui2=AeEel_OXLoL2MynEdIiUHGb6Ikm6jzvBHuoiSbqPO8Ee6iq5HIUqwwb9VcIQ0nKHXTyVHS3uf5E7wD2XwjxAZR5X&_nc_ohc=XjyBXEVAZvsAX-r6wvF&_nc_ht=scontent.fcnx3-1.fna&oh=e3fb23b5950399139620b140d6edad78&oe=6059A280"
        ></b-carousel-slide>
        <b-carousel-slide
        style="height:30rem"
          caption="Third Slide"
          img-src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/144117103_3668392373282310_8753279705055960946_o.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_eui2=AeHWlXMnZECvu6qrqM-oMiTiORoiTU5-X5Q5GiJNTn5flNGCVgdCD7ILwlHx0rs6HTCeQhgWHA3pfH5ERpw7pb5H&_nc_ohc=bwd5MwAzM3YAX8Ks0k-&_nc_oc=AQknCdtjl0uHYYryIUbjEZddtUrhhqib0TbzJHZuvlI1q9K9Ueyshd-yHr0Yj9QiSO0&_nc_ht=scontent.fcnx3-1.fna&oh=413b45a255e395bc26bdeef70e2556d0&oe=6058DFB9"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- {{ShowSelect}} -->
    <div class="row">
      <HelloWorld
        class="col-3"
        v-for="(item, index) in Menu"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :index="index"
        @Order="menuorder"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
},
computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapGetters(["Menu","ShowSelect"]),
  },
}



</script>
