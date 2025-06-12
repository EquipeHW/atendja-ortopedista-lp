import localFont from 'next/font/local'

export const oscine = localFont({
  src: [
    {
      path: '../public/fonts/fonnts.com-Oscine_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonnts.com-Oscine_Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oscine',
}) 