import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from '@/store/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage , ChartPage} from '@/pages/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <HomePage />
        ),
      },
      {
        path: "/chart",
        element: (
          <ChartPage />
        ),
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    
    <RouterProvider router={router} />
  </Provider>,
)
