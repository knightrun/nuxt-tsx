import { VuexModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators'

declare global {
  interface Todo {
    id: number
    name: string
    commpany: string
  }
}

@Module({
  name: 'dev',
  namespaced: true,
  stateFactory: true,
})
export default class Dev extends VuexModule implements Todo{
  [x: string]: any

  id: number = 0
  name: string = ''
  commpany: string = ''

  @Mutation
  changedId(data: number){
    this.id = data
  }

  @Mutation
  changedName(data: string){
    this.name = data
  }

  @Mutation
  changedCompany(data: string){
    this.commpany = data
  }

  @Action({rawError: true})
  async setData(data: Todo) {
    return data
  }

  @MutationAction
  async setTest(data: Todo) {
    return data
  }

  @MutationAction
  async setStore({ app }: nuxtContext) {
    console.log('dev store : server init에서 실행')
    return {}
  }

  @MutationAction
  async setApi({ app }: nuxtContext) {
    console.log('dev store : middleware에서 실행')
    return {}
  }

  get getId(){
    return `사번 : ${this.id}`
  }

  get getName(){
     return `이름 : ${this.name}`
  }

  get getCompany(){
    return `회사 : ${this.commpany}`
  }
}

