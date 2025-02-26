import Link from "next/link";
import React from "react";

interface BlogHeaderProps {
  title: string;
}

export default function BlogHeader({ title }: BlogHeaderProps) {
  return (
    <div>
      <h2 className="font-semibold text-lg">{title}</h2>
      <Link href="/" className="cursor-pointer">
        <h3 className="text-base mt-1 font-medium text-gray-400">
          Victor Requena
        </h3>
      </Link>
    </div>
  );
}
