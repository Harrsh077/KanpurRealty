"use client"

import React,{useState} from 'react'
import {
    AlertDialog,
     AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,} 
  from "@/components/ui/alert-dialog"
  import {X} from "lucide-react";
  import {Input} from "../ui/input";
  import { Button } from "@/components/ui/button"
  import { Label } from '../ui/label';
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import {loginType, loginSchema} from "@/validations/authSchema"
  import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
  import { toast } from 'react-toastify';
  import { useRouter } from 'next/navigation';
  import SocialBtns from '@/app/auth/SocialBtns';


export function ButtonDemo() {
  return <Button>Button</Button>
}
export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false)
  const [loading ,setLoading] = useState<boolean>(false)
  const supabase = createClientComponentClient()
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit =  async (payload: loginType) => { 
    setLoading(true)
    const {data, error} = await supabase.auth.signInWithPassword({
    email:payload.email,
    password:payload.password
  });
  setLoading(false);
  if (error){
    toast.error(error.message ,{theme:"colored"});
  } else if (data.user){
    setOpen(false);
    router.refresh();
    toast.success("Logged in Successfully!",{theme: "colored"});
  }
  };
  return (  
    <>
    <AlertDialog open={open}>
   <AlertDialogTrigger asChild>
   <li className='hover:bg-gray-200 rounded-md p-2 cursor-pointer' onClick={()=>setOpen(true)}>
    Login
    </li>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle asChild>
        <div className='flex justify-between items-center'>
          <span className='bg-brand rounded-full pl-2 pr-2 w-50'>Login</span>
          <X onClick={()=> setOpen(false)} className='cursor-pointer'/>
        </div>
      </AlertDialogTitle>
      <AlertDialogDescription asChild>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-lg font-bold">Welcome to Kanpur Realty</h1>
          <div className="mt-5">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Enter your email" id="email" type="email" {...register
              ("email")}/>
            <span className="text-red-400">{errors.email?.message}</span>
            </div>
            <div className="mt-5">
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Enter your password" type="password " id="password"
            {...register("password")}/>
            <span className="text-red-400">{errors.password?.message}</span>
            </div>
            <div className="mt-5">
              <Button className="bg-brand w-full" disabled={loading}>{loading ? 
                "Processing" :"Continue"}
                </Button>
            </div>
            <h1 className="text-center my-2 text-xl">--OR--</h1>
        </form>
        <SocialBtns />
        </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>

    </> 

  );
}
