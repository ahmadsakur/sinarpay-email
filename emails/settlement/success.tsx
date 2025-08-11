import { Section, Text, Heading, Hr } from '@react-email/components'
import BaseEmailLayout from '../layouts/base-layout'

const SuccessSettlement = () => {
  return (
    <BaseEmailLayout title="Settlement Success" preview="Your settlement was processed successfully">
      <Section style={{ marginBottom: 32, textAlign: 'left' }}>
        <Heading style={{ marginBottom: 16, fontSize: 24, fontWeight: 'bold' }}>
          Settlement Berhasil Dikirim ke Rekening Anda
        </Heading>
        <Text style={{ fontSize: 16, color: '#525252' }}>
          Settlement sejumlah <span style={{ fontWeight: 600 }}>"Rp100.000"</span> berhasil dikirim ke rekening Anda. Berikut detail settlement yang dikirim:
        </Text>
      </Section>
      <Hr style={{ margin: '16px 0', borderColor: '#e5e7eb' }} />
      <Section >
        <Heading style={{ marginBottom: 12, fontSize: 20, fontWeight: 600, color: '#262626' }}>
          Detail Settlement
        </Heading>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Nama Bisnis</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Toys Store</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Settlement ID</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>#18376398</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0', width: '50%' }}>Tanggal Settlement</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>21 Jun 2023, 12:00</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Tanggal Diproses</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>21 Jun 2023, 14:00</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Jumlah Transaksi</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>23 Transaksi</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Status</td>
              <td style={{ color: '#28A745', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Berhasil</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0', width: '50%' }}>Note</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Lorem ipsum dolor sit amet consectetur. Porttitor pretium blandit enim volutblablabla  sapien dictum duis nunc molestie suspendisse. </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Hr style={{ margin: '16px 0', borderColor: '#e5e7eb' }} />
      <Section >
        <Heading style={{ marginBottom: 12, fontSize: 20, fontWeight: 600, color: '#262626' }}>
          Informasi Transfer
        </Heading>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Akun Penerima</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Sandbox, BCA - 121826789</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Transfer Dari</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>SinarPay, BCA - 772912919</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Hr style={{ margin: '16px 0', borderColor: '#e5e7eb' }} />
      <Section >
        <Heading style={{ marginBottom: 12, fontSize: 20, fontWeight: 600, color: '#262626' }}>
          Rincian Transaksi
        </Heading>
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: 8 }}>
          <tbody>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Total Settlement</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Rp 1.000.000</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 12, padding: '6px 0' }}>Biaya Layanan Settlement</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 12, padding: '6px 0', textAlign: 'right' }}>Rp 10.000</td>
            </tr>
            <tr>
              <td style={{ color: '#525252', fontSize: 18, fontWeight: 600, padding: '6px 0' }}>Total</td>
              <td style={{ color: '#262626', fontWeight: 600, fontSize: 18, padding: '6px 0', textAlign: 'right' }}>Rp 990.000</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section >
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

export default SuccessSettlement