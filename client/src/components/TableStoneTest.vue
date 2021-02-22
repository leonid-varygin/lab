<template>
  <div class="startWeight">
    <label for="startWeight">Начальная масса</label>
    <br>
    <input type="number" id="startWeight">
  </div>
  <div>
    <table v-for="sieve of sieves" :key="sieve">
      <thead></thead>
      <tr>
        <th v-for="diamether of sieve">{{ diamether }}</th>
      </tr>

      <tbody>
      <tr >
        <td v-for="(row,i) in sieve" :key="row"><input type="text"></td>
      </tr>
      </tbody>
    </table>
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
    const p = ref(sieves)
    console.log(p)
    return {sieves}
  }
}
</script>

<style scoped lang="scss">

</style>