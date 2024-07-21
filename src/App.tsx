import { Outlet } from 'react-router-dom'
import PageLayout from '@/components/layout/pageLayout'
import Header from './components/Header/Header'

function App() {
  return (
    <PageLayout className=''>
      <Header/>
      <main>
        <h1 className='text-center font-bold text-2xl p-4' >Your Personal Transaction Manager</h1>
        <Outlet />
      </main>
    </PageLayout>
  )
}

export default App
