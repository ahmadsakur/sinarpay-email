import { Body, Head, Html, Preview, Tailwind } from '@react-email/components';
import { poppinsFontUrl } from './poppins-font';
import type { ReactNode } from 'react';

interface BaseEmailLayoutProps {
  title: string;
  preview: string;
  children: ReactNode
}
const BaseEmailLayout = (props: BaseEmailLayoutProps) => {
  const { title, preview, children } = props;
  return (
    <Html>
      <Head>
        <title>{title}</title>
        <link href={poppinsFontUrl} rel="stylesheet" />
        <style>{`
          .font-poppins { font-family: 'Poppins', Arial, sans-serif !important; }
        `}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="px-6 mt-8 font-poppins bg-gray-50">
          <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg">
            <div className='w-full h-4 bg-blue-500' />
            <div className='p-8'>
              <div className="flex items-center justify-start mb-4 gap-x-2">
                <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.77475 40L11.0494 31.8695H19.546L9.77475 40Z" fill="url(#paint0_linear_20409_29960)" />
                  <path d="M15.2331 26.9073L9.15313 19.5541L6.26506 22.5141C6.25808 22.5141 6.25808 22.5141 6.25808 22.5141L0 27.8824L1.83691 26.9871C1.16291 27.3202 -0.366684 29.4509 2.16518 31.6301L2.17217 31.637C2.5598 31.7862 2.98236 31.873 3.42588 31.873H19.5495L15.2331 26.9073Z" fill="url(#paint1_linear_20409_29960)" />
                  <path d="M1.32006 11.3473C0.513358 11.7394 0 12.5583 0 13.4571V28.5903C0 29.9748 0.862581 31.1547 2.08486 31.6301C-0.352715 29.5307 1.11751 27.4764 1.77056 27.1571L1.77405 27.1536C2.02549 27.0287 2.91252 26.595 3.9113 26.1091L4.3164 25.9079C4.72848 25.7066 5.14755 25.4984 5.53868 25.3075L5.99267 25.0855L6.36633 24.905C6.96351 24.617 7.3721 24.4123 7.3721 24.4123L24.5085 16.0285V0L1.32006 11.3473Z" fill="url(#paint2_linear_20409_29960)" />
                  <defs>
                    <linearGradient id="paint0_linear_20409_29960" x1="18.4696" y1="-23.7586" x2="-23.7799" y2="33.5078" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0080F4" />
                      <stop offset="1" stop-color="#00FFFF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_20409_29960" x1="4.07117" y1="17.63" x2="37.3604" y2="20.993" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00518E" />
                      <stop offset="1" stop-color="#0080FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_20409_29960" x1="-1.00688" y1="23.7969" x2="31.6824" y2="-0.297106" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0080F4" />
                      <stop offset="1" stop-color="#00FFFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='m-0 text-2xl font-bold leading-none h-fit'>Sinar<span className='font-normal'>Pay</span></p>
              </div>
              {children}
            </div>
          </div>
          {/* <div id='footer'>
            <Text className="text-sm text-gray-500">
              Copyright © 2023 Sinar Digital Nusantara
            </Text>
            <Text className="text-sm text-gray-500">
              Headquarter : Nifarro Park, ITS Tower, Jakarta 12510
            </Text>
            <Text className="text-sm text-gray-500">
              Operational : Jl. Terusan Jakarta No.175a, Bandung, 40291
            </Text>
          </div> */}
        </Body>
      </Tailwind>
    </Html>
  )
}

export default BaseEmailLayout