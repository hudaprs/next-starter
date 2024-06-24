import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @description Merge tailwind classes
 * @param inputs all class name
 * @returns merged string of classes
 */
export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs))
}
