'use client'

import { memo, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as RhfForm
} from '@/components/ui/form'
import { Button } from '@/components/ui-extended/button'
import { Input } from '@/components/ui-extended/input'

import { useMounted } from '@/hooks/useMounted.hook'

import { authSchema } from '@/schemas/auth.schema'

import type { z } from 'zod'

const Form = memo(() => {
  const { isMounted } = useMounted()
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    mode: 'all'
  })

  /**
   * @description Form handler
   * @param form authSchema
   * @returns Promise<void>
   */
  const onSubmit = useCallback(async (form: z.infer<typeof authSchema>) => {
    console.log('form', form)
  }, [])

  return (
    isMounted && (
      <RhfForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center'>
                  <FormLabel>Password</FormLabel>
                  <Link
                    href='#'
                    className='ml-auto inline-block text-sm underline'
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Login
          </Button>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='#' className='underline'>
              Sign up
            </Link>
          </div>
        </form>
      </RhfForm>
    )
  )
})

Form.displayName

export { Form }
