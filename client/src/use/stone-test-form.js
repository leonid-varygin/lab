import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from 'vuex';

export function useStoneTestForm() {
  const store = useStore()

  const {handleSubmit, isSubmitting, submitCount} = useForm()
  const {value: min, errorMessage: minError, handleBlur: minBlur} = useField(
    'min',
    yup
      .number()
      .required('Поле не должно быть пустым!')
      .min(1)
  )
  const {value: max, errorMessage: maxError, handleBlur: maxBlur} = useField(
    'max',
    yup
      .number()
      .required('Поле не должно быть пустым!')
      .min(1)
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0
      }, 3000)
    }
  })

  const onSubmit = handleSubmit(values => {

    const bundleSieves = {
      'D2': values.max * 2,
      'D1.4': values.max * 1.4,
      'D': Number(values.max),
      'd': Number(values.min),
      'd/2': values.min / 2
    }
    store.dispatch('generateSieves/create', bundleSieves).then(r => console.log(r))
  })

  return {
    min,
    max,
    minError,
    minBlur,
    maxError,
    maxBlur,
    onSubmit,
    isSubmitting,
    submitCount,
    isTooManyAttempts
  }
}