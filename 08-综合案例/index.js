Vue.createApp({
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.0,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.0,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.0,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.0,
          count: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      let sum = 0
      for (let item of this.books) {
        sum += item.count * item.price
      }
      return '¥' + sum
    },
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item)
        newItem.price = '¥' + item.price
        return newItem
      })
    }
  },
  methods: {
    increment(id) {
      this.books = this.books.map((item) => {
        if (item.id === id) {
          item.count += 1
        }
        return item
      })
    },
    decrement(id) {
      this.books = this.books.map((item) => {
        if (item.id === id && item.count >= 1) {
          item.count -= 1
        }
        return item
      })
    },
    remove(id) {
      this.books = this.books.filter((item) => {
        if (item.id !== id) {
          return item
        }
      })
    }
  }
}).mount('#app')
