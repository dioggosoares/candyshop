import { useMutation, useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/getProfile'
import { signOut } from '@/api/sign-out'

import { StoreProfileDialog } from './store-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Drawer } from './ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const navigate = useNavigate()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    })

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  const dropDownMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {isLoadingManagedRestaurant ? (
            <Skeleton className="h-4 w-32" />
          ) : (
            managedRestaurant?.name
          )}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {isLoadingProfile ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-36" />
            </div>
          ) : (
            <>
              <span>{profile?.name}</span>
              <span className="text-sm font-normal text-muted-foreground">
                {profile?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DialogTrigger asChild>
          <DropdownMenuItem>
            <Building className="h-4 w-4 mr-2" />
            <span>Perfil da loja</span>
          </DropdownMenuItem>
        </DialogTrigger>
        <DropdownMenuItem
          asChild
          className="text-rose-500 dark:text-rose-400"
          disabled={isSigningOut}
        >
          <button className="w-full" onClick={() => signOutFn()}>
            <LogOut className="h-4 w-4 mr-2" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <>
      {isDesktop ? (
        <Dialog>
          {dropDownMenu}
          <StoreProfileDialog />
        </Dialog>
      ) : (
        <Drawer>
          {dropDownMenu}
          <StoreProfileDialog />
        </Drawer>
      )}
    </>
  )
}
