import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16" />
                  <TableHead className="w-[8.75rem]">Identificador</TableHead>
                  <TableHead className="w-[11.25rem]">Realizado há</TableHead>
                  <TableHead className="w-[8.75rem]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[8.75rem]">Total do pedido</TableHead>
                  <TableHead className="w-[10.25rem]" />
                  <TableHead className="w-[8.25rem]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
