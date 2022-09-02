import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        cart: [],
        blurActive: false,
    }),
    getters: {
        doubleCount: (state) => state.cart * 2,
    },
    actions: {
        increment() {},
    },
});
