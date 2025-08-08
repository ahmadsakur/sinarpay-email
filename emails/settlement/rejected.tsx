import { Section, Text, Heading, Hr, Row, Column, } from '@react-email/components'
import BaseEmailLayout from '../layouts/base-layout'

const FailedSettlement = () => {
  return (
    <BaseEmailLayout title="Settlement Failed" preview="Your settlement was processed successfully">
      <Section style={{ marginBottom: 32, textAlign: 'left' }}>
        <Heading style={{ marginBottom: 16, fontSize: 24, fontWeight: 'bold', color: '#b62134ff' }}>
          Settlement Gagal Dikirim ke Rekening Anda
        </Heading>
        <Text style={{ fontSize: 16, color: '#525252' }}>
          Sistem gagal mengirimkan settlement ke rekening Anda. Berikut detail settlement yang gagal diproses:
        </Text>
      </Section>
      <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
      <Section style={{ padding: '12px 0' }}>
        <Heading style={{ marginBottom: 16, fontSize: 18, fontWeight: 600, color: '#262626' }}>
          Detail Merchant
        </Heading>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>Nama Bisnis</td>
              <td style={{ color: '#262626', fontWeight: 500, fontSize: 14, padding: '6px 0', textAlign: 'right' }}>Toys Store</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>ID Merchant</td>
              <td style={{ color: '#262626', fontWeight: 500, fontSize: 14, padding: '6px 0', textAlign: 'right' }}>#18376398</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>Nama Pemilik</td>
              <td style={{ color: '#262626', fontWeight: 500, fontSize: 14, padding: '6px 0', textAlign: 'right' }}>John Doe</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
      <Section style={{ padding: '12px 0' }}>
        <Heading style={{ marginBottom: 16, fontSize: 18, fontWeight: 600, color: '#262626' }}>
          Detail Transfer
        </Heading>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>Total Settlement</td>
              <td style={{ color: '#262626', fontWeight: 'bold', fontSize: 20, padding: '6px 0', textAlign: 'right' }}>Rp 200.000</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>Akun Tujuan</td>
              <td style={{ color: '#262626', fontWeight: 500, fontSize: 14, padding: '6px 0', textAlign: 'right' }}>139003298 (Nacht)</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }}>Status</td>
              <td style={{ color: '#b62134ff', fontWeight: 500, fontSize: 14, padding: '6px 0', textAlign: 'right' }}>Gagal</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 14, padding: '6px 0' }} colSpan={2}>Catatan</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 16, fontWeight: 500, padding: '6px 0' }} colSpan={2}>lorem ipsum dolor sit amet</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
      <Section style={{ padding: '12px 0' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#262626' }}>
          Alasan Ditolak
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#262626' }}>
          Nama pemilik rekening tidak ditemukan.
        </Text>
        <Text>
          Untuk informasi atau pertanyaan lebih lanjut, mohon buat Tiket Bantuan atau hubungi{' '}
          <a href="mailto:support@sinarpay.co.id" style={{ color: '#0066cc', textDecoration: 'underline' }}>
            support@sinarpay.co.id
          </a>.
        </Text>
        <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
        <Text>Terima kasih,</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          SinarPay
        </Text>
      </Section>
      <Hr style={{ margin: '6px 0', borderColor: '#e5e7eb' }} />
    </BaseEmailLayout>
  )
}

export default FailedSettlement