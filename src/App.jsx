import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  const descriptions = [
    "This is the description of the card",
    "This is the description of the card 2",
    "This is the description of the card 3",
    "This is the description of the card 4",
    "This is the description of the card 5",
    "This is the description of the card 6"
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer>
        <Card titleName="Telemakus" text={descriptions[1]} src="./src/images/cat-1.png"/>
        <Card titleName="Didams" text={descriptions[2]} src="./src/images/cat-2.png"/>
        <Card titleName="Sassy" text={descriptions[2]} src="./src/images/cat-3.png"/>
        <Card titleName="Bronco" text={descriptions[1]} src="./src/images/dog-1.png"/>
        <Card titleName="Hutch" text={descriptions[2]} src="./src/images/dog-2.png"/>
        <Card titleName="Marley" text={descriptions[2]} src="./src/images/dog-3.png"/>

      </CardContainer>
      
      <Footer />
    </>
  );
}

export default App;