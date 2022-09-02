<script setup>
defineProps({
    checkboxFilters: Object,
});
defineEmits(["inputCheckbox"]);
</script>
<template>
    <div class="checkbox">
        <label class="checkbox-input">
            <input
                @input="$emit('inputCheckbox', !checkboxFilters.checked)"
                class="checkbox"
                type="checkbox"
                :checked="checkboxFilters.checked"
                :name="checkboxFilters.name"
            />
            <span class="checkbox-input-switch"></span>
        </label>
        <div class="checkbox__text text_12">{{ checkboxFilters.name }}</div>
    </div>
</template>
<style lang="less">
.checkbox {
    display: flex;
    align-items: center;
    &__text {
        text-transform: uppercase;
    }
    @media screen and (max-width: 650px) {
        margin-bottom: 5px;
    }
}
.checkbox-input {
    display: inline-block;
    height: 28px;
    margin-right: 12px;
    position: relative;
}
.checkbox-input .checkbox-input-switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 36px;
    height: 23px;
    border-radius: 40px;
    background: #eee;
    transition: 0.2s;
}
.checkbox-input .checkbox-input-switch:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: @gray001;
    transition: 0.15s;
}
.checkbox-input input[type="checkbox"] {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox-input input[type="checkbox"]:checked + .checkbox-input-switch {
    background: @green;
}
.checkbox-input input[type="checkbox"]:checked + .checkbox-input-switch:before {
    transform: translate(15px, -50%);
}
</style>
