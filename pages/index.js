import Menu from '../components/menu'
import Layout from '../layouts/layout';

 function Beranda(){
  return (
    <Layout>
      <Menu />
      <link rel="stylesheet" href="/css/index.css" />
      <main>  
        <p>Selamat datang di web moto news, web yang berisi tentang informasi otomotif.</p>
        
      </main>
    </Layout>
  );
 }
 export default Beranda;