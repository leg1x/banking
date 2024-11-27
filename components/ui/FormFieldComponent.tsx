"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldPath, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Control } from 'react-hook-form'
import { authformSchema } from '@/lib/utils'

const formSchema = authformSchema('sign-up')

interface FormFieldComponent  {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
}

const FormFieldComponent = ({control, name, label, placeholder}: FormFieldComponent) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            className="input-class"
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                            />
                    </FormControl>
                    <FormMessage 
                    className="from-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}

export default FormFieldComponent
