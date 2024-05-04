import { Inter, Lusitana } from 'next/font/google'

// This will be used for the primary fonts
// load the subsets as 'Latin'
export const inter = Inter({ subsets: ['latin'] })


// This will be used for secondary fonts
// can be imported and directly used in the component
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['700', '400']
})
