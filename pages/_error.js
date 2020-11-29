import Link from 'next/link'

const Error=()=> {
  return (
    <div >
    	<h1>404- The Page you requested could not be found</h1>
    	<Link href="/">Go to Home</Link>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error