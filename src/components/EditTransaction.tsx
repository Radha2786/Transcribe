import React , {useEffect, useState} from "react"
import {  Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Modal from "@/components/modal";
import { Transaction } from '@/types/transactions.types';

import {useDispatch } from "react-redux";

import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {transactionSchema} from '@/types/transactions.types'
import { Textarea } from "@/components/ui/textarea"
import { updateTransaction } from "@/store/feature/Transactions"

export const EditTransaction:React.FC<Transaction> = ({
    id,
    dateTime,
    amount,
    type,
    category,
    title,
    currency,
    note
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = useForm<z.infer<typeof transactionSchema>>({
      resolver: zodResolver(transactionSchema),
      defaultValues: {
        id: id,
        dateTime: dateTime,
        amount: amount,
        type: type,
        category: category,
        title: title,
        currency: currency,
        note: note,
      }
    })
    const dispatch = useDispatch();
    function onSubmit(values: z.infer<typeof transactionSchema>) {
      dispatch(updateTransaction(values));
      setIsModalOpen(false);
    }
  
    useEffect(() => {
      form.reset({
        id: id,
        dateTime: dateTime,
        amount: amount,
        type: type,
        category: category,
        title: title,
        currency: currency,
        note: note
      })
    } , [id, dateTime, amount, type, category, title, currency, note, form])
  
    return (
      <Modal 
      icon={<Pencil className="h-4 w-4" />}
      title="Edit Transaction"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      className="bg-white text-black dark:bg-slate-900 dark:text-white"
      >
         <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" className="dark:text-white" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input 
                   type="number"
                  placeholder="Amount" className="dark:text-white" {...field}
                   value={field.value || ""}
                   onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Category" className="dark:text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input placeholder="Type" className="dark:text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Date Time</FormLabel>
                <FormControl>
                  <Input placeholder="Date Time" className="dark:text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <Input placeholder="Currency" className="dark:text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem
              className=""
              >
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Textarea placeholder="Note" className="dark:text-white" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="dark:bg-white">Submit</Button>
        </form>
      </Form>
      </Modal>
    )
  }