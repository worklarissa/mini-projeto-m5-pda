import Header from "./components/Header/Header.jsx";
import '../public/css/style.css';




export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
 );
}