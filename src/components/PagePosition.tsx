import React from 'react'

import styles from './PagePosition.module.scss'

interface IPagePosition {
  trackedElement: {
    offsetHeight: number
    scrollHeight: number
    scrollTop: number
  }
}

function PagePosition({
  trackedElement: { offsetHeight, scrollHeight, scrollTop },
}: IPagePosition) {
  const screenHeight =
    scrollHeight <= offsetHeight ? scrollHeight : scrollHeight - offsetHeight
  const readPosition = Math.floor((scrollTop / screenHeight || 0) * 100)

  return (
    <div className={styles.PagePosition}>
      <p
        className={styles.PagePositionMeter}
        style={{ transition: 'width 1s', width: `${readPosition}%` }}
      />
    </div>
  )
}

PagePosition.defaultProps = {
  trackedElement: {
    offsetHeight: 0,
    scrollHeight: 0,
    scrollTop: 0,
  },
}

export default PagePosition
