import ReactDOM from 'react-dom'
import { Button } from '@kdcloudjs/kdesign'

const Demo: React.FC = () => {
  const demoButtonStyle = { margin: '0px 8px 8px 0' }

  const overlay1 = [
    { value: '1', label: '发布' },
    { value: '2', label: '生成凭证' },
    { value: '3', label: '打印' },
  ]

  const overlay2 = [
    { value: '1', label: '暂存' },
    { value: '2', label: '撤销' },
    { value: '3', label: '废弃' },
  ]

  return (
    <div>
      <Button.Dropdown overlay={overlay1} style={demoButtonStyle} onItemClick={() => console.log('onItemClick')}>
        更多
      </Button.Dropdown>
      <Button.Dropdown
        style={demoButtonStyle}
        overlay={overlay2}
        type="similar"
        onClick={() => console.log('onClick')}
        onItemClick={() => console.log('onItemClick')}>
        提交
      </Button.Dropdown>
    </div>
  )
}

export default Demo