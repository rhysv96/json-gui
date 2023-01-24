import './App.css'

function App() {

  const fullForm = [
    'Java',
    'Script',
    'Object',
    'Notation',
    ' ',
    'Graphical',
    'User',
    'Interface',
  ]
  return (
    <div className="w-64 mx-auto scale-150">
      <div className="grid grid-cols-8 w-48 w-auto h-screen content-center">
        { fullForm.map(val => <>
          <div className="text-2xl text-center">{ val[0] }</div>
        </>) }
        { fullForm.map(val => <>
          <div className="text-center">
            <span className="text-xs" style={{ writingMode: 'vertical-lr' }}>{ val }</span>
          </div>
        </>) }
      </div>
    </div>
  )
}

export default App
