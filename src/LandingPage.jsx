import React from 'react';
import logo from '../src/assets/logo.png';
import hero_img from '../src/assets/hero_img.webp';
import main_img from '../src/assets/main_img.webp';
import coach from '../src/assets/coach.jpeg';
import webinar1 from '../src/assets/webinar1.jpeg';

function LandingPage() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-yellow-400 text-gold py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <img src={logo} alt="Sasha Dubois Wellness Coach Logo" className="h-10" />
          </div>
          <ul className="hidden md:flex space-x-6 text-lg">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#details" className="hover:underline">Details</a></li>
            <li><a href="#coach" className="hover:underline">Coach</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#cta" className="hover:underline">Sign Up</a></li>
          </ul>
          <button className="md:hidden text-2xl text-gold focus:outline-none">
            &#9776;
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <header id="home" className="bg-yellow-400 text-white text-center py-10 px-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold leading-tight">
              Sasha Dubois Wellness Coach
            </h1>
            <p className="text-lg mt-4 mb-5">
              Transform your wellness journey with personalized, expert coaching designed to help you achieve lasting vitality and balance. Through proven strategies and a holistic approach, you'll discover how to nurture your body, mind, and spirit in harmony.
            </p>
            <button className="mt-6 mb-5 bg-gray-800 hover:bg-yellow-200 hover:text-black py-2 px-6 rounded-lg font-bold text-lg">
              Reserve My Free Spot Now!
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={hero_img} alt="Wellness Hero" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-5 py-10 space-y-8">
        {/* Webinar Details */}
<section id="details" className="bg-white shadow-lg rounded-lg p-6 md:p-12">
  <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0">
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-black mb-4">
        Specially designed for individuals who:
      </h2>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>Feel drained and overwhelmed by daily stress.</li>
        <li>Want to feel confident, healthy, and revitalized from the inside out.</li>
        <li>Struggle with achieving balance and consistency in their wellness journey.</li>
      </ul>
      <div className="mt-6 space-y-4">
        <p className="font-semibold">
          Date: <span className="text-gold">Wednesday, 17th January 2025</span>
        </p>
        <p className="font-semibold">
          Time: <span className="text-gold">7 PM WAT Prompt</span>
        </p>
      </div>
      <button className="mt-6 bg-yellow-400 hover:bg-yellow-200 hover:text-black py-3 px-6 rounded-md font-bold text-lg transition-all duration-300">
        Reserve My Free Spot Now!
      </button>
    </div>
    
    {/* Image Section */}
    <div className="md:w-1/2">
      <img src={webinar1} alt="Webinar Details" className="rounded-lg shadow-lg w-full object-cover h-full" />
    </div>
  </div>
</section>


        {/* Coach Introduction */}
        <section id="coach" className="bg-black text-white rounded-lg p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={coach}
            alt="Sasha Dubois"
            className="w-48 h-48 rounded-full border-4 border-gold shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gold">Meet Your Coach</h2>
            <p className="mt-4">
              Busayo Babalola is a renowned holistic wellness coach with a passion for empowering individuals to live vibrant, balanced lives. With years of experience and a deep understanding of natural wellness practices, Busayo has helped countless people reclaim their energy, enhance their confidence, and achieve lasting health. Her approach focuses on aligning mind, body, and spirit, utilizing personalized strategies that are simple, sustainable, and highly effective. Whether you're struggling with stress, fatigue, or a lack of self-care, Busayo is here to guide you on a transformative journey to glowing health and happiness.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-black">At the life-changing webinar, you’ll discover:</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>How to detox and reset your body for optimal health.</li>
            <li>Easy steps to maintain glowing skin, vibrant energy, and inner peace.</li>
            <li>The secret to creating a sustainable wellness routine tailored to your lifestyle.</li>
          </ul>
        </section>

       {/* Testimonials */}
       <section id="testimonials" className="bg-yellow-400 text-white shadow-lg rounded-lg p-8 md:p-12">
  <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
    What people are saying:
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Testimonial 1 */}
    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full sm:w-80 md:w-96">
      <blockquote className="italic border-l-4 border-yellow-400 pl-4 mb-4">
        "I never knew wellness could be this simple! My energy is back, my skin glows, and I feel amazing. Thank you for helping me transform my health!"
      </blockquote>
      <p className="font-semibold text-yellow-400">- Amina Balogun</p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full sm:w-80 md:w-96">
      <blockquote className="italic border-l-4 border-yellow-400 pl-4 mb-4">
        "The wellness program has been a game-changer! I’ve never felt more in control of my health, and I’m so grateful for this journey."
      </blockquote>
      <p className="font-semibold text-yellow-400">- Chinedu Okafor</p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full sm:w-80 md:w-96">
      <blockquote className="italic border-l-4 border-yellow-400 pl-4 mb-4">
        "From feeling drained and stressed to energized and balanced, this program has truly helped me turn my life around. Highly recommend!"
      </blockquote>
      <p className="font-semibold text-yellow-400">- Sarah Johnson</p>
    </div>
  </div>
</section>



        {/* Final CTA */}
        <section id="cta" className="text-center bg-black text-white py-10 rounded-lg">
          <h2 className="text-3xl font-bold text-gold">Ready to prioritize your wellness?</h2>
          <p className="mt-4 text-lg">
            If you’re ready to make 2025 your best year yet, don’t miss this opportunity to take control of your health and happiness.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-200 hover:text-white py-3 px-6 rounded-md font-bold text-lg">
            Reserve My Free Spot Now!
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 text-center py-6">
        <p>&copy; 2025 Sasha Dubois Wellness Coach. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
