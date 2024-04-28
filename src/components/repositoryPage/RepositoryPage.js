import React, { useEffect, useState } from 'react'
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { fetchRepoData } from '../Functions';

const RepositoryPage = () => {
  const { username, repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState();
  const [commitEvents, setCommitEvents] = useState();

  useEffect(() => {
    if (repoName) {
      getData();
    }
  }, [])

  async function getData() {
    const repoData = await fetchRepoData(`${username}/${repoName}/contents`);
    const commitEvents = await fetchRepoData(`${username}/${repoName}/events`);
    setCommitEvents(commitEvents);
    setRepoDetails(repoData);
    console.log(repoDetails);
  }
  console.log(repoDetails);

  return (
    <div>
      <Link to="/"><h2 className='dancing-heading'>{`<< Back to Home`}</h2></Link>
      <Link to={`/profile/${username}`}><h2 className='dancing-heading1'>{`<< Back`}</h2></Link>
      <header className='main-div'>
        <h1>In Progress...</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
              //  repoDetails&&repoDetails.map((item)=>{
              //     return (<tr>
              //       <td>{item.name}</td>
              //       <td>{commitEvents[0].payload.commits[0].message}</td>
              //       <td>Engineer</td>
              //     </tr>)
              //   })
              }
              
            </tbody>
          </table>
        </div>

      </header>
    </div>
  )
}

export default RepositoryPage
