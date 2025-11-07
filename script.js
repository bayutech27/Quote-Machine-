// Referencing the ID and Class tags

let quoteText = document.querySelector('#quoteText');

let authorText = document.querySelector('#authorText');

const prev = document.querySelector('#prev');

const next = document.querySelector('#next');

let speaker = document.querySelector('#speaker');



// Creating ARRAY and OBJECT of quotes 


let quotation = [
    
    {    
    quote: "Do what you can, with what you have, where you are.",
    
    author: "Theodore Roosevelt"      
    },
    
  
  {
   quote: "When you cease to make contribution, you begin to die.",
   
   author: "Eleanor Roosevelt"
  },
  
  
  
  {
      quote: "Ninety-nine percent of failures come from people who have the habit of making excuses.",
      author: "George Washington"
  },
  
  
  {
     quote: "Progress is a tide. If we stand still, we will surely be drowned. To stay on crest, we have to keep moving.",
      
      author: "Harold Mayfield"
  },
  
  {
      quote: "You can impress people at a distance, but you can impact them only up close.", author: "Howard Hendricks"
  },
  
  {
      quote: "There is nothing either good or bad, but thinking makes it so.", author: "Shakespeare"
  },
  
  {
      quote: "Every person who has become successful has simply formed the bahit of doing this things that failures dislike doing and will not do.", author: "John C. Maxwell"
  },
  
  {
    quote: "Never let go of a dream until you\'re ready to wake up and make it happen.", author: "Anonymous"
      
  },
  
  {
      quote: "Practice doesn't make perfect - it makes permanent.", author: "John C. Maxwell"
  },
  
  
  
  {
      quote: "One-fifth of the people are against everything all the time.",
      
      author: "Robert Kennedy"
  },
  
  
  
  {
      quote: "Heart is what separates the good from the bad.", author: "Michael Jordan"
  },
  
  {
      quote: "Your attitude is either your best friend or your worst enemy, your greatest asset or your greatest liability.", author: "John C. Maxwell"
  },
  
  {
      quote: "Don\'t just learn something from every experience; learn something positive.", author: "Allen H. Neuharth"
  },
  
  {
      quote: "When you\'re through changing, you\'re through.", author: "Bruce Barton"
  },
  
  {
      quote: "It is not the mountain we conquer, but ourselves.", author: "Edmund Hillary"
  },
  
  {
      quote: "There are no shortcuts to anyplace worth going.", author: "Beverly Sills"
  },
  
  {
      quote: "One definition of insanity is to believe that you can keep doing what you\'ve been doing and get different results.", author: "Anonymous"
 },
 
 {
     quote: "I not only use all the brains I have, but all I can borrow.", author: "Woodrow Wilson"
 },
 
 {
     quote: "It Pays to plan ahead. It wasn\'t raining when Noah built the ark.", author: "Bayo Alabi"
 },
 
 {
     quote: "Ideas won\'t keep - something must be done about them.", author: "Alfred N. Whitehead"
 },
 
 {
     quote: "You\'ve got to get up every morning with determination if you\'re going to go to be with satisfaction.", author: "George H. Lorimer"
 },
  
  
  {
      quote: "The Best cure for a sluggish mind is to disturb its routine.", author: "William H. Danforth"
  },
  
  {
      quote: "He who is good at taking excuses is seldom hood for nothing.", author: "Benjamin Franklin"
  },
  
  {
      quote: "We first form habits, then habits form us.", author: "John C. Maxwell"
  },
  
  {
      quote: "In youth, we want to change the world. In old age, we want to change the youth.", author: "Garth Henrichs"
  },
  
  
  {
   quote: "Logic will get you from A to Z. Imagination will get you everywhere.",
   author: "Albert Einstein"
      
  },
  
  {
      quote: "Half of my life, I taught wealth was the prize. The other half has taught me wealth is only a tool.", author: "John D. Rockefeller"
  },
  
  {
      quote: "The richest soil uncultivated produces the rankeat weeds.", author: "Plutarch"
  },
  
  {
      quote: "If you\'re not doing something with your life, it doesn\'t matter how long it is.", author: "Peace Corps"
  },
  
  {
      quote: "Anytime the going seems easier, better check and see if you\'re not going downhill.", author: "Bayo Alabi"
  }
    
];




// Creating the Logic


let currentIndex = 0;



// Creating Speech function 
 
 
/* function speak(text) {
     const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // speed (0.1–10)
      utterance.pitch = 1;  // normal tone
      speechSynthesis.speak(utterance);
    };*/
    



// Logic for Next Quote

next.addEventListener('click', function(){
        
        currentIndex += 1;
          
     quoteText.textContent = quotation[currentIndex].quote;
    authorText.textContent = `- ${quotation[currentIndex].author}`;
    

  // speak(quoteText.textContent);
      
      });
    

// Logic for Prev Quote

 prev.addEventListener('click', function(){
     
     currentIndex -= 1;
     
      quoteText.textContent = quotation[currentIndex].quote;
    authorText.textContent = `-  ${quotation[currentIndex].author}`;
    
    
    if(currentIndex === 0) {
      
   quoteText.textContent = 'Your attitude is the eye of your soul. If your attitude is negative, then you see things negatively. If it\'s positive, then you see things positively';
  authorText.textContent = '- John C. Maxwell';
    
    };
//   speak(quoteText.textContent);
 
});
 
