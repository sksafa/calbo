import logo from './logo.svg';

import Card from './component/Card/Card';
import Testimonial from './component/Testimonial/Testimonial';
import Feature from './component/Feature/Feature';
import Footer from './component/Footer/Footer';
import PatientOpenion from './component/PatientOpenion/PatientOpenion';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Card></Card>
      <Testimonial></Testimonial>
      <Feature></Feature>
      <PatientOpenion></PatientOpenion>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
