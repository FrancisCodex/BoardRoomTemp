import React from "react";

const Card = ({ property }) => {
  return (
    <>
    <div className="">
    <div className="relative mx-auto card">
        <a href="" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-lg bg-white p-4 shadow">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                    <img src={property.image} alt={property.title} />
                    </div>
                </div>
                <div className="absolute bottom-0 left-5 mb-3 flex">
                    <p className="flex items-center font-medium text-white shadow-sm">
                    <i className="fa fa-camera mr-2 text-xl text-white" />
                    {property.quantity}
                    </p>
                </div>
                <div className="absolute bottom-0 right-5 mb-3 flex">
                    <p className="flex items-center font-medium text-gray-800">
                    <i className="fa fa-heart mr-2 text-2xl text-white" />
                    </p>
                </div>
                <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"> {property.type} </span>
                <span className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i className="fa fa-star" /> </span>
                </div>
                <div className="mt-4">
                    <h2 className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg" title="New York">{property.title}</h2>
                    <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                        <span className="text-sm uppercase"> $ </span>
                        <span className="text-2xl">{property.price}</span>/month
                    </p>
                </div>
                <div className="mt-4 card">
                    <p className="line-clamp-1 mt-2 text-lg text-gray-800">{property.description} [more]</p>
                </div>
                {/* Property Features */}

                <div className="justify-center">
                    <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                        <p className="flex items-center font-medium text-gray-800">
                        <i className="fa fa-bed mr-2 text-blue-900" />
                        {property.persons}
                        </p>
                        <p className="flex items-center font-medium text-gray-800">
                        <i className="fa fa-bath mr-2 text-blue-900" />
                        {property.bathrooms}
                        </p>
                        <p className="flex items-center font-medium text-gray-800">
                        <i className="fa fa-home mr-2 text-blue-900" />
                        {property.floors}
                        </p>
                    </div>
                </div>
                {/* Property Ownder Details */}
                <div className="mt-8 grid grid-cols-2">
                    <div className="flex items-center">
                        <div className="relative">
                        <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8" />
                        <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full" />
                        </div>
                        <p className="line-clamp-1 ml-2 text-gray-800">{property.renter}</p>
                    </div>
                    <div className="flex justify-end">
                        <button><i className="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" /></button>
                        <button><i className="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" /></button>
                    </div>
                </div>
            </div> 
        </a>
    </div>
    </div>
    </>
  );
};

export default Card;
