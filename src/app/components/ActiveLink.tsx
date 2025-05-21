"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  activeColor?: string;
  inactiveColor?: string;
}

export default function ActiveLink({
  href,
  children,
  className,
  style,
  activeColor = "#821880",
  inactiveColor = "#000000",
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={className}
      style={{
        ...style,
        color: isActive ? activeColor : inactiveColor,
      }}
    >
      {children}
    </Link>
  );
}