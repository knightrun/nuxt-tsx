import {CreateElement, VNode} from 'vue'
import {Component, Vue, Prop} from 'nuxt-property-decorator'


@Component
export default class VCImage extends Vue {

  @Prop([String, Object])
  readonly src: string | null

  @Prop({type: String, required: true, default: 'image...'})
  readonly alt: string

  onError(event: Event) {
    console.log('...onError');
  }

  render(h: CreateElement): VNode {
    const {src, alt} = this

    return (
      <img src={src || ''} alt={alt} onError={this.onError}/>
    )
  }

}
