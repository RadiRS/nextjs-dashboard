import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        This will make the fonts to apply into entire application
        In additional add antialiased class from tailwind to smooth the fonts
      */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
