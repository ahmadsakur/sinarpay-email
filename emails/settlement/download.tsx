import { Section, Text, Heading, Hr, Button, Link } from '@react-email/components'
import BaseEmailLayout from '../layouts/base-layout'

const DownloadSettlement = () => {
  return (
    <BaseEmailLayout title="Settlement Success" preview="Your settlement was processed successfully">
      <Section style={{ textAlign: 'left' }}>
        <Heading style={{ fontSize: 24, fontWeight: 'bold', color: '#000000' }} className='mb-4'>
          Berkas Data Transaksi Siap Diunduh
        </Heading>
        <Text className='text-base text-gray-700 mb-4'>
          Berikut berkas data transaksi Settlement <span className='font-medium text-black'>#12831292</span>. Silakan unduh dengan klik tombol di bawah. Tautan untuk mengunduh berkas akan kedaluwarsa setelah 24 jam.
        </Text>

        <a href="#"><Button className=' bg-blue-500 rounded-lg px-4 py-2 text-white font-medium text-sm'>Unduh Berkas</Button></a>
        <Text className='text-base text-gray-700 mb-4'>
          Masukkan kata sandi berikut untuk membuka berkas:
        </Text>
        <Text className='block p-4 bg-gray-100 text-xl font-bold font-mono w-fit'>
          123456
        </Text>
      </Section>
      <Section >
        <Text>
          Mohon jaga kerahasiaan data Anda. Jika Anda memiliki pertanyaan atau butuh informasi lebih lanjut, hubungi
          <a href="mailto:support@sinarpay.co.id" style={{ color: '#0066cc', textDecoration: 'underline' }}>
            support@sinarpay.co.id
          </a>.
        </Text>
      </Section>
      <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
      <Section >
        <Text>Terima kasih,</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 0 }}>
          SinarPay
        </Text>
      </Section>
    </BaseEmailLayout >
  )
}

export default DownloadSettlement