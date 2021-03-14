import { Vue, Component } from 'nuxt-property-decorator'
import { VNode, CreateElement } from 'vue'

@Component
export default class DefaultLayout extends Vue {
  render(h: CreateElement): VNode {
    return (
      <div class="wrap">
        <nuxt />
      </div>
    )
  }
}
