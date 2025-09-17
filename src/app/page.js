import Image from "next/image";
import Topbar from "./topbar";
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils";
import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left">
          Hi there! <br></br>How can I help you today?
        </h1>
        <Textarea />
      </main>
    </div>
  );
}
