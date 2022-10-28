import { onMounted, onUnmounted, ref } from 'vue'
function useAddeventListener(target, type, callback) {
  onMounted(() => {
    target.addEventListener(type, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(type, callback)
  })
}
export default function () {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 在useMousehooks函数里面，还可以继续调用其他的hooks函数
  useAddeventListener(window, 'mousemove', update)

  return {
    x,
    y
  }
}

// export default function () {
//   const x = ref(0)
//   const y = ref(0)

//   function update(e) {
//     x.value = e.pageX
//     y.value = e.pageY
//   }

//   onMounted(() => {
//     window.addEventListener('mousemove', update)
//   })

//   onUnmounted(() => {
//     window.removeEventListener('mousemove', update)
//   })

//   return {
//     x,
//     y
//   }
// }
