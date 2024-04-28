import React, { useEffect, useState } from 'react'
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { fetchRepoData } from '../Functions';

const RepositoryPage = () => {
  const { username, repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState([]);

  useEffect(() => {
    if (repoName) {
      getData();
    }
  }, [])

  async function getData() {
    const repoData = await fetchRepoData(`${username}/${repoName}`);
    setRepoDetails(repoData)

  }
  // console.log(repoDetails);
  return (
    <div>
      <Link to="/"><h2 className='dancing-heading'>{`<< Back to Home`}</h2></Link>
      <Link to={`/profile/${username}`}><h2 className='dancing-heading1'>{`<< Back`}</h2></Link>
      <header className='main-div'>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>USA</td>
                <td>Engineer</td>
              </tr>
            </tbody>
          </table>
        </div>

      </header>
    </div>
  )
}

export default RepositoryPage
