<template>
  <div class="startWeight">
    <label for="startWeight">Начальная масса</label>
    <br>
    <input type="number" id="startWeight" v-model="startWeight">
  </div>
  <div>
    <table v-for="sieve of sieves" :key="sieve">
      <thead></thead>
      <tr>
        <th v-for="diameter of sieve">{{ diameter }}</th>
      </tr>

      <tbody>
      <tr>
        <td v-for="(row, i) in sieve">
          <input type="number" v-model.number="inputData[i]" @blur="click">
        </td>
      </tr>
      </tbody>
    </table>

    <pre>{{ JSON.stringify(name, null, 2) }}</pre>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {ref} from 'vue';

export default {
  props: ['sieves'],
  setup() {
    const store = useStore()
    const sieves = computed(() => store.getters['generateSieves/sieves'])
    const name = ref(name)
    const startWeight = 5000
    const inputData = {}
    const result = []


    const click = ($event) => {
      // console.log($event.target.value)
      // result.push((Object.values(inputData).reduce((a, b) => a / b, 100)))
      // const res = (Object.values(inputData) / startWeight) * 100
      // console.log(res)
      console.log(Object.values(inputData).map(el => (el / startWeight) * 100))
      result.push(Object.values(inputData).reduce((a, b) => a + b, 0))
      console.log(result)
    }

    const calc = computed(() => {

    })

    return {
      sieves,
      name,
      click,
      calc,
      inputData,
      startWeight,
      result
    }
  }
}
</script>

<style scoped lang="scss">
input {
  max-width: 80px;
}
</style>