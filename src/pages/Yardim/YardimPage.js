import React, { useState } from 'react';
import BreadCrumbs from './components/BreadCrumbs';
import { myData } from '../../utils/localdata';
import ContactForm from './components/ContactForm';

function YardimPage() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [openCollapse, setOpenCollapse] = useState({});

  const toggleAccordion = (categoryId, dataId) => {
    setOpenCollapse((prevOpenCollapse) => ({
      ...prevOpenCollapse,
      [categoryId]: {
        ...prevOpenCollapse[categoryId],
        [dataId]: !prevOpenCollapse[categoryId]?.[dataId],
      },
    }));
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory((prevActiveCategory) =>
      prevActiveCategory === categoryId ? null : categoryId
    );
    setOpenCollapse({});
  };

  console.log(activeCategory);

  return (
    <>
      <div className="bg-gray-100 ">
        <BreadCrumbs />
        <div className="shadow-md pb-1">
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12 mx-auto my-4 text-center">
                <h3 className="text-primary text-[24px] font-medium">
                  Merhaba! Sana nasıl yardımcı olabiliriz?
                </h3>
                <p className="text-base text-secondary font-medium">
                  isbul.net ile ilgili aklına takılan soruların cevaplarını bu
                  sayfada bulabilirsin.
                </p>
              </div>
              {/* Search input */}
              <div className="col-span-12 flex justify-center mt-2">
                <div className="relative w-full max-w-md px-2">
                  <input
                    type="text"
                    className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-[53px] shadow-sm focus:outline-none "
                    placeholder="Aramak için kelime girin"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center md:pl-6 pl-6 pr-6 md:pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* yardım SSS  */}
        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-6">
              <h3 className="text-[24px] font-medium text-primary uppercase text-center md:text-start">
                Yardım
              </h3>
            </div>
            <div className="col-span-12 md:col-span-3 md:pb-[100px]">
              {myData.map((category) => (
                <ul
                  key={category.id}
                  className={
                    activeCategory === category.id
                      ? 'bg-primary p-3'
                      : 'bg-white p-3'
                  }
                >
                  <li onClick={() => handleCategoryClick(category.id)}>
                    <div
                      className="flex justify-between items-center"
                      style={{ cursor: 'pointer' }}
                    >
                      <p
                        className={
                          activeCategory === category.id
                            ? 'text-lg font-medium capitalize text-white p-2'
                            : 'text-lg font-medium capitalize p-2'
                        }
                      >
                        {category.category}
                      </p>
                      <div className="relative right-0">
                        {activeCategory === category.id ? (
                          <img
                            src="/images/svg/active-right-white.svg"
                            width={45}
                          />
                        ) : null}
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-span-12 md:col-span-9">
              {myData
                .filter((category) => category.id === activeCategory)
                .map((category) => (
                  <div key={category.id}>
                    {category.dataContent.map((data) => (
                      <div key={data.id} className="overflow-hidden mb-4">
                        <div
                          className="flex justify-between items-center bg-white p-4 cursor-pointer"
                          onClick={() => toggleAccordion(category.id, data.id)}
                        >
                          <h3 className="text-primary font-medium text-lg">
                            {data.title}
                          </h3>
                          <img
                            src="/images/svg/arrow-down.svg"
                            className={
                              openCollapse[category.id]?.[data.id]
                                ? 'rotate-180'
                                : null
                            }
                            width={24}
                          />
                        </div>
                        {openCollapse[category.id]?.[data.id] && (
                          <div className="p-4 bg-primary flex items-center gap-2">
                            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                            <p className="text-sm font-normal text-white">
                              {data.content}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default YardimPage;
