<script setup>
import { ref } from "vue";
const emit = defineEmits(["blur", "choose"]);
const select = ref([
    "Сначала дорогие",
    "Сначала недорогие",
    "Сначала популярные",
    "Сначала новые",
]);
const currentSelect = ref(select.value[0]);
const openSelect = ref(false);
const chooseSelect = function (item) {
    document.querySelector("body").style.overflow = "auto";
    currentSelect.value = item;
    openSelect.value = false;
    emit("choose", item);
    emit("blur");
};
const emitSelect = () => {
    document.querySelector("body").style.overflow = "hidden";
    emit("blur");
    openSelect.value = !openSelect.value;
};
</script>
<template>
    <div
        class="ui-select"
        :class="{ 'ui-select--active': openSelect === true }"
    >
        <div class="ui-select__wrapper text_12_m">
            <div @click="emitSelect()" class="ui-select__current">
                {{ currentSelect }}
                <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 4.5L7.4641 0L0.535898 0L4 4.5Z"
                        fill="#202020"
                    />
                </svg>
            </div>
            <div v-if="openSelect === true" class="ui-select__list">
                <div v-for="(item, index) in select" :key="index">
                    <div
                        v-if="currentSelect !== item"
                        class="ui-select__item"
                        @click="chooseSelect(item)"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.ui-select {
    text-transform: uppercase;
    &__wrapper {
        width: 280px;
        @media @sm {
            width: 220px;
        }
    }
    &__item {
        padding: 16px 24px;
        background: #fff;
    }
    &__current {
        display: flex;
        justify-content: flex-end;
        gap: 5px;
        height: 44px;
        svg {
            margin-top: 4px;
        }
    }
    &--active {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
        .ui-select__current {
            background: @green;
            align-items: center;
            justify-content: flex-start;
            padding: 16px 24px;
            svg {
                display: none;
            }
        }
    }
}
</style>
