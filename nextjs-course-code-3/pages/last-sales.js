import { useEffect, useState } from 'react'
import useSWR from 'swr'

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales)
  // const [isloading, setIsLoading] = useState(false)

  const { data, error } = useSWR(
    'https://nextjs-course-dummy-default-rtdb.firebaseio.com/sales.json'
  )

  useEffect(() => {
    if (data) {
      const transformedSales = []

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        })
      }
      setSales(transformedSales)
    }
  }, [data])

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('https://nextjs-course-dummy-default-rtdb.firebaseio.com/sales.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = []

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         })
  //       }

  //       setSales(transformedSales)
  //       setIsLoading(false)
  //     })
  // }, [])

  if (error) {
    return <p>failed to load</p>
  }

  if (!data && !sales) {
    return <p>Loading....</p>
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  return fetch(
    'https://nextjs-course-dummy-default-rtdb.firebaseio.com/sales.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = []

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        })
      }
      return {
        props: {
          sales: transformedSales,
        },
        revalidate: 10,
      }
    })
}

export default LastSalesPage
