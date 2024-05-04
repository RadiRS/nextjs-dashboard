import { Inter, Lusitana } from 'next/font/google'

// This will be use for the primary fonts
// load the subsets as 'latin'
export const inter = Inter({ subsets: ['latin'] })


// This will use for secondary fonts
// can import and directly use in the component
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['700', '400']
})
