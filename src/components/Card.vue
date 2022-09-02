<script setup>
const emit = defineEmits(["addCard"]);
defineProps({
    card: Object,
});
</script>
<template>
    <div class="card">
        <div class="card__img">
            <img :src="card.imgFront" alt="" class="card__img-front" />
            <img :src="card.imgBack" alt="" class="card__img-back" />
        </div>
        <div class="card__title text_16_l">{{ card.name }}</div>
        <div class="card__bottom">
            <div class="card__price text_16_sb">{{ card.price }} ₽</div>
            <button @click="emit('addCard', card)" class="card__buy">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 4.16663V15.8333"
                        stroke="#1F2020"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M4.16699 10H15.8337"
                        stroke="#1F2020"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
<style lang="less">
.card {
    max-width: 284px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid @gray006;
    &__buy {
        width: 80px;
        height: 32px;
        background-color: @green;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        @media @sm {
            width: 40px;
            height: 24px;
            background: @gray002;
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        max-height: 278px;
        overflow: hidden;
        position: relative;
        &-back {
            position: absolute;
            opacity: 0;
            z-index: 2;
        }
        &-front {
            position: absolute;
            opacity: 1;
            transition: opacity 0.3s;
            z-index: 3;
        }
    }
    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &:hover {
        @media screen and (min-width: 520px) {
            .card__img-back {
                opacity: 1;
                transition: opacity 0.3s;
            }
            .card__img-front {
                opacity: 0;
            }
        }
    }
    @media @sm {
        padding-bottom: 34px;
    }
}
</style>
