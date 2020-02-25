import React from 'react'

import { CUI, Components } from 'duck-cui'

const AVATAR_URL = '//duck-cui.ben7th.com/assets/duck-favicon-512.png'

const { Speaks } = Components
const { Loading, Text } = Speaks

export default class extends React.Component {
  render () {
    return <>
      <CUI ready={ context => this.onReady(context) } />
    </>
  }

  async onReady (context) {
    this.cuic = context

    this.cuic.addSpeaker({ 
      id: 'duck',
      name: 'duck',
      avatarURL: AVATAR_URL,
      side: 'left'
    })

    await this.demo()
  }

  async demo () {
    let { cuic } = this

    await cuic.removeAll()

    await this.loadingAndSpeak('你好鸭，我是 duck cui')
    await this.loadingAndSpeak('我可以帮助你实现像这样的对话')
    await this.loadingAndSpeak('现在我还在努力开发')
    await this.loadingAndSpeak('可以去 github 关注我鸭')
    await this.loadingAndSpeakMD('这里鸭：[duck-ai/duck-cui](https://github.com/duck-ai/duck-cui)')
  }

  async loadingAndSpeak (text) {
    let duck = this.cuic.getSpeaker('duck')
    await duck.speakAndThenRemove(new Loading(), { duration: 1000 })
    await duck.speak(new Text({ text }))
  }

  async loadingAndSpeakMD (markdown) {
    let duck = this.cuic.getSpeaker('duck')
    await duck.speakAndThenRemove(new Loading(), { duration: 1000 })
    await duck.speak(new Text({ markdown }))
  }
}