import { createStore } from 'vuex'

export default createStore({
  state: {
    card:[
      {id:1,name:'Product 1',dec:'Some Text',price:324},
      {id:2,name:'Product 2',dec:'Some Text',price:564},
      {id:3,name:'Product 3',dec:'Some Text',price:224},
      {id:4,name:'Product 4',dec:'Some Text',price:74},
    ]
  },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
