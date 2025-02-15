import ConfigurationContext from '../contexts/ConfigurationContext'
import Dialog from '../components/Dialog'
import React, { useContext } from 'react'

export default (props)=>{
  const { text } = useContext(ConfigurationContext)
  
  return(
    <Dialog
      closable={ false }
      header={
        <div className="PaddingTopS PaddingLeftM PaddingRightM TextLeft">
          <h1 className="LineHeightL FontSizeL">Payment</h1>
        </div>
      }
      body={
        <div className="PaddingLeftM PaddingRightM PaddingBottomXS">
          <div className="Card Skeleton">
            <div className="SkeletonBackground"/>
          </div>
        </div>
      }
      footer={
        <div className="PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomS">
          <div className="SkeletonWrapper">
            <div className="ButtonPrimary Skeleton">
              <div className="SkeletonBackground"/>
            </div>
          </div>
          <div className="TextCenter Opacity05 PaddingTopS">
            <strong>{ text }</strong>
          </div>
        </div>
      }
    />
  )
}
