


import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

import Accordion2 from "../../Demande/Reservation/steps/Accordion2";

export default function DescriptionCreche() {
  return (
    <>
      <div className=" mx-[2%] my-10 rounded-lg border-4 border-[#fc8280] p-5 bg-[#f1c1c0]">
        <div className="px-4 sm:px-0">
          
          <h1 className=" text-3xl leading-7 text-rose-950">
            Description de la creche
          </h1>
        </div>
        <div className="mt-6  ">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Nom de la creche
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Mini World
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Addresse
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Quartier djanene Mabrouk rue Numero 2, Hussein dey, Alger
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Type d'etablissement
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Etatique / prive
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Type d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Occasionnel/Regulier
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Type de pedagogie
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Montessori
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Age d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                entre 3 et 5 ans
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Capacites d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                400 places
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Places disponibles
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                27 places
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Jours d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                <ul className="flex flex-row">
                  <div>
                    <li>Dimanche : </li>

                    <li>Lundi    : </li>
                    <li>Mardi    : </li>
                    <li>Mercredi : </li>
                    <li>Jeudi    : </li>
                    <li>Vendredi    : </li>
                    <li>Samedi    : </li>
                  </div>
                  <div className="ml-3">
                    <li>9:00 - 14:00 </li>
                    <li>9:00 - 14:00 </li>
                    <li>9:00 - 14:00 </li>
                    <li>9:00 - 14:00 </li>
                    <li>9:00 - 14:00 </li>
                    <li>  Ferme         </li>
                    <li>  Ferme         </li>
                  </div>
                </ul>
              </dd>
            </div>
        
         
           
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Services proposes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                <ul>
                  <li>- Dejeuner</li>
                  <li>- Bus d'ecole</li>
                  <li>- Gouter d'apres midi</li>
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              
            
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                Numero de telephone de la creche
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                +21356738421
              </dd>
            </div>
            
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
               Paiement mensuel
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                6000 DA
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-rose-500 ld:text-rose-950">
                A propos
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          Brochure_De_La_Creche.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Telecharger
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          Decouvrez_Mini_World.pdf
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          4.5mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Telecharger
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
              
            </div>
          </dl>


        </div>
        
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <Accordion2/>
        </div>
    </>
  );
}