<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import Card from "../components/Card.vue";
import UiCheckbox from "../components/Ui/Checkbox.vue";
import UiSelect from "../components/Ui/Select.vue";
const checkbox = ref([
    {
        checked: false,
        name: "НОВИНКИ",
    },
    {
        checked: false,
        name: "Есть в наличии",
    },
    {
        checked: false,
        name: "Контрактные",
    },
    {
        checked: false,
        name: "Эксклюзивные",
    },
    {
        checked: false,
        name: "Распродажа",
    },
]);
const cards = ref([
    {
        name: "Краска Wallquest, Brownsone MS90100",
        price: "6000",
        imgFront: "./img/front1.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90101",
        price: "4800",
        imgFront: "./img/front1.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90103",
        price: "5290",
        imgFront: "./img/front2.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90104",
        price: "2800",
        imgFront: "./img/front3.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90105",
        price: "3400",
        imgFront: "./img/front4.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90106",
        price: "6000",
        imgFront: "./img/front5.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: true,
        sale: false,
    },
    {
        name: "Краска Wallquest, Brownsone MS90107",
        price: "6330",
        imgFront: "./img/front6.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: false,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90108",
        price: "2200",
        imgFront: "./img/front7.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: false,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90109",
        price: "2311",
        imgFront: "./img/front8.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: false,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90110",
        price: "4324",
        imgFront: "./img/front1.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: false,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90111",
        price: "7909",
        imgFront: "./img/front2.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: true,
        exlusive: false,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90112",
        price: "7779",
        imgFront: "./img/front3.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: false,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90113",
        price: "7902",
        imgFront: "./img/front4.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: false,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90114",
        price: "7909",
        imgFront: "./img/front5.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: false,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90115",
        price: "8909",
        imgFront: "./img/front6.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: false,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90116",
        price: "7909",
        imgFront: "./img/front7.png",
        imgBack: "./img/back.png",
        new: true,
        stock: true,
        contract: false,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90117",
        price: "7909",
        imgFront: "./img/front8.png",
        imgBack: "./img/back.png",
        new: true,
        stock: false,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90118",
        price: "5465",
        imgFront: "./img/front1.png",
        imgBack: "./img/back.png",
        new: true,
        stock: false,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90119",
        price: "4422",
        imgFront: "./img/front2.png",
        imgBack: "./img/back.png",
        new: true,
        stock: false,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90120",
        price: "6654",
        imgFront: "./img/front3.png",
        imgBack: "./img/back.png",
        new: true,
        stock: false,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90121",
        price: "6444",
        imgFront: "./img/front4.png",
        imgBack: "./img/back.png",
        new: true,
        stock: false,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90122",
        price: "9789",
        imgFront: "./img/front5.png",
        imgBack: "./img/back.png",
        new: false,
        stock: true,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90123",
        price: "6444",
        imgFront: "./img/front6.png",
        imgBack: "./img/back.png",
        new: false,
        stock: true,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90124",
        price: "6244",
        imgFront: "./img/front7.png",
        imgBack: "./img/back.png",
        new: false,
        stock: true,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90125",
        price: "7542",
        imgFront: "./img/front8.png",
        imgBack: "./img/back.png",
        new: false,
        stock: true,
        contract: true,
        exlusive: true,
        sale: true,
    },
    {
        name: "Краска Wallquest, Brownsone MS90126",
        price: "2342",
        imgFront: "./img/front1.png",
        imgBack: "./img/back.png",
        new: false,
        stock: true,
        contract: true,
        exlusive: true,
        sale: true,
    },
]);
const filterCards = ref(cards.value);
const activeCheckboxMob = function () {
    blurActive.value = true;
    checkboxMobile.value = true;
};
const closeCheckBoxMob = function () {
    blurActive.value = false;
    checkboxMobile.value = false;
};
const filterSelect = function (e) {
    if (e === "Сначала дорогие") {
        filterCards.value = filterCards.value.sort((a, b) =>
            a.price < b.price ? 1 : -1
        );
    }
    if (e === "Сначала недорогие") {
        filterCards.value = filterCards.value.sort((a, b) =>
            a.price > b.price ? 1 : -1
        );
    }
    if (e === "Сначала новые") {
        filterCards.value = filterCards.value.sort((a, b) =>
            a.new < b.new ? 1 : -1
        );
    }
};
const currentFilterCheckBox = ref([]);
const filterCheckBox = function (e, item) {
    if (e) {
        currentFilterCheckBox.value.push(item.name);
        item.checked = true;
    } else {
        item.checked = false;
        currentFilterCheckBox.value = currentFilterCheckBox.value.filter(
            (a) => {
                return a !== item.name;
            }
        );
    }

    filterCards.value = cards.value;

    currentFilterCheckBox.value.forEach((x) => {
        if (x === "НОВИНКИ") {
            filterCards.value = filterCards.value.filter((e) => {
                return e.new == true;
            });
        }
        if (x === "Есть в наличии") {
            filterCards.value = filterCards.value.filter((e) => {
                return e.stock === true;
            });
        }
        if (x === "Контрактные") {
            filterCards.value = filterCards.value.filter((e) => {
                return e.contract === true;
            });
        }
        if (x === "Эксклюзивные") {
            filterCards.value = filterCards.value.filter((e) => {
                return e.exlusive === true;
            });
        }
        if (x === "Распродажа") {
            filterCards.value = filterCards.value.filter((e) => {
                return e.sale === true;
            });
        }
    });
};
const store = useCounterStore();

