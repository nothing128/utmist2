import '@app/globals.css';
import { ReactNode } from 'react';
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { Providers } from '../providers';
import { FirebaseProvider } from '../firebase/firebase-provider';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <FirebaseProvider>
            <Navbar />
            {children}
            <Footer />
          </FirebaseProvider>
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'My App',
  description: 'Generated by create next app',
};