<script setup>
import { useCounterStore } from "@/stores/counter";
const emit = defineEmits(["open"]);
const props = defineProps({
    open: Boolean,
    card: Object,
    amount: String,
});
const store = useCounterStore();
const totalPrice = function () {
    let total = 0;
    store.cart.forEach((el) => (total += el.price * el.count));
    return total;
};
const deleteCard = function (item) {
    store.cart = store.cart.filter((el) => el.name !== item.name);
};
const clearCart = function () {
    store.cart = [];
};
const closeModalCart = function () {
    document.querySelector("body").style.overflow = "auto";
    emit("open");
    store.blurActive = false;
};
</script>
<template>
    <div v-if="open" class="modal">
        <div class="modal__top">
            <div class="modal__title text_30_m">Корзина</div>
            <div @click="closeModalCart()" class="modal__close">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="#1F2020"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
                        stroke="#1F2020"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
        <div class="modal__middle">
            <div class="modal__middle-content">
                <div class="modal__middle-top">
                    <div class="modal__middle-amount text_14">
                        {{ store.cart.length }} товаров
                    </div>
                    <button @click="clearCart()" class="modal__middle-clear">
                        Очистить список
                    </button>
                </div>
                <div class="modal__middle-products">
                    <div class="modal__middle-wrapper">
                        <div
                            v-for="(item, index) in store.cart"
                            :key="index"
                            class="product"
                        >
                            <img
                                :src="item.imgFront"
                                alt=""
                                class="product__img"
                            />
                            <div class="product__info">
                                <div class="product__name text_16_l">
                                    {{ item.name }}
                                </div>
                                <div class="product__price text_16_sb">
                                    {{ item.price }} ₽
                                </div>
                            </div>
                            <div class="product__amount">
                                <div
                                    class="product__amount-minus"
                                    @click="item.count > 1 ? item.count-- : 0"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.3335 8H12.6668"
                                            stroke="black"
                                            stroke-width="1.4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="number"
                                    class="product__amount-input"
                                    v-model="item.count"
                                />
                                <div
                                    class="product__amount-plus"
                                    @click="item.count++"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 3.33325V12.6666"
                                            stroke="black"
                                            stroke-width="1.4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M3.3335 8H12.6668"
                                            stroke="black"
                                            stroke-width="1.4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div
                                @click="deleteCard(item)"
                                class="product__delete"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.2">
                                        <path
                                            d="M18 6L6 18"
                                            stroke="#1F2020"
                                            stroke-width="1.4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6 6L18 18"
                                            stroke="#1F2020"
                                            stroke-width="1.4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div class="product__update"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal__bottom">
            <div class="modal__bottom-left">
                <div class="modal__bottom-total">Итого</div>
                <div class="modal__bottom-sum text_30_m">
                    {{ totalPrice() }} ₽
                </div>
            </div>
            <button class="modal__buy text_12_m">Оформить заказ</button>
        </div>
    </div>
</template>
<style lang="less">
.modal {
    padding: 32px 40px 40px 40px;
    position: fixed;
    z-index: 4;
    top: 0;
    right: 0;
    height: 100vh;
    width: 600px;
    background: #fff;
    display: flex;
    flex-direction: column;

    &__top {
        margin-bottom: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__middle {
        overflow-y: scroll;
        &-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        &-clear {
            border: none;
            background: transparent;
            color: @gray007;
            text-transform: uppercase;
        }
    }
    &__bottom {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-left {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        @media @sm {
            flex-direction: column;
            gap: 20px;
        }
    }
    &__close {
        border: 1px solid @gray006;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__buy {
        padding: 20px 57px;
        border: none;
        background: @green;
        text-transform: uppercase;
        border-radius: 4px;
    }
    .product {
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-top: 1px solid @gray006;
        &__info {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        &__img {
            width: 96px;
            aspect-ratio: 1 /1;
        }
        &__amount {
            display: flex;
            align-items: center;
            gap: 15px;
            &-minus,
            &-plus {
                width: 40px;
                height: 24px;
                background: @gray002;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
            }
            &-input {
                width: 14px;
                border: none;
                text-align: center;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }
        }
        &__delete {
            margin-left: 37px;
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
    }
}
</style>
