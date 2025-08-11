import { Body, Head, Html, Preview, Section, Tailwind, Text } from '@react-email/components';
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
      </Head>
      <Preview>{preview}</Preview>
      <Tailwind >
        <Body className="pt-8 font-poppins bg-gray-50 font-sans">
          <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg">
            <div className='w-full h-4 bg-blue-500' />
            <div className='p-8'>
              <Text className='m-0 text-2xl font-bold leading-none h-fit text-left mb-8'>Sinar<span className='font-normal'>Pay</span></Text>
              {children}
            </div>
            <Section style={{ textAlign: 'center' }}>
              <Text style={{ fontSize: 14, color: '#404040', margin: '0px' }}>
                Headquarter : Nifarro Park, ITS Tower, Jakarta 12510
              </Text>
              <Text style={{ fontSize: 14, color: '#404040', margin: '0px' }}>
                Operational : Jl. Terusan Jakarta No.175a, Bandung, 40291
              </Text>
              <Text style={{ marginTop: 16, fontSize: 10, color: '#404040' }}>
                Copyright © 2025 Sinar Digital Nusantara
              </Text>
            </Section>
          </div>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default BaseEmailLayout