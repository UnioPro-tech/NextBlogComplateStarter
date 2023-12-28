import React from 'react'

import usePageView from '../hooks/usePageView'
import GoogleAnalytics from '../components/GoogleAnalytics'

const App = ({ Component, pageProps }) => {
  usePageView() // 追加

  return (
    <>
      <GoogleAnalytics />

      <Component {...pageProps} />
    </>
  )
}

export default App