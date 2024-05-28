import React, { useState } from 'react';

function ContactForm() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 ">
          <h2 className="text-[30px] text-center font-medium text-primary mt-5">
            Bize Ulaşın
          </h2>
        </div>
        <div className="col-span-12">
          <div className="flex items-center justify-center gap-10 mt-5">
            <button
              className={`text-center hover:opacity-70 capitalize pb-2 ${
                activeTab === 1 ? 'border-b-2 border-primary' : ''
              }`}
              onClick={() => handleTabClick(1)}
            >
              Problem / Soru
            </button>
            <button
              className={`text-center hover:opacity-70 capitalize pb-2 ${
                activeTab === 2 ? 'border-b-2 border-primary' : ''
              }`}
              onClick={() => handleTabClick(2)}
            >
              Önerim Var
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
        {activeTab === 1 && (
          <div className="col-span-10 md:col-span-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Ad Soyad <span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-Posta Adresiniz <span className="text-[red]">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon Numaranız *
                </label>
                <div className="flex">
                  <select className="block w-1/3 px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-primary focus:border-primary">
                    <option value="TR">Türkiye (+90)</option>
                    <option value="US">USA (+1)</option>
                    <option value="UK">UK (+44)</option>
                  </select>
                  <input
                    type="text"
                    className="block w-2/3 px-4 py-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-primary focus:border-primary"
                    placeholder="(---) --- -- --"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mesajınız *
                </label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  rows="4"
                  placeholder="Mesajınızı buraya yazınız"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  //   onClick={console.log('problem soru formu gönderildi')}
                  className="px-6 py-2 w-full bg-primary text-white font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        )}
        {activeTab === 2 && (
          <div className="col-span-10 md:col-span-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Ad Soyad <span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-Posta Adresiniz <span className="text-[red]">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon Numaranız *
                </label>
                <div className="flex">
                  <select className="block w-1/3 px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-primary focus:border-primary">
                    <option value="TR">Türkiye (+90)</option>
                    <option value="US">USA (+1)</option>
                    <option value="UK">UK (+44)</option>
                  </select>
                  <input
                    type="text"
                    className="block w-2/3 px-4 py-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-primary focus:border-primary"
                    placeholder="(---) --- -- --"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mesajınız *
                </label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  rows="4"
                  placeholder="Mesajınızı buraya yazınız"
                ></textarea>
              </div>
              <div className="text-right pb-5">
                <button
                  type="submit"
                  //   onClick={console.log('Önerim var formu gönderildi')}
                  className="px-6 py-2 w-full bg-primary text-white font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="col-span-1 md:col-span-3"></div>
      </div>
    </div>
  );
}

export default ContactForm;
