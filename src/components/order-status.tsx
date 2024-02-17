import { cn } from '@/lib/utils'

export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatusType
}

const orderStatusMap: Record<OrderStatusType, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn('size-2 rounded-full', {
          'bg-slate-500': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-amber-500': status === 'processing',
          'bg-orange-500': status === 'delivering',
          'bg-emerald-500': status === 'delivered',
        })}
      />
      <span className="fonte-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
