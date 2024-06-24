'use client'

import { useEffect, useState } from 'react'

import {
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'

import type { ColumnDef } from '@tanstack/react-table'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export const DataTable = <TData, TValue>({
	columns,
	data
}: DataTableProps<TData, TValue>) => {
	// Common State
	const [isMounted, setIsMounted] = useState(false)

	// Table
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true
	})

	/**
	 * @description Check for checking whether fully rendered client side
	 * @return {void} void
	 */
	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Check if still in server
	if (!isMounted) {
		return <></>
	}

	return (
		<div className='rounded-md border overflow-x-auto'>
			<Table>
				<TableHeader className='overflow-x-auto'>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead
										key={header.id}
										style={{ width: `${header.getSize()}px` }}
										className='whitespace-nowrap'
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody className='overflow-x-scroll'>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
								className='overflow-x-scroll'
							>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className='h-24 text-center'>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}
