import Header from './Header'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import Footer from './Footer'


export default function CookieStandAdmin() {
  return (
    <>
      <Header className='bg-gray-300' />
      <main className='bg-gray-300' >
        <CreateForm />
        <ReportTable />
      </main>
      <Footer />
    </>
  )
}
