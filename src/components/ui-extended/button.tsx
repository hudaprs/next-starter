import { forwardRef } from 'react'

import type { ButtonProps } from '@/components/ui/button'
import { Button as BaseButton, buttonVariants } from '@/components/ui/button'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <BaseButton ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
