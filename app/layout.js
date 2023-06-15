import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Just an app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}
