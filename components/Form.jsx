"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Form = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          toast("Cám ơn bạn đã liên lạc với chúng tôi!");
          form.current.reset();
        },
        (error) => {
          toast(
            "Cám ơn bạn đã liên hệ nhưng hệ tại hệ thống đang lỗi vui lòng thử lại!",
          );
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className="relative flex items-center">
          <Input type="text" name="name" id="name" placeholder="Họ và Tên" />
          <User className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
          <Textarea
            placeholder="Gõ tin nhắn của bạn ở đây."
            id="body"
            name="body"
          />
          <MessageSquare className="absolute right-6 top-4" size={20} />
        </div>
        <Button
          className="flex max-w-[166px] items-center gap-x-1"
          value="Send"
          type="submit"
        >
          Gửi Ngay
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </div>
  );
};

export default Form;
