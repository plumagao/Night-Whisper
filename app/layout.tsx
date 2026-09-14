import type { Metadata } from "next";
import "./globals.css";
import "./photos.css";
import "./brand.css";
import "./mobile-fix.css";

export const metadata: Metadata = {
  title: "Night Whisper 夜语星趴 呈阳 2026",
  description:
    "Night Whisper 夜语星趴 呈阳 2026 · 星空呈阳露营基地 · 安徽黄山 · 三个候选周末将根据观星天气确定最终日期",
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
