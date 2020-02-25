import React from 'react'
import css from './index.scss'

import { CUI, Components } from 'duck-cui'

import png from "../../assets/yay.jpg"

const { Speaks } = Components
const { Text } = Speaks

export default class extends React.Component {
  render () {
    return <>
      <CUI ready={ context => this.onReady(context) } />
      {/* <img src={ png } alt="" /> */}
    </>
  }

  async onReady (context) {
    this.cuic = context
    this.cuic.setBackgroundContent({ content: <div className={ css.bg }></div>})
    this.cuic.addSpeaker({ 
      id: 'joker',
      name: 'joker',
      avatarURL: png,
      side: 'left'
    })

    console.log(this.cuic, Speaks)
    this.cuic.append(new Text({ text: '你好鸭', speaker: 'joker' }))
    this.cuic.append(new Text({ text: '不错喔' }))
  }
}