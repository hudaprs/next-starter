import { forwardRef } from 'react'

import type { InputProps } from '@/components/ui/input'
import { Input as BaseInput } from '@/components/ui/input'

import { cn } from '@/libs/utils.lib'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <BaseInput
      {...props}
      className={cn('focus-visible:ring-0', props?.className)}
      ref={ref}
    />
  )
})
Input.displayName = 'Input'

export { Input }
