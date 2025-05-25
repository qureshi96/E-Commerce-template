
import React from 'react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6 transition-colors">About Inqalab</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
            Revolution through simplicity. We believe in creating clothing that transcends trends 
            and embraces the essence of modern minimalism.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 transition-colors">Our Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors">
              Inqalab, meaning "revolution" in Urdu, represents our commitment to revolutionizing 
              the fashion industry through conscious design choices. We create pieces that honor 
              both the wearer and the environment, proving that sustainability and style can 
              coexist beautifully.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Every garment is thoughtfully designed with clean lines, premium materials, and 
              timeless silhouettes that form the foundation of a conscious wardrobe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 transition-colors">Sustainability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white transition-colors">Ethical Materials</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                  We source only the finest organic cotton, linen, and eco-friendly fabrics 
                  from suppliers who share our commitment to environmental responsibility.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white transition-colors">Fair Production</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                  Our manufacturing partners maintain the highest standards of fair labor 
                  practices, ensuring every piece is made with care and respect.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white transition-colors">Zero Waste</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                  We minimize waste through precise pattern making and repurpose fabric 
                  remnants into accessories and limited edition pieces.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white transition-colors">Carbon Neutral</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                  All shipping is carbon neutral, and we offset our production footprint 
                  through verified environmental projects.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 transition-colors">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Founded by a collective of designers, artists, and sustainability advocates, 
              Inqalab brings together diverse perspectives united by a shared vision of 
              responsible fashion. Our team combines decades of experience in luxury fashion 
              with a deep commitment to social and environmental justice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
