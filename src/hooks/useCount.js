import { computed, reactive, getCurrentInstance } from 'vue'
export default function useCount() {
  const { proxy } = getCurrentInstance()
  const count = reactive({ a: 0 })
  const changeCount = () => {
    count.a++
  }
  const doubleCount = computed(() => count.a * 2)
  // watch监听ref数据变化
  // watch(count, (val, oldVal) => {
  //   console.log('count改变了...', val, oldVal)
  // })

  // watch监听reactive数据变化
  // val与oldVal都变成最新的proxy代理对象了
  // watch(count, (val, oldVal) => {
  //   console.log(val, oldVal)
  // })

  // watch监听第一个参数getter函数的形式
  // watch(
  //   () => count.a,
  //   (val, oldVal) => {
  //     console.log(val, oldVal)
  //   }
  // )

  // 如果写成这个样子，默认当count.a改变了，监听不到
  // watch(
  //   () => count,
  //   (val, oldVal) => {
  //     console.log(val, oldVal)
  //   },
  //   { deep: true, immediate: true }
  // )

  // watchEffect(() => {
  //   console.log('count.a改变了...', count.a)
  // })

  const watchA = () => {
    proxy.stopWatchA = proxy.$watch(
      () => count.a,
      (val, oldVal) => {
        console.log(val, oldVal)
      }
    )
  }

  const stopWatchA = () => {
    proxy.stopWatchA()
  }

  return {
    count,
    doubleCount,
    changeCount,
    watchA,
    stopWatchA
  }
}
