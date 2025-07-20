import { useEffect } from 'react'
import axios from 'axios'

export default function BookOfRecall() {
  useEffect(() => {
    // Trigger backend automation here if needed
    axios.post('https://your-api.com/start-book-recall', {
      userId: 'TEMP_USER_ID', // Later use actual ID logic
    }).catch(console.error)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Book of Recall</h1>
      <p className="text-lg text-gray-600">We’ve started preparing your automation session.</p>
    </div>
  )
}
