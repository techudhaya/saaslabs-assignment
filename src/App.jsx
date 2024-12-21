import { useState } from 'react'
import './App.css'
import list from ".././frontend-assignment.json"
import Pagination from './component/pagination'

function App() {
  const [page, setpage] = useState(1)
  const rowsPerPagepage = 5

  const onPageChange = (page) => {
    setpage(page)
  }

  let totalPages = Math.ceil(list.length / rowsPerPagepage)

  let filteredList = list.slice(page * rowsPerPagepage - rowsPerPagepage, page * rowsPerPagepage).map((row) => (
    <tr key={row["s.no"]}>
      <td>{row["s.no"]}</td>
      <td>{row["percentage.funded"]}</td>
      <td>{row["amt.pledged"]}</td>
    </tr>
  ))

  return (
    <div className="app">
      <table className="table table-bordered table-hover" aria-label="data table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Percentage funded</th>
            <th scope="col">Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {filteredList}
        </tbody>
      </table>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  )
}

export default App
