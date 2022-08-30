const moduleA = {
  state: { 
    data: {
        name: "thinh",
        age: 18
    }
  },
  mutations: {
    updateInfor(payload) {
        state.data: {
            ...state.data,
            ...payload
        }
    }
   },
  actions: { ... },
  getters: { ... }
}