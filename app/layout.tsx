import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Holiday Ranakpur | A Stay Close to Nature', description: 'Discover a slower, more soulful escape in Ranakpur, Rajasthan.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
