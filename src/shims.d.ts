declare module '*.vue' {
  declare module 'element-plus'
  import type { DefineComponent } from '@/shims'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
