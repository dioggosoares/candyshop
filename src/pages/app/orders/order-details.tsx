import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { getOrderDetails } from '@/api/get-order-details'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { OrderTableDetails } from './order-table-details'

interface OrderDetailsProps {
  orderId: string
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function OrderDetails({
  orderId,
  open,
  onOpenChange,
}: OrderDetailsProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  })

  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pedido: {orderId}</DialogTitle>
              <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            {order && <OrderTableDetails order={order} />}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={onOpenChange}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Pedido: 3483i2jk423k4234k23</DrawerTitle>
              <DrawerDescription>Detalhes do pedido</DrawerDescription>
            </DrawerHeader>

            {order && <OrderTableDetails order={order} />}
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
