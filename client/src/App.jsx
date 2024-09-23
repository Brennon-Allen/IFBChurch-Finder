import './App.css'
import AddForm from './components/AddForm'
import ChurchList from './components/ChurchList'

function App() {

  useEffect(() => {
    axios.get('/')
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }, [])

  return (
    <>
      <AddForm />
      <ChurchList />
    </>
  )
}

export default App
