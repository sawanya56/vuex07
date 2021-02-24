import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // counter: 0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
    select: [],
    nun: [{
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131462141_3556953314426217_3056265991146674727_o.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeGp-xA1nl5BW_mRg2Av9WxuPhB0dZNz5_Y-EHR1k3Pn9kaeDLeat_Qd8Ofc4k42YOGAdb2_bpUmV0SKyOqzrog9&_nc_ohc=qEBDy-NvGtcAX-9kvct&_nc_ht=scontent.fcnx3-1.fna&oh=3bfd218f76068b07250daf671e05c8d5&oe=6058054C",
        name: "Happyset",
        price: 699,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131726680_3556955061092709_184942747036574525_o.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeHrrW1MHBLQ_KRxkTOXahHVMH9N6UXNcuswf03pRc1y60wm3EuRNL1oKJn2VQ8xYlcMoNc0tMkMttUUcS5FpEZW&_nc_ohc=-wrSV-f7NsQAX_JgoPx&_nc_ht=scontent.fcnx3-1.fna&oh=f58c688faffda0e7901a5a7eec1e8582&oe=6054E7BB",
        name: "มาม่าทะเลรวม(ไข่สุก) ",
        price: 250,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131402616_3556953644426184_3028008606108417786_o.jpg?_nc_cat=109&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeEQWMdPHPUfRwK49996JrwWyMYuAITpiJbIxi4AhOmIlrdTdEgO3qElWEpmwKHoRBLlgAqEso2OyH8YkE1XGT3g&_nc_ohc=0IAJ05b_DekAX-ze0yZ&_nc_ht=scontent.fcnx3-1.fna&oh=9d3995debfe5cf00fb3edefb574bb4f3&oe=6056F986",
        name: "มาม่าเกาหลีเพิ่มชีส+ไข่2+หมูก้อน",
        price: 259,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131424344_3556954841092731_1246012101701437659_o.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeGpYECh1WRLxcDv5DoszeLbrfDFrauRcQ-t8MWtq5FxD5eiRjrhzCHWetKW_NAb5BxjShHzby-XUO0mpOb2P79d&_nc_ohc=q4CcL4Qj_vcAX-XYMcE&_nc_ht=scontent.fcnx3-1.fna&oh=1ac4388bee98163afac31730e6af8b73&oe=60561A70",
        name: "มาม่ารวมหมูเพิ่มเกี๊ยวปลา",
        price: 180,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131621165_3556954334426115_3891962724554152574_o.jpg?_nc_cat=106&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeGBYISiHj1F-Koc0nhH3kmx5psGg-65xVjmmwaD7rnFWHlq-NC2AFG8vHyX0Fs0tBEZax5CWK8qu4Ac1zM9sSAw&_nc_ohc=BDPeE3rw37gAX8l5Lxi&_nc_ht=scontent.fcnx3-1.fna&oh=9e206a4a3b38bd9d9dbe809d5672980f&oe=6056ABF2",
        name: "เซ็ทจุใจ",
        price: 380,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131474666_3556952887759593_839317095629163798_o.jpg?_nc_cat=106&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeG6IJHghEIDwruEOqiSWP2--rlHV20FcXz6uUdXbQVxfF5c2hjF79zg0axbWQhtDnqr2rp_4Og4pCxIcUBHzt0U&_nc_ohc=SZUaF31ctRUAX8RniUi&_nc_ht=scontent.fcnx3-1.fna&oh=a68d5b0cac3ce0cbcca5e6af17c642ea&oe=6056E06D",
        name: "มาม่ารวมหมู+กุ้งเเช่น้ำปลา",
        price: 210,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131545418_3556953097759572_2410782374920940885_o.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeGPvMxfVKDj1z51CN2qyd42wPV30IXYP2vA9XfQhdg_a8LZWboUgNYblMzm85-hEqlf0iYK-74tXZjTPIHsKBfx&_nc_ohc=vCBa55lidNUAX9zIFWC&_nc_oc=AQlCgKdzMjTLalSg6f9CPMmXSiByxzh8RyxN7c8IHEWoaxfylNlI0XJSY2i4d3Lz24g&_nc_ht=scontent.fcnx3-1.fna&oh=292c414b2edf38ca237e8ab2d65556aa&oe=6054D122",
        name: "มาม่าหมู",
        price: 60,
      },
      {
        img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/131573276_3556954627759419_239355490918865994_o.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeFpZIA1ubQkMsET2k4yCJ88mKonHtWjDkmYqice1aMOSXWXp3JR8-wOs2_MapDkU5NA8IkTdv0JHH-Ez2nqf3Jm&_nc_ohc=htDqZedsHhkAX-xCddm&_nc_ht=scontent.fcnx3-1.fna&oh=273ae16acd0d07149ffec08ee492fce5&oe=60554CAF",
        name: "มาม่าทะเลรวม",
        price: 250,
      },
    ],
    s: [],
    data: [{}],
    Total: 0,



  },
  getters: {
    T: state => {
      return state.Total;
    },
    Menu: state => {
      return state.nun;
    },
    Order: state => (value, index) => {
      return state.select.push({
        name: state.nun[index].name,
        price: state.nun[index].price,
        value: value,
        Total: value * state.nun[index].price
      })
    },
    ShowSelect: state => {
      return state.select;
    }
  },
  mutations: {
    //Clearสินค้า
    Clear: state => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    //รวมราคา
    Submit: state => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = state.Total + state.select[i].Total;
      }
    }
  },
  actions: {},
  modules: {}
})
//忍