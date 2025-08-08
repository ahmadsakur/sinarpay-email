import { Section, Text, Heading, Hr } from '@react-email/components'
import BaseEmailLayout from '../layouts/base-layout'

const SuccessSettlement = () => {
  return (
    <BaseEmailLayout title="Settlement Successful" preview="Your settlement was processed successfully">
      <Section className="mb-8 text-left">
        <Heading className="mb-4 text-3xl font-bold text-neutral-800">
          Settlement Berhasil Dikirim ke Rekening Anda
        </Heading>
        <Text className="text-lg text-gray-600">
          Settlement sejumlah "Rp100.000" berhasil dikirim ke rekening Anda. Berikut detail settlement yang dikirim:
        </Text>
      </Section>
      <Hr className="my-2 border-gray-200" />
      <Section className="py-3">
        <Heading className="mb-4 text-xl font-semibold text-gray-800">
          Detail Merchant
        </Heading>
        <div className='flex flex-col gap-y-2'>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Nama Bisnis</Text>
            <Text className="m-0 font-medium leading-none text-gray-800 ">Toys Store</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">ID Merchant</Text>
            <Text className="m-0 font-medium leading-none">#18376398</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Nama Pemilik</Text>
            <Text className="m-0 font-medium leading-none text-gray-800 ">John Doe</Text>
          </div>
        </div>
      </Section>
      <Hr className="my-2 border-gray-200" />
      <Section className="py-3">
        <Heading className="mb-4 text-xl font-semibold text-gray-800">
          Detail Transfer
        </Heading>
        <div className='flex flex-col gap-y-2'>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Total Settlement</Text>
            <Text className="m-0 text-2xl font-bold leading-none text-gray-800">Rp 200.000</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Total Transfer</Text>
            <Text className="m-0 font-medium leading-none text-gray-800">Rp 197.500</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Jumlah Transaksi</Text>
            <Text className="m-0 font-medium leading-none">23 Transaksi</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Akun Tujuan</Text>
            <Text className="m-0 font-medium leading-none">139003298 (Nacht)</Text>
          </div>
          <div className="flex justify-between">
            <Text className="m-0 leading-none text-gray-600 ">Status</Text>
            <Text className="m-0 font-medium leading-none text-green-600 ">Sukses</Text>
          </div>
        </div>
      </Section>
      <Hr className="my-2 border-gray-200" />
      <Section className="py-3">
        <p>Attachment Here</p>
        <Text>Password Zip</Text>
        <Text className='text-3xl font-bold tracking-wide text-gray-800'>
          253478
        </Text>
      </Section>
      <Hr className="my-2 border-gray-200" />

      <Section className="text-center">
        <Text className="text-sm text-gray-500">
          Need help? Contact our support team at{' '}
          <a href="mailto:support@sinarpay.com" className="text-blue-600 underline">
            support@sinarpay.com
          </a>
        </Text>
        <Text className="mt-4 text-xs text-gray-400">
          Copyright © 2023 Sinar Digital Nusantara
        </Text>
      </Section>
    </BaseEmailLayout>
  )
}

export default SuccessSettlement