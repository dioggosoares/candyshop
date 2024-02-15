import { Search } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'

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

export function OrderDetails() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      {isDesktop ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pedido: 3483i2jk423k4234k23</DialogTitle>
              <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

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
