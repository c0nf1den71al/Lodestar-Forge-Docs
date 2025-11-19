"use client";
import { ComponentProps } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import NextImage from "next/image";
import { useTheme } from "next-themes";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

export default function Image({
    src,
    alt = "alt",
    width = 800,
    height = 350,
    ...props
}: ComponentProps<"img">) {
    if (!src) return null;
    const { theme, systemTheme } = useTheme();

    if (!src.endsWith(".png") && !src.endsWith(".jpg")) {
        src = `${src}-${theme === "system" ? systemTheme : theme}.png`;
    }

    if (!theme)
        return (
            <Skeleton
                suppressHydrationWarning
                className="h-[300px] w-full rounded-md"
            />
        );
    else
        return (
            <NextImage
                suppressHydrationWarning
                src={src}
                alt={alt}
                width={width as Width}
                height={height as Height}
                quality={40}
                {...props}
            />
        );
}
