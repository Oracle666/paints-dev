<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import UiModal from "../components/Ui/Modal.vue";
const store = useCounterStore();
const sumCount = function () {
    let sum = 0;
    store.cart.forEach((el) => (sum += el.count));
    return sum;
};
const openModalCart = function () {
    openModal.value = true;
    document.querySelector("body").style.overflow = "hidden";
    store.blurActive = true;
};
const openModal = ref(false);
</script>
<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header__left">
                    <RouterLink to="#" class="logo">
                        <svg
                            width="131"
                            height="26"
                            viewBox="0 0 131 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.55 16.8C16.83 19.05 14.85 21.3 11.4 21.3C7.47 21.3 4.5 18.3 4.5 13.5C4.5 8.7 7.47 5.7 11.4 5.7C14.07 5.7 16.5 7.2 17.55 10.05H20.85C19.98 6.3 16.65 2.7 11.4 2.7C5.88 2.7 1.35 7.05 1.35 13.5C1.35 19.95 5.88 24.3 11.4 24.3C17.07 24.3 20.13 20.1 20.85 16.8H17.55ZM33.3141 24.3C38.8341 24.3 43.3641 19.95 43.3641 13.5C43.3641 7.05 38.8341 2.7 33.3141 2.7C27.7941 2.7 23.2641 7.05 23.2641 13.5C23.2641 19.95 27.7941 24.3 33.3141 24.3ZM33.3141 5.7C37.2441 5.7 40.2141 8.7 40.2141 13.5C40.2141 18.3 37.2441 21.3 33.3141 21.3C29.3841 21.3 26.4141 18.3 26.4141 13.5C26.4141 8.7 29.3841 5.7 33.3141 5.7ZM46.957 24L60.307 24L60.307 21L50.107 21V3L46.957 3L46.957 24ZM71.107 24.3C76.627 24.3 81.157 19.95 81.157 13.5C81.157 7.05 76.627 2.7 71.107 2.7C65.587 2.7 61.057 7.05 61.057 13.5C61.057 19.95 65.587 24.3 71.107 24.3ZM71.107 5.7C75.037 5.7 78.007 8.7 78.007 13.5C78.007 18.3 75.037 21.3 71.107 21.3C67.177 21.3 64.207 18.3 64.207 13.5C64.207 8.7 67.177 5.7 71.107 5.7ZM84.75 24H87.9V16.5H89.4L96.9 24L100.95 24L93.45 16.5H94.2C97.65 16.5 100.35 13.83 100.35 9.75C100.35 5.67 97.65 3 94.2 3L84.75 3V24ZM87.9 13.5V6L94.05 6C95.73 6 97.2 7.5 97.2 9.75C97.2 12 95.73 13.5 94.05 13.5L87.9 13.5ZM103.212 17.55C103.212 21.3 106.212 24.3 111.462 24.3C116.712 24.3 119.412 21.6 119.412 18.15C119.412 14.82 117.492 13.05 113.262 12.3L109.962 11.7C107.682 11.25 106.812 10.2 106.812 8.85C106.812 7.17 108.312 5.7 111.162 5.7C114.162 5.7 115.962 7.5 115.962 9.45L119.112 9.45C119.112 5.7 116.412 2.7 111.162 2.7C106.512 2.7 103.662 5.4 103.662 8.85C103.662 11.73 105.282 13.8 108.612 14.4L112.662 15.15C115.062 15.6 116.262 16.62 116.262 18.15C116.262 19.95 114.912 21.3 111.462 21.3C108.342 21.3 106.362 19.5 106.362 17.55H103.212Z"
                                fill="#1F2020"
                            />
                            <circle cx="127" cy="6" r="4" fill="#1F2020" />
                        </svg>
                    </RouterLink>
                    <nav class="nav text_14">
                        <RouterLink class="nav__link" to=""
                            >Продукты</RouterLink
                        >
                        <RouterLink class="nav__link" to="">Цвета</RouterLink>
                        <RouterLink class="nav__link" to=""
                            >Вдохновения</RouterLink
                        >
                        <RouterLink class="nav__link" to="">Советы</RouterLink>
                        <RouterLink class="nav__link" to=""
                            >Найти Магазин</RouterLink
                        >
                    </nav>
                </div>
                <div class="header__right">
                    <div class="header__contacts">
                        <a href="tel: +74952217769" class="header__phone">
                            <div class="header__phone-number text_16_m">
                                +7 (495) 221-77-69
                            </div>
                            <div class="header__phone-text text_14">
                                Заказать звонок
                            </div>
                        </a>
                    </div>
                    <div class="header__icons">
                        <div class="header__search">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                                    stroke="#1F2020"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17.5 17.5L13.875 13.875"
                                    stroke="#1F2020"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="header__user">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_8_30)">
                                    <circle
                                        cx="11"
                                        cy="23"
                                        r="8.4"
                                        stroke="black"
                                        stroke-width="1.2"
                                    />
                                    <circle
                                        cx="11"
                                        cy="7"
                                        r="3.4"
                                        stroke="black"
                                        stroke-width="1.2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8_30">
                                        <rect
                                            width="22"
                                            height="22"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="header__favorite">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0009 19C10.745 19.0001 10.4978 18.9074 10.3052 18.739C9.57966 18.1047 8.87674 17.5067 8.25817 16.9802C6.65691 15.7048 5.16127 14.3023 3.78581 12.7865C2.67695 11.5918 2.0423 10.0341 2.00085 8.4053C1.97621 6.99164 2.48598 5.62067 3.42845 4.56595C3.88583 4.0681 4.44256 3.67154 5.06275 3.40184C5.68294 3.13214 6.35283 2.9953 7.0292 3.00012C8.05552 2.99541 9.053 3.3392 9.8581 3.97514C10.2942 4.31625 10.6791 4.71815 11.0009 5.16854C11.3231 4.71841 11.7082 4.31682 12.1446 3.97605C12.9489 3.34036 13.9453 2.99628 14.9708 3.00012C15.6472 2.9953 16.3171 3.13214 16.9372 3.40184C17.5574 3.67154 18.1142 4.0681 18.5715 4.56595C19.514 5.62067 20.0238 6.99164 19.9991 8.4053C19.9585 10.0337 19.3249 11.5915 18.2169 12.7865C16.8425 14.3013 15.3481 15.7028 13.7482 16.9775C13.1287 17.5049 12.4267 18.1029 11.6975 18.7399C11.5045 18.9081 11.257 19.0005 11.0009 19V19Z"
                                    stroke="black"
                                    stroke-width="1.2"
                                />
                            </svg>
                        </div>
                        <div
                            @click="openModalCart()"
                            class="header__cart text_12_m"
                        >
                            {{ store.cart.length ? sumCount() : 0 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition>
            <UiModal :open="openModal" @open="openModal = false" />
        </transition>
    </div>
</template>
<style lang="less">
.header {
    .nav {
        display: flex;
        gap: 24px;
        text-transform: uppercase;
        &__link {
            transition: 0.3s;
            &:hover {
                opacity: 0.6;
            }
        }
        @media screen and(max-width: 1120px) {
            display: none;
        }
    }
    &__content {
        display: flex;
        align-items: center;
        padding: 37px 0;
        gap: 20px;
        justify-content: space-between;
        @media screen and(max-width: 1120px) {
            padding: 20px 0;
            border-bottom: 1px solid @gray008;
        }
    }
    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    &__phone {
        &-text {
            opacity: 0.3;
        }
    }
    &__left {
        display: flex;
        align-items: center;
        max-width: 812px;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        svg {
            @media screen and(max-width: 1120px) {
                width: 99px;
                height: 21px;
            }
        }
        @media screen and(max-width: 1120px) {
            max-width: max-content;
        }
    }
    &__right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        max-width: 427px;
        width: 100%;
        flex-shrink: 2;
        @media screen and(max-width: 1120px) {
            max-width: max-content;
        }
    }
    &__icons {
        display: flex;
        align-items: center;
        gap: 24px;
    }
    &__search,
    &__user,
    &__favorite,
    &__cart {
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            opacity: 0.6;
        }
    }
    &__search,
    &__user,
    &__favorite,
    &__contacts {
        @media screen and(max-width: 1120px) {
            display: none;
        }
    }
    &__cart {
        background: @green;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .burger {
        display: none;
        span {
            width: 24px;
            height: 2px;
            background: @gray001;
        }
        @media screen and (max-width: 1120px) {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
}
</style>
