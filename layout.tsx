import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Whisper 星空聚会 2026",
  description:
    "Night Whisper 星空聚会 2026 / Night Whisper Star Party 2026 · 2026.11.06–11.08 · 红柯窑 · 安徽黄山 / Hongkeyao · Huangshan, Anhui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
