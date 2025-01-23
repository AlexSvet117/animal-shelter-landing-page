import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  const petsData = [
    {
      id: 1,
      titleName: "Telemakus",
      text: "A curious and cuddly tabby who loves lap snuggles and sunny windowsills.",
      longText: "Telemakus is a curious and affectionate tabby who will follow you around the house, always eager to be part of your day. He loves nothing more than curling up in a sunny window or on your lap for a cozy nap. Whiskers gets along well with other cats and would make a loving addition to any home.",
      src: "./src/images/cat-1.png"
    }, 
    {
      id: 2,
      titleName: "Didams",
      text: "A graceful cat with a calm demeanor and a soft purr.",
      longText: "Didams is a beauty with a calm nature, perfect for someone looking for a quiet companion. She enjoys pets and will reward you with her purrs as she relaxes by your side. She is happiest in a peaceful environment where she can bask in the sun or sit quietly with her favorite human.",
      src: "./src/images/cat-2.png"
    },
    {
      id: 3,
      titleName: "Sassy",
      text: "A playful kitten with endless energy and a love for feather toys.",
      longText: "Sassy is a bundle of energy who will keep you always entertained with her playful antics. She loves chasing feather toys, climbing tall trees, and exploring every nook and cranny. While she has a lively spirit, Sassy also enjoys curling up for cuddles after a day or two of fun.",
      src: "./src/images/cat-3.png"
    }, 
    {
      id: 4,
      titleName: "Max",
      text: "An energetic terrier who's always ready for fetch and long walks.",
      longText: "Max is a spirited terrier with a boundless zest for life and a knack for making you always laugh. He’s always ready for a game of fetch, a brisk walk, or a new adventure. While energetic, Max also enjoys snuggling up at the end of the day, making him the perfect mix of fun and affection. Best companion for single people.",
      src: "./src/images/dog-1.png"
    },
    {
      id: 5,
      titleName: "Hutch",
      text: "A loyal golden retriever who thrives on outdoor adventures and belly rubs.",
      longText: "Hutch is a golden retriever with a heart as big as his love for the outdoors. He thrives on long walks, hiking adventures, and endless games of fetch, making him the perfect companion for an active family. With his gentle demeanor and loyalty, he will quickly become your best friend.",
      src: "./src/images/dog-2.png"
    },
    {
      id: 6,
      titleName: "Marley",
      text: "A gentle Labrador mix who adores children and cozy evenings by the fire.",
      longText: "Marley is a sweet and playful Labrador mix who adores children and fits seamlessly into family life. She’s happiest lounging by your side after a day of playful backyard fun. Her gentle and loving personality makes her the ideal furry friend for a home full of love and laughter.",
      src: "./src/images/dog-3.png"
    }
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer>
        {petsData.map((pet) => (
          <Card 
            key={pet.id} 
            src={pet.src} 
            titleName={pet.titleName} 
            text={pet.text}
            longText={pet.longText}
          />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;