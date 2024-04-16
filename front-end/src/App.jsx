import Header from "./components/Header/Header";
import '../../public/css/style.css';
import Footer from "./footer/footer";



export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
 );
}