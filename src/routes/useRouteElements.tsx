import { useRoutes } from 'react-router-dom'
import Home from '~/pages/Home'
import HomeLayout from '~/layouts/HomeLayout'
import NotFound from '~/pages/NotFound'

const useRouteElements = () => {

  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
