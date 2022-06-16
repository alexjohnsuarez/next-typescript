import type { NextPage } from 'next'
import { Meta } from '@/components/metafields'
import { MainLayout } from '@/components/layouts'
import { FormattedMessage } from 'react-intl'

const Homepage: NextPage = () => {
  return (
    <MainLayout>
      <Meta title="Homepage" />
      <FormattedMessage id="About.lastUpdated" />
    </MainLayout>
  )
}

export default Homepage
