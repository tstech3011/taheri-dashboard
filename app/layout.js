import Mainlayout from '@/components/MainLayout';
import './globals.css';
import MenuContextProvider from '@/context/MenuContext';

export const metadata = {
  title: 'Dashboard',
  description: 'Just an app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='' suppressHydrationWarning={true}>
        <MenuContextProvider>
          <Mainlayout>{children}</Mainlayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
