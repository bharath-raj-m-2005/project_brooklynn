'use client';

import { useState } from 'react';

export default function Home() {
  const [showSecret, setShowSecret] = useState(false);
  const [isSmiling, setIsSmiling] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [smileClickCount, setSmileClickCount] = useState(0);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [currentEncouragement, setCurrentEncouragement] = useState('');
  const [loveLevel, setLoveLevel] = useState(85);
  const [dateVibe, setDateVibe] = useState('');
  const [showLoveMeterPopup, setShowLoveMeterPopup] = useState(false);
  const [loveMeterMessage, setLoveMeterMessage] = useState('');

  const encouragements = [
    "Ennaku theriyum baby ni sirichitu tha irukka nu ✨",
    "enna cusnat uh romba sandhoshama irukka pola💕",
    "Ni sirikum sirupil na sithaigirenadiiiiii💖",
    "enakku unkitta pudichathe un siripu tha baby🌸",
    "apdi tha sirichite iru😊",
    "kadavul padachathulaye urupadiyana rende padaipu onnu ni unnonum ni tha✨",
    "Fligh episode💕",
    "Kalkanduuuuuuu🌍💕",
    "Smile pweaseeeeeeeeeeeeeeeee🌟",
    "unakandi na enna vena pannuven!💖"
  ];

  const handleSmileClick = () => {
    const newCount = smileClickCount + 1;
    setSmileClickCount(newCount);
    setIsSmiling(true);
    
    // If there's already an encouragement showing, don't show another one
    if (showEncouragement) {
      return;
    }
    
    // Show random encouragement
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    setCurrentEncouragement(randomEncouragement);
    setShowEncouragement(true);
    
    // Hide encouragement after 4 seconds with fade out
    setTimeout(() => {
      setShowEncouragement(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-hidden live-romantic-overlay">
      {/* Floating Hearts Background - Fixed positions to avoid hydration errors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '10%', animationDelay: '0s', fontSize: '15px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '25%', animationDelay: '1s', fontSize: '20px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '40%', animationDelay: '2s', fontSize: '18px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '55%', animationDelay: '0.5s', fontSize: '22px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '70%', animationDelay: '1.5s', fontSize: '16px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '85%', animationDelay: '2.5s', fontSize: '19px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '15%', animationDelay: '3s', fontSize: '17px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '30%', animationDelay: '0.8s', fontSize: '21px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '45%', animationDelay: '1.8s', fontSize: '14px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '60%', animationDelay: '2.8s', fontSize: '23px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '75%', animationDelay: '3.5s', fontSize: '18px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '90%', animationDelay: '1.2s', fontSize: '16px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '5%', animationDelay: '2.2s', fontSize: '20px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '35%', animationDelay: '3.2s', fontSize: '15px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '50%', animationDelay: '0.3s', fontSize: '19px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '65%', animationDelay: '1.3s', fontSize: '22px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '80%', animationDelay: '2.3s', fontSize: '17px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '95%', animationDelay: '3.3s', fontSize: '21px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '20%', animationDelay: '0.6s', fontSize: '16px' }}>♡</div>
        <div className="heart-float absolute text-pink-300 opacity-20" style={{ left: '48%', animationDelay: '1.6s', fontSize: '24px' }}>♡</div>
      </div>

      {/* Cherry Blossom Petals - soft live background layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="cherry-blossom absolute opacity-70" style={{ left: '5%', top: '-5%', animationDelay: '0s' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '18%', top: '-10%', animationDelay: '3s', fontSize: '22px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '32%', top: '-8%', animationDelay: '6s', fontSize: '20px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '46%', top: '-12%', animationDelay: '1.8s', fontSize: '24px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '60%', top: '-6%', animationDelay: '4.2s', fontSize: '19px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '74%', top: '-9%', animationDelay: '7.1s', fontSize: '23px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-80" style={{ left: '88%', top: '-7%', animationDelay: '2.5s', fontSize: '21px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-70" style={{ left: '12%', top: '-4%', animationDelay: '5.3s', fontSize: '18px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-70" style={{ left: '38%', top: '-11%', animationDelay: '8s', fontSize: '20px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-70" style={{ left: '52%', top: '-3%', animationDelay: '9.5s', fontSize: '22px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-70" style={{ left: '67%', top: '-13%', animationDelay: '11s', fontSize: '19px' }}>🌸</div>
        <div className="cherry-blossom absolute opacity-70" style={{ left: '93%', top: '-2%', animationDelay: '13s', fontSize: '17px' }}>🌸</div>
      </div>

      {/* Sparkles - Fixed positions to avoid hydration errors */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="sparkle absolute" style={{ left: '12%', top: '15%', animationDelay: '0s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '28%', top: '25%', animationDelay: '0.5s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '44%', top: '35%', animationDelay: '1s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '60%', top: '45%', animationDelay: '1.5s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '76%', top: '55%', animationDelay: '2s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '18%', top: '65%', animationDelay: '2.5s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '34%', top: '75%', animationDelay: '0.3s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '50%', top: '85%', animationDelay: '0.8s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '66%', top: '20%', animationDelay: '1.3s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '82%', top: '30%', animationDelay: '1.8s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '8%', top: '40%', animationDelay: '2.3s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '24%', top: '50%', animationDelay: '0.6s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '40%', top: '60%', animationDelay: '1.1s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '56%', top: '70%', animationDelay: '1.6s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '72%', top: '80%', animationDelay: '2.1s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '88%', top: '10%', animationDelay: '2.6s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '14%', top: '90%', animationDelay: '0.4s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '30%', top: '18%', animationDelay: '0.9s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '46%', top: '28%', animationDelay: '1.4s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '62%', top: '38%', animationDelay: '1.9s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '78%', top: '48%', animationDelay: '2.4s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '6%', top: '58%', animationDelay: '0.2s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '22%', top: '68%', animationDelay: '0.7s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '38%', top: '78%', animationDelay: '1.2s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '54%', top: '88%', animationDelay: '1.7s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '70%', top: '12%', animationDelay: '2.2s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '86%', top: '22%', animationDelay: '2.7s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '16%', top: '32%', animationDelay: '0.1s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '32%', top: '42%', animationDelay: '0.5s' }}>✨</div>
        <div className="sparkle absolute" style={{ left: '48%', top: '52%', animationDelay: '1s' }}>✨</div>
      </div>

      <div className="relative z-10 flex justify-center items-start min-h-screen px-8 py-16">
        <div className="romantic-container">
        {/* Header */}
        <header className="text-center mb-24 fade-in content-center">
          <div className="heart-decoration">
            <h1 className="font-dancing text-8xl text-pink-600 mb-8 drop-shadow-lg heading-readable">
              For My Dearest Cusnat
            </h1>
          </div>
          <p className="text-pink-400 text-2xl font-light tracking-wide text-readable mb-10">
            A Digital Love Letter 💌
          </p>
          <div className="flex justify-center gap-4">
            <span className="text-5xl animate-bounce">💖</span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌸</span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
          </div>
        </header>

        {/* Opening Love Note */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.1s' }}>
          <div className="romantic-card card-spacing heart-decoration">
            <p className="text-pink-900 text-2xl leading-relaxed text-center font-light text-readable">
              Cusnatuh .... will you be my valentine? ...lam romba palaya trenduh
              na namma style la ..athavathu en style la nerdy ah etho ennala panna mudinjathu
              hehehe.... 💕
            </p>
          </div>
        </section>

        {/* The Anklet Section */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.2s' }}>
          <div className="love-gradient-card card-spacing heart-decoration">
            <h2 className="font-dancing text-6xl text-pink-700 mb-10 text-center heading-readable">
              The Hip chain You Wear 🌸
            </h2>
            <p className="text-pink-900 text-2xl leading-loose text-center font-light text-readable">
              Eventhough i havent seen your hipchain that much ..thats the most 
              attractive part of you....and like bro how a person can look so good in a simple hipchain..
              <em className="font-dancing text-3xl text-pink-600">  Cusnatuh ...</em>. Feminine, elegant, 
              effortlessly beautiful. Every time I notice them, my heart skips a beat. 
              You make even the smallest things feel like poetry. 💫..and the way you 
              wear it...its just so perfect...💕
            </p>
          </div>
        </section>

        {/* What I Love About You */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-dancing text-7xl text-pink-600 mb-16 text-center heading-readable">
            The Things you Adore About Me 💗
          </h2>
          <h1>
            <br/>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-10 grid-enhanced max-w-5xl mx-auto">
            {/* Brown Eyes */}
            <div className="romantic-card grid-item-enhanced hover:scale-105 transition-all duration-400 content-center">
              <div className="text-6xl mb-8"></div>
              <h3 className="font-dancing text-4xl text-pink-700 mb-6 heading-readable">Brown Eyes</h3>
              <p className="text-pink-900 font-light leading-relaxed text-readable">
                You tell me you love my brown eyes, and every time you say it, I feel like "oruvela namma kannu alagatha irukku pola". 
                The way you look into them, like you're reading my soul,The brown eyes are nothing but a form of you yourself in me.
              </p>
            </div>

            {/* Biceps & Strength */}
            <div className="romantic-card grid-item-enhanced hover:scale-105 transition-all duration-400 content-center">
              <div className="text-6xl mb-8"></div>
              <h3 className="font-dancing text-4xl text-pink-700 mb-6 heading-readable">Strength</h3>
              <p className="text-pink-900 font-light leading-relaxed text-readable">
                I know you know im strong but yet you have that one small trust issue everytime 
                i try to lift you in front of stairsbut just know this thing - i can lift you 
                without any hesitation...and i will lift you without any hesitation...and i will lift you 
                without any hesitation...and i will lift you without any hesitation. 
              </p>
            </div>

            {/* Height */}
            <div className="romantic-card grid-item-enhanced hover:scale-105 transition-all duration-400 content-center">
              <div className="text-6xl mb-8"></div>
              <h3 className="font-dancing text-4xl text-pink-700 mb-6 heading-readable">Height</h3>
              <p className="text-pink-900 font-light leading-relaxed text-readable">
                The best fuckin height difference to ever exist is us baby... Like whenever we try to hug you 
                perfectly get your head on my heart so no shit sherlock we are perfectttt.....!!!!
              </p>
            </div>

            {/* Lifting Her */}
            <div className="romantic-card grid-item-enhanced hover:scale-105 transition-all duration-400 content-center">
              <div className="text-6xl mb-8"></div>
              <h3 className="font-dancing text-4xl text-pink-700 mb-6 heading-readable">Bicepsssssss</h3>
              <p className="text-pink-900 font-light leading-relaxed text-readable">
                The way you adore my body , Especially my bicepss it is the perfect part of my day
                so you better keep the streak on for the eternity bitch..
              </p>
            </div>
          </div>
        </section>

        {/* Little Love Meter Game */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.35s' }}>
          <div className="romantic-card card-spacing max-w-3xl mx-auto heart-decoration">
            <h2 className="font-dancing text-6xl text-pink-700 mb-8 text-center heading-readable">
              Love Meterrr !!!!
            </h2>
            <p className="text-pink-900 text-readable mb-8">
              Slide this to set how much you think I love you.
            </p>

            <div className="w-full space-y-6 relative z-10">
              <input
                type="range"
                min={70}
                max={120}
                value={loveLevel}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10);
                  setLoveLevel(newValue);
                }}
                onMouseUp={(e) => {
                  const newValue = parseInt((e.target as HTMLInputElement).value, 10);
                  
                  // Show popup when slider reaches end (110 or above)
                  if (newValue >= 110) {
                    setLoveMeterMessage("Ahh yes you guessed it right 💖");
                    setShowLoveMeterPopup(true);
                    setTimeout(() => {
                      setShowLoveMeterPopup(false);
                    }, 4000);
                  } else {
                    // Show popup for any other value
                    setLoveMeterMessage("No baby you are underestimating the love I have 💕");
                    setShowLoveMeterPopup(true);
                    setTimeout(() => {
                      setShowLoveMeterPopup(false);
                    }, 4000);
                  }
                }}
                onTouchEnd={(e) => {
                  const newValue = parseInt((e.target as HTMLInputElement).value, 10);
                  
                  // Show popup when slider reaches end (110 or above)
                  if (newValue >= 110) {
                    setLoveMeterMessage("Ahh yes you guessed it right 💖");
                    setShowLoveMeterPopup(true);
                    setTimeout(() => {
                      setShowLoveMeterPopup(false);
                    }, 4000);
                  } else {
                    // Show popup for any other value
                    setLoveMeterMessage("No baby you are underestimating the love I have 💕");
                    setShowLoveMeterPopup(true);
                    setTimeout(() => {
                      setShowLoveMeterPopup(false);
                    }, 4000);
                  }
                }}
                style={{
                  width: '100%',
                  height: '10px',
                  cursor: 'pointer',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  background: 'linear-gradient(to right, rgba(236, 72, 153, 0.4), rgba(244, 114, 182, 0.4))',
                  outline: 'none',
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto',
                  borderRadius: '5px',
                  border: '1px solid rgba(236, 72, 153, 0.2)'
                }}
                className="love-meter-slider"
              />

              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">
                  {'💖'.repeat(Math.min(6, Math.max(1, Math.round((loveLevel - 60) / 10))))}
                </div>
                <p className="text-pink-900 text-lg font-medium text-readable text-center">
                  {loveLevel < 85 && 'Way more than this slider can show.'}
                  {loveLevel >= 85 && loveLevel < 100 && 'More than yesterday, less than tomorrow.'}
                  {loveLevel >= 100 && 'Off the charts. Overwhelming. Forever kind of love.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Love Meter Popup */}
        {showLoveMeterPopup && (
          <div className="fixed inset-0 z-50 encouragement-overlay">
            <div className="romantic-card encouragement-card animate-bounce-in">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-5xl mb-1">
                  <span className="animate-bounce">💖</span>{' '}
                  <span className="animate-pulse">🌸</span>
                </div>
                <p className="text-pink-900 text-xl font-medium leading-relaxed text-readable">
                  {loveMeterMessage}
                </p>
                <button
                  type="button"
                  className="btn-rounded mt-4 px-6 py-2 text-sm"
                  onClick={() => setShowLoveMeterPopup(false)}
                >
                  Aww, okay 🥺 Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sandwich Love Language */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.4s' }}>
          <div className="sandwich-card card-spacing heart-decoration">
            <h2 className="font-dancing text-6xl text-pink-700 mb-12 text-center flex items-center justify-center gap-6 heading-readable">
              <span></span> Our Sandwich Moments <span></span>
            </h2>
            <p className="text-pink-900 text-2xl leading-loose text-center font-light text-readable">
              Neriye per avanga love ah different different ah solluvanga
              but na (nerdy bitch) will express my love with food and Especially  <em className="font-dancing text-3xl text-pink-600">
                SANDWICHHHHH  "</em> It's simple, it's silly, but it's <strong>us</strong>. 
              Sitting together, eating something I made just for you, watching you smile with 
              every bite — that's my kind of romance. You deserve all the homemade sandwiches 
              in the world, and so much more.
            </p>
          </div>
        </section>

        {/* Songs That Feel Like Us */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-dancing text-7xl text-pink-600 mb-16 text-center heading-readable">
          Songs That Feel Like Us
          </h2>
          <h1>
            <br></br>
          </h1>
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="romantic-card card-spacing heart-decoration">
              <h3 className="text-3xl text-pink-700 font-semibold mb-6 heading-readable">The Weeknd</h3>
              <p className="text-pink-900 font-light italic text-readable">
                <br>
                </br>
                Offcourse thalaivar tha nammala sethu vecharu so no cap he is da goat for us.
              </p>
              <div className="mt-6 text-left">
                <br></br>
                <h4 className="text-pink-700 text-lg font-semibold mb-2 heading-readable">
                  Out of Time – The Weeknd
                </h4>
                <br></br>
                {/* TODO: Copy out_of_time.mp3 to public/music/ folder */}
                <audio
                  controls
                  className="w-full mt-1"
                  src="/music/out_of_time.mp3"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            <div className="romantic-card card-spacing heart-decoration">
              <h3 className="text-3xl text-pink-700 font-semibold mb-6 heading-readable">Doja cat</h3>
              <p className="text-pink-900 font-light italic text-readable">
              <br></br>
                The song which we both own after a longgggg fightttt at our initial stages were by doja cat.
              </p>
              <br></br>
              <div className="mt-6 text-left">
                <h4 className="text-pink-700 text-lg font-semibold mb-2 heading-readable">
                  You Right - Doja Cat
                </h4>
                <br></br>
                {/* TODO: Copy you_right.mp3 to public/music/ folder */}
                <audio
                  controls
                  className="w-full mt-1"
                  src="/music/you_right.mp3"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            

            <div className="romantic-card card-spacing heart-decoration">
              <h3 className="text-3xl text-pink-700 font-semibold mb-6 heading-readable">The kdot - szaaa</h3>
              <p className="text-pink-900 font-light italic text-readable">
              <br></br>
                This particular song did something to us right?......
              </p>
              <br></br>
              <div className="mt-6 text-left">
                <h4 className="text-pink-700 text-lg font-semibold mb-2 heading-readable">
                  Luther - Kendrick Lamar
                </h4>
                <br></br>
                {/* TODO: Copy luther.mp3 to public/music/ folder */}
                <audio
                  controls
                  className="w-full mt-1"
                  src="/music/luther.mp3"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </section>

        {/* Our Picture Frame */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.52s' }}>
          <div className="romantic-card card-spacing max-w-4xl mx-auto heart-decoration">
            <h2 className="font-dancing text-6xl text-pink-700 mb-10 text-center heading-readable">
              One Picture, A Thousand Feelings 
            </h2>
            <br></br>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="photo-frame w-full md:w-1/2">
                {/* TODO: replace src with our real picture path */}
                <img
                  src="/music/picture1.jpeg"
                  alt="Us together"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-pink-900 text-readable md:w-1/2">
                This the photo we took in the Light "House" is something which is very
                special for us so im keeping this sorry framing this picture up here baby.
              </p>
            </div>
          </div>
        </section>

        {/* Polaroid Memories Section */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.55s' }}>
          <h2 className="font-dancing text-7xl text-pink-600 mb-16 text-center heading-readable">
            Little Moments , Big Feelings 
          </h2>
          <br></br>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="romantic-card polaroid-card">
              <div className="text-6xl mb-6 float-animation">🥪</div>
              <p className="text-pink-900 text-readable">
              <br></br>
                You, in one of my T-shirts, sitting cross-legged while I hand you a sandwich I just made.
                You take the first bite, look up at me, and smile that soft little thank-you smile.
              </p>
              <div className="polaroid-tag">MY HANDMADE SANDWICH</div>
            </div>

            <div className="romantic-card polaroid-card">
              <div className="text-6xl mb-6 float-animation">🌙</div>
              <p className="text-pink-900 text-readable">
              <br></br>
                Late-night calls on Discord where we used to watch anime and movies
                and sometime productively study and editing a word document blah blah blahhhh.
              </p>
              <div className="polaroid-tag">DISCORD VAA</div>
            </div>

            <div className="romantic-card polaroid-card">
              <div className="text-6xl mb-6 float-animation">🤍</div>
              <p className="text-pink-900 text-readable"><br></br>
                You know the moment you say i love your eyes and biceps I just feel like the fucking Body builder
                and we are just the best pair around (its true btw).
              </p>
              <div className="polaroid-tag">GYM RATTT</div>
            </div>
          </div>
        </section>

        {/* This or That – Date Night Edition */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.575s' }}>
          <div className="romantic-card card-spacing max-w-4xl mx-auto">
            <h2 className="font-dancing text-6xl text-pink-700 mb-10 text-center heading-readable">
              This or That: Us Edition 💑
            </h2>
            <br></br>
            <p className="text-pink-900 text-readable mb-8 text-center">
              Choose the kind of date that feels the most &quot;us&quot; right now.
            </p>
            <br></br>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => setDateVibe('cozy')}
                className={`choice-pill ${dateVibe === 'cozy' ? 'choice-pill-active' : ''}`}
              >
                Discord night + a lot of freakiness
              </button>
              <button
                type="button"
                onClick={() => setDateVibe('adventure')}
                className={`choice-pill ${dateVibe === 'adventure' ? 'choice-pill-active' : ''}`}
              >
                Cute little talk on that park in that bench
              </button>
              <button
                type="button"
                onClick={() => setDateVibe('chill')}
                className={`choice-pill ${dateVibe === 'chill' ? 'choice-pill-active' : ''}`}
              >
                Sight seeing in college
              </button>
            </div>

            <div className="text-center text-pink-900 text-readable min-h-[3rem]">
              {!dateVibe && (
                <p>Pick one and I&apos;ll tell you what I picture for us. 💭</p>
              )}
              {dateVibe === 'cozy' && (
                <p>
                  You in my T-shirt and me naked. An anime and a lot of love we share 
                  the things we speak in between and you being a diva in the night light toooo
                </p>
              )}
              {dateVibe === 'adventure' && (
                <p>
                  Us siting in that particular bench and talking a lot and you randomly looking into my Eyes
                  and me lookin into your lips to find a chance to kiss and AHHHGGGGGGGG!!!!
                </p>
              )}
              {dateVibe === 'chill' && (
                <p>
                  Eventhough it is a short period of time we share a lot of things in that span of time.
                  Morning block vasal la, Brunch break la  ,  veetuku pogumbothu roadla.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-10">
            <button
              onClick={handleSmileClick}
              className="btn-rounded relative"
            >
              {isSmiling ? "I knew you'd smile 😊💕" : "Click if you're smiling"}
              {smileClickCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                  {smileClickCount}
                </span>
              )}
            </button>

            {/* Encouragement Bubble */}
            {showEncouragement && (
              <div className="fixed inset-0 z-50 encouragement-overlay">
                <div className="romantic-card encouragement-card animate-bounce-in">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="text-5xl mb-1">
                      <span className="animate-bounce">💕</span>{' '}
                      <span className="animate-pulse">🌸</span>
                    </div>
                    <p className="text-pink-900 text-xl font-medium leading-relaxed text-readable">
                      {currentEncouragement}
                    </p>
                    <div className="mt-1 text-sm text-pink-500">
                      {/* You&apos;ve made me smile {smileClickCount} {smileClickCount === 1 ? 'time' : 'times'} already. */}
                    </div>
                    <button
                      type="button"
                      className="btn-rounded mt-4 px-6 py-2 text-sm"
                      onClick={() => setShowEncouragement(false)}
                    >
                      Aww, okay 🥺 Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowSecret(!showSecret)}
              className="btn-rounded"
              style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(236, 72, 153, 0.9))' }}
            >
              A Secret Message for Cusnat 💌
            </button>

            {showSecret && (
              <div className="romantic-card card-spacing max-w-4xl fade-in heart-decoration">
                <p className="text-pink-900 text-2xl leading-relaxed text-center font-light text-readable">
                  Cusnat, if you're reading this, I want you to know: you're not just my girlfriend. 
                  You're my safe place, my comfort, my home. Every day with you feels like a gift 
                  I don't deserve but will cherish forever. I adore everything about you 
                  your laugh, your dreams, your kindness, the way you make the ordinary feel magical. 
                  <span className="block mt-8 font-dancing text-4xl text-pink-600">
                  <br></br>
                    You are so deeply loved babyy!!!. 💖
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Fan-Fic Story Section */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.7s' }}>
          <div className="story-card card-spacing heart-decoration">
            <h2 className="font-dancing text-6xl text-purple-700 mb-12 text-center heading-readable">
              A Story Written Just for You
            </h2><br></br>
            
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setShowStory(!showStory)}
                className="btn-rounded"
                style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(147, 51, 234, 0.9))' }}
              >
                {showStory ? "Close the Story" : "Read Our Story 💕"}
              </button>
            </div>
            <br></br>

            {showStory && (
              <div className="romantic-card card-spacing fade-in">
                <div className="text-pink-900 leading-loose font-light space-y-8 text-readable">
                  <p className="italic text-center text-pink-600 mb-10 text-2xl">
                    The Women who spawned.
                  </p>
                  <br></br>
                  <p>
                    Like bro who would've thought i will pull a 10 on 10 baddie by a 
                    random ass testcase bruh?. And i dont even remember the testcase tbh
                    but the things it did is humungus and unimaginable.
                  </p>
                  
                  <p>
                    I remember the first time I tried to see you. You texted me that you was at the end off
                    the class like the corner. I stood up and tried to see you but you 
                    were deep inside your teritory so i just left.
                  </p>
                  
                  <p>
                    I have always dreamed about a women comming into my life who can basically
                    understand me and match my freak and laugh to all my unfunny jokes(kalkandu)
                    and a lot actually 
                  </p>
                  
                  <p>
                    The first time I lifted you I was actually scared whether you will accept it
                    or not and then i somehow managed to lift you . And the first kiss? man i 
                    was dying inside what would happen and all but it ended up so good actually.
                  </p>
                  
                  <p>
                    I was waiting about 20 years of my life to see her -  the girl of my life and like
                    tried to search in some and got a lot of trauma and a lot happend actually in the past
                    and then also i was searching for the missing piece of my life and at some point of time i 
                    decided that i wwill never find someone who would matc all my needs..
                  </p>
                  <br></br>
                  <p className="font-dancing text-4xl text-pink-600 text-center mt-12">
                    And then .. She came ... With a lot of love which is like a leg piece in kuska
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        

        {/* Final Love Declaration */}
        <section className="mb-32 slide-up section-spacing content-center" style={{ animationDelay: '0.8s' }}>
          <div className="love-gradient-card card-spacing text-center heart-decoration">
            <h2 className="font-dancing text-7xl text-pink-700 mb-12 heading-readable">
              Cusnatuhhh...
            </h2>
            <br></br>
            <div className="text-pink-900 text-2xl leading-loose font-light space-y-10 max-w-4xl mx-auto text-readable">
              <p>
                Im creating this website while you are sleeping in the call
                scolding yourself for that simple portfolio failure.. just know this shit
                I'll be there for you all the time. All you need to do is just call me..
              </p>
              
              <p>
                You are <strong>loved</strong> beyond measure.
                <br />
                You are <strong>cherished</strong> in ways I'm still learning to express.
                <br />
                You are <strong>admired</strong> for the incredible person you are.
                <br />
                You are <strong>safe</strong> with me, always.
              </p>
              <br></br>
              <p className="font-dancing text-5xl text-pink-600 mt-12">
                Happy Valentine's Day, my beautiful Cusnat. 💖
              </p>
              <br></br>
              <p className="text-xl">
                Forever yours,
                <br />
                <span className="font-dancing text-4xl text-pink-700">
                  Your Love
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-pink-400 text-xl py-16">
          <p>Made with endless love 💕 February 2026</p>
        </footer>
      </div>
    </div>
  </div>
  );
}