
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6 transition-colors">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              
              <Button className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">Contact Information</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 transition-colors">
                <p>Email: hello@inqalabclothing.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Fashion District, New York, NY 10001</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">Business Hours</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm transition-colors">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">Customer Service</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                Our customer service team is here to help with any questions about orders, 
                sizing, returns, or general inquiries. We typically respond within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
