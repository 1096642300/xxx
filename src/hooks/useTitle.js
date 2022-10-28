import { onMounted, onUpdated } from 'vue'
export default function (count) {
  onMounted(() => {
    document.title = `点击次数为${count.value}`
  })
  onUpdated(() => {
    document.title = `点击次数为${count.value}`
  })
}
