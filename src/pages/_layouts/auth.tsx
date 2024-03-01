import Cookies from 'js-cookie'
import { Donut } from 'lucide-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AuthLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('auth')

    if (token !== null || token !== undefined) {
      navigate('/', { replace: true })
      return
    }

    navigate('/sign-in', { replace: true })

    return () => {}
  }, [navigate])

  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div
        className="h-full flex flex-col border-r border-foreground/5 bg-muted p-10
        text-muted-foreground justify-between"
      >
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Donut className="h-5 w-5" />
          <span className="font-semibold">candy.shop</span>
        </div>
        <footer className="text-sm">
          🍩 - Painel de controle &copy; CandyShop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
