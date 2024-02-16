import { cn } from '@/lib/utils'

type OrderStatusType =
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
          'bg-amber-500': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-emerald-500': status === 'delivered',
          'bg-blue-600': ['processing', 'delivering'].includes(status),
        })}
      />
      <span className="fonte-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
