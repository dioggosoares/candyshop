import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
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
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderStatus } from './order-status'

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

            {order && (
              <div className="space-y-6">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        Status
                      </TableCell>
                      <TableCell className="flex justify-end">
                        <OrderStatus status={order.status} />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        Cliente
                      </TableCell>
                      <TableCell className="flex justify-end">
                        {order.customer.name}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        Telefone
                      </TableCell>
                      <TableCell className="flex justify-end">
                        {order.customer.phone ?? 'Não informado'}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        E-mail
                      </TableCell>
                      <TableCell className="flex justify-end">
                        {order.customer.email}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground">
                        Realizado há
                      </TableCell>
                      <TableCell className="flex justify-end">
                        {formatDistanceToNow(order.createdAt, {
                          locale: ptBR,
                          addSuffix: true,
                        })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead className="text-right">Qtd.</TableHead>
                      <TableHead className="text-right">Preço</TableHead>
                      <TableHead className="text-right">Subtotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.orderItems.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>{item.product.name}</TableCell>
                          <TableCell className="text-right">
                            {item.quantity}
                          </TableCell>
                          <TableCell className="text-right">
                            {(item.priceInCents / 100).toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </TableCell>
                          <TableCell className="text-right">
                            {(
                              (item.priceInCents * item.quantity) /
                              100
                            ).toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Total do pedido</TableCell>
                      <TableCell className="text-right font-medium">
                        {(order.totalInCents / 100).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer>
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

            <div className="space-y-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Status
                    </TableCell>
                    <TableCell className="flex justify-end">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-400" />
                        <span className="fonte-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Cliente
                    </TableCell>
                    <TableCell className="flex justify-end">
                      Diogo Soares
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Telefone
                    </TableCell>
                    <TableCell className="flex justify-end">
                      (84) 99135-0210
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      E-mail
                    </TableCell>
                    <TableCell className="flex justify-end">
                      dioggosoares35@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">
                      Realizado há
                    </TableCell>
                    <TableCell className="flex justify-end">
                      há 3 minutos
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Qtd.</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Donut Tradicional</TableCell>
                    <TableCell className="text-right">2</TableCell>
                    <TableCell className="text-right">R$ 8,90</TableCell>
                    <TableCell className="text-right">R$ 17,80</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Donut cobertura de Nutella</TableCell>
                    <TableCell className="text-right">4</TableCell>
                    <TableCell className="text-right">R$ 11,90</TableCell>
                    <TableCell className="text-right">R$ 47,60</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total do pedido</TableCell>
                    <TableCell className="text-right font-medium">
                      R$ 65,40
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
