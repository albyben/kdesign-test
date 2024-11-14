import React from 'react'
import { QRCode } from '@kdcloudjs/kdesign'
function Demo() {
  const style = {
    marginRight: 50
  }
  const value = 'https://www.kingdee.design/'
  const handleRefresh = () => {
    console.log('qrcode refresh')
  }
  return (
    <div
      style={{
        display: 'flex'
      }}>
      <QRCode value={value} style={style} />
      <QRCode value={value} status="loading" style={style} />
      <QRCode value={value} status="expired" style={style} onRefresh={handleRefresh} />
    </div>
  )
}


export default Demo;