const addCard = function (e) {
    let b = false;
    if (store.cart.length) {
        for (let i = 0; i < store.cart.length; i++) {
            if (store.cart[i].name == e.name) {
                store.cart[i].count++;
                b = true;
            }
        }
        if (b === false) {
            const currentCard = Object.assign({}, e);
            currentCard.count = 1;
            store.cart.push(currentCard);
        }
    } else {
        const currentCard = Object.assign({}, e);
        currentCard.count = 1;
        store.cart.push(currentCard);
    }
};
const blurActive = ref(false);
const checkboxMobile = ref(false);
</script>

<template>
    <div class="home">
        <div class="home__content">
            <div class="breadcrumbs">
                <div class="container">
                    <div class="breadcrumbs__content">
                        <RouterLink class="breadcrumbs__link text_10" to="#"
                            >Главная</RouterLink
                        >
                        <span></span>
                        <RouterLink class="breadcrumbs__link text_10" to="#"
                            >Продукты</RouterLink
                        >
                        <span></span>
                        <RouterLink class="breadcrumbs__link text_10" to="#"
                            >Краски</RouterLink
                        >
                    </div>
                </div>
            </div>
            <div class="home__title text_36">
                <div class="container">Краски</div>
            </div>
            <div class="home__slider">
                <Splide
                    :options="{ rewind: true }"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide v-for="slide in 6">
                        <div class="home__slide">
                            <div class="home__slide-title text_72">Краски</div>
                            <div class="home__slide-text">
                                Идеально подходят для стен и других
                                поверхностей. Найди свой идеальный цвет!
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div class="home__catalog">
                <div class="container">
                    <div class="home__catalog-content">
                        <div class="home__catalog-left">
                            <UiCheckbox
                                v-for="(item, index) in checkbox"
                                :key="index"
                                :checkbox-filters="item"
                                @input-checkbox="filterCheckBox($event, item)"
                            />
                        </div>
                        <div class="home__catalog-right">
                            <div class="home__catalog-top">
                                <div class="home__catalog-amount text_12_m">
                                    {{ filterCards.length }} товаров
                                </div>
                                <div
                                    @click="activeCheckboxMob()"
                                    class="home__catalog-filter text_12_m"
                                >
                                    Фильтры
                                </div>
                                <UiSelect
                                    @choose="filterSelect($event)"
                                    @blur="store.blurActive = !store.blurActive"
                                />
                            </div>
                            <div class="home__catalog-list">
                                <Card
                                    v-for="(card, index) in filterCards"
                                    @add-card="addCard($event)"
                                    :key="index"
                                    :card="card"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition>
            <div v-if="store.blurActive" class="home__blur"></div>
        </transition>
        <transition>
            <div v-if="checkboxMobile" class="checkbox-mobile">
                <div class="checkbox-mobile__wrapper">
                    <div class="checkbox-mobile__close">
                        <span @click="closeCheckBoxMob()"></span>
                    </div>
                    <UiCheckbox
                        v-for="(item, index) in checkbox"
                        :key="index"
                        :checkbox-filters="item"
                        @input-checkbox="filterCheckBox($event, item)"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>
