import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// 为 store state 声明类型
export interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    changeCount2(state, params) {
      state.count = params
    },
    changeCount(state) {
      state.count++
    }
  },
  actions: {
    changeCountAsync({ commit }, params) {
      setTimeout(() => {
        commit('changeCount2', params)
      }, 1000)
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}
