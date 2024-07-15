import type { PaginationProps } from 'element-plus'
import type { PageInfo, RecordType, Mutable } from '@plus-pro-components/types'

export interface PlusPaginationSelfProps {
  modelValue?: PageInfo
  total?: number
  pageSizeList?: number[]
  align?: 'left' | 'right'
}

export type PlusPaginationProps = PlusPaginationSelfProps &
  Partial<Mutable<PaginationProps>> &
  RecordType

export interface PlusPaginationEmits {
  (e: 'update:modelValue', pageInfo: PageInfo): void
  (e: 'change', pageInfo: PageInfo): void
  (e: 'size-change', value: number): void
  (e: 'current-change', value: number): void
}