<style lang="less">
.home {
    &__slider {
        z-index: 1;
        margin-bottom: 72px;
        margin-top: -10px;
        @media @sm {
            display: none;
        }
    }
    &__title {
        display: none;
        margin-bottom: 48px;
        @media @sm {
            display: block;
        }
    }
    &__slide {
        background: url("../assets/img/slide.png") no-repeat center center;
        background-size: cover;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        gap: 24px;
        &-text {
            line-height: 130%;
            max-width: 472px;
            text-align: center;
            @media screen and (max-width: 600px) {
                width: 320px;
            }
        }
    }
    &__catalog {
        padding-bottom: 141px;
    }
    &__catalog-left {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 30px;
        min-width: 160px;
        @media screen and (max-width: 650px) {
            display: none;
        }
    }
    &__catalog-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    &__catalog-right {
        display: flex;
        flex-direction: column;
    }
    &__catalog-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 29px;
        @media screen and (max-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 750px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media @sm {
            grid-column-gap: 15px;
        }
    }
    &__catalog-amount {
        text-transform: uppercase;
        @media screen and (max-width: 650px) {
            display: none;
        }
    }
    &__catalog-filter {
        text-transform: uppercase;
        @media screen and (min-width: 650px) {
            display: none;
        }
    }
    &__catalog-top {
        display: flex;
        justify-content: space-between;
        position: relative;
        height: 44px;
    }
    &__blur {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #000;
        opacity: 0.7;
        z-index: 3;
    }
    .splide__slide {
        height: 560px;
        @media screen and (max-width: 1100px) {
            height: 400px;
        }
        @media screen and (max-width: 800px) {
            height: 350px;
        }
        @media screen and (max-width: 690px) {
            height: 300px;
        }
        @media screen and (max-width: 600px) {
            height: 300px;
        }
    }

    .splide__pagination {
        bottom: 39px;
        background: rgba(0, 0, 0, 0.4);
        width: 124px;
        height: 32px;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 16px;
        padding: 13px 14px;
        gap: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            width: 6px;
            height: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__page {
            opacity: 1;
        }
        button {
            margin: 0;
            height: 6px;
            width: 6px;
            opacity: 0.2;
        }
        .is-active {
            transform: scale(1);
            background: #fff;
            opacity: 1;
        }
        @media screen and (max-width: 690px) {
            bottom: 25px;
        }
    }
    .splide__arrow--prev {
        display: none;
    }
    .splide__arrow--next {
        right: 20%;
        top: 59%;
        width: 80px;
        height: 80px;
        background: url("../assets/svg/next.svg") 20px 40px no-repeat;
        background-position: center center;
        opacity: 1;
        svg {
            display: none;
        }
        @media screen and (max-width: 1100px) {
            right: 10%;
        }
        @media screen and (max-width: 840px) {
            right: 5%;
        }
        @media screen and (max-width: 680px) {
            height: 300px;
        }
        @media screen and (max-width: 600px) {
            height: 300px;
        }
    }
    .breadcrumbs {
        transform: translateY(40px);
        z-index: 3;
        position: relative;
        &__content {
            display: flex;
            align-items: center;
            gap: 8px;
            opacity: 0.3;
            text-transform: uppercase;
            span {
                background: @gray004;
                width: 3px;
                height: 3px;
                border-radius: 50%;
            }
        }
        &__link {
            color: @gray005;
            @media @sm {
                color: @gray001;
            }
        }
        @media @sm {
            transform: translateY(0);
            position: static;
            margin-top: 16px;
            margin-bottom: 48px;
        }
    }
    .checkbox-mobile {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 100vh;
        display: flex;
        align-items: flex-end;
        z-index: 4;
        &__wrapper {
            padding: 12px 24px 0;
            width: 100%;
            background: #fff;
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            height: 318px;
            position: fixed;
        }
        &__close {
            margin-bottom: 38px;
            display: flex;
            justify-content: center;
            span {
                display: block;
                width: 28px;
                height: 4px;
                background: @gray001;
                opacity: 0.6;
                border-radius: 40px;
            }
        }
    }
}
</style>
