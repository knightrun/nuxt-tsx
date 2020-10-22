import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Test extends Vue {
  private flag: boolean = true
  private tag:string = 'div'

  render(h: CreateElement): VNode {
    return (
      h(
        this.tag,
        {
          class : this.flag ? 'flag' : '',
          attrs : {
            'data-flag' : true
          }
        },
        [
          <div>a</div>,
          <div>b</div>
        ]
      )
    )
  }
}
