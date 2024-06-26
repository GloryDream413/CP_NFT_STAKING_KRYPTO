import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicLanding = dynamic(() => import('@/components/home/landing'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicLanding />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
