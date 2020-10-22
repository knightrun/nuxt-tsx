import {CreateElement, VNode} from 'vue'
import {Component, Vue, Prop} from 'nuxt-property-decorator'


@Component
export default class VCLink extends Vue {

  @Prop({type: String, required: true, default: ''})
  readonly to: string

  prevent(event: Event) {
    event.preventDefault();
  }

  render(h: CreateElement): VNode {
    let hasProtocol = /^http(s)?:\/\//gi.test(this.to)

    if (this.to) {
      if (hasProtocol) {
        return (
          <a href={this.to} target="_blank">
            {this.$slots.default}
          </a>
        )
      } else {
        return (
          <nuxt-link to={this.to}>
            {this.$slots.default}
          </nuxt-link>
        )
      }
    } else {
      return (
        <a href="javascript:return false;" onClick={this.prevent}>
          {this.$slots.default}
        </a>
      )
    }
  }
}
