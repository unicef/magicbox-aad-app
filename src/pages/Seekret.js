import React from 'react'
import defaultPage from '../hocs/defaultPage'
import securePage from '../hocs/securePage'

const SeekretPage = () =>
    <div>
      <iframe src="http://localhost:8080/#/" frameborder='0' width='100%' height='1000px'></iframe>
    </div>

export default securePage(defaultPage(SeekretPage))
