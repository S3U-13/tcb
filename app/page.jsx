"use client";
import { Input } from "@heroui/input";
import { Button, ButtonGroup } from "@heroui/button";
import { useState } from "react";
import { Eye, EyeOff } from "@deemlol/next-icons";
import { Link } from "@heroui/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="space-y-4 border border-divider p-4 rounded-xl w-[400px]">
        <h1>login</h1>
        <Input
          label="User name"
          size="sm"
          color="default"
          variant="underlined"
          type="text"
        />
        <Input
          label="Password"
          size="sm"
          color="default"
          variant="underlined"
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              aria-label="toggle password visibility"
              type="button"
              className="focus:outline-none"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff className="text-2xl text-[#404040]" />
              ) : (
                <Eye className="text-2xl text-[#404040]" />
              )}
            </button>
          }
        />
        <Button color="primary" as={Link} href="/user/tcb/dashboard">
          Login
        </Button>
      </div>
    </section>
  );
}
