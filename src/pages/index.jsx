import React from 'react'
import css from './index.scss'

import IndexCUIDemo from '../components/index/IndexCUIDemo'
const LOGO_URL = '//duck-cui.ben7th.com/assets/duck-favicon-512.png'

export default class index extends React.Component {
  render () {
    return <div className={ css.index }>
      <div className={ css.main }>
        <div className={ css.parts }>
          <Header />
          <Intro />
        </div>
      </div>
    </div>
  }
}

class Header extends React.Component {
  render () {
    return <div className={ css.Header }>
      <h1>DUCK CUI</h1>
      <div className={ css.logo }>
        <img src={ LOGO_URL } alt='duck cui logo' />
      </div>
      <h2>Implementation Tools for CUI</h2>
      <h2>互动对话实现工具</h2>
    </div>
  }
}

class Intro extends React.Component {
  render () {
    return <div className={ css.Intro }>
      <IndexCUIDemo />
    </div>
  }
}