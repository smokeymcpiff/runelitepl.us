import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class OAuthPage extends Component {
  static contextType = ThemeContext

  componentDidMount() {
    const { setNotFound } = this.context

    setNotFound()
  }

  componentWillUnmount() {
    const { setFound } = this.context

    setFound()
  }

  render() {
	  let foo = 'null';
	  try {
		let search = window.location.search;
		let params = new URLSearchParams(search);
		foo = params.get('code');
	} catch (e) {
		console.log(e)
	}
    return (
      <Layout>
        <Helmet title={`RuneLitePlus - Integration`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1>Discord-Github Integration</h1>
          </div>
          <p>
            Reply to the Discord bot via Direct Message with <div>!ghauth {foo}</div>
          </p>
          <p className="text-right">
            Click any link to continue<span className="blink">&#9608;</span>
          </p>
        </div>
      </Layout>
    )
  }
}
