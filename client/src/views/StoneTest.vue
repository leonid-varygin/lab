<template>
  <div class="about">
    <form @submit.prevent>
      <h1>Расчёт гранулометрического состава</h1>
      <div>
        <label for="min">Минимальный размер фракции</label>
        <br/>
        <input type="number" id="min" v-model="min" @blur="minBlur" >
        <br>
        <small v-if="minError">{{ minError }}</small>
      </div>


      <div>
        <label for="max">Максимальный размер фракции</label>
        <br/>
        <input type="number" id="max" v-model="max" @blur="maxBlur" >
        <br>
        <small v-if="maxError">{{ maxError }}</small>
      </div>

      <div>
        <label for="widthFraction">Является ли фракция широкой?</label>
        <br>
        <input type="checkbox" id="widthFraction">
      </div>


      <button @click="onSubmit" class="btn btn-success" :disabled="isSubmitting || isTooManyAttempts">Подобрать сита
      </button>
      <div v-if="isTooManyAttempts">Вы слишком часто жмякаете кнопку</div>
    </form>

    <hr/>

    <div>
      <TableStoneTest/>
    </div>
  </div>
</template>
<script>
import {useStoneTestForm} from "@/use/stone-test-form";
import TableStoneTest from "@/components/TableStoneTest";

export default {
  setup() {
    return {...useStoneTestForm()}
  },
  components: {TableStoneTest}
}
</script>

<style lang="scss" scoped>

</style>
