<template>
  <div class="about">
    <form @submit.prevent>
      <h1>Расчёт гранулометрического состава</h1>
      <fieldset>
        <label for="min">Минимальный размер фракции</label>
        <input type="number" id="min">
      </fieldset>

      <fieldset>
        <label for="max">Максимальный размер фракции</label>
        <input type="number" id="max">
      </fieldset>

      <button @click="" class="btn btn-success">Подобрать сита</button>

    </form>
  </div>
</template>
<script>
export default {
  setup() {
  return {
    submit: () => {

    }
  }
  }
}
</script>
