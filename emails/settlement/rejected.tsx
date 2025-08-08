import { Section, Text, Heading, Hr } from '@react-email/components'
import BaseEmailLayout from '../layouts/base-layout'

const SuccessSettlement = () => {
  return (
    <BaseEmailLayout title="Settlement Successful" preview="Your settlement was processed successfully">
      <Section className="text-left mb-8">
        <Heading className="text-3xl font-bold text-[#A93029] mb-4">
          Settlement Ditolak
        </Heading>
        <Text className="text-gray-600 text-lg">
          Sistem gagal mengirimkan settlement ke rekening Anda. Berikut detail settlement yang gagal diproses:
        </Text>
      </Section>
      <Hr className="border-gray-200 my-6" />
      <Section className="bg-gray-50 rounded-lg p-6 mb-6">
        <Heading className="text-xl font-semibold text-gray-800 mb-4">
          Detail Merchant
        </Heading>
        <div>
          <div className="flex justify-between">
            <Text className="text-gray-600">Settlement ID:</Text>
            <Text className="font-medium text-gray-800">#SET-2024-001</Text>
          </div>
          <div className="flex justify-between">
            <Text className="text-gray-600">Amount:</Text>
            <Text className="font-medium text-green-600">$1,250.00</Text>
          </div>
          <div className="flex justify-between">
            <Text className="text-gray-600">Date:</Text>
            <Text className="font-medium text-gray-800">August 8, 2025</Text>
          </div>
          <div className="flex justify-between">
            <Text className="text-gray-600">Status:</Text>
            <Text className="font-medium text-green-600">Completed</Text>
          </div>
        </div>
      </Section>
      <Hr className="border-gray-200 my-6" />

      {/* Footer */}
      <Section className="text-center">
        <Text className="text-gray-500 text-sm">
          Need help? Contact our support team at{' '}
          <a href="mailto:support@sinarpay.com" className="text-blue-600 underline">
            support@sinarpay.com
          </a>
        </Text>
        <Text className="text-gray-400 text-xs mt-4">
          This email was sent by SinarPay. Please do not reply to this email.
        </Text>
      </Section>
    </BaseEmailLayout>
  )
}

export default SuccessSettlement