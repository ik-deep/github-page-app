import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './styles.css'
import { fetchUserData } from '../Functions';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
  const { username } = useParams();
  const [data, setData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const [repoFilterData, setRepoFilterData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (username) {
      getData();
    }
  }, [])
  // console.log("repo=>",repoData);
  async function getData() {
    try{
      const userProfileData = await fetchUserData(username);
      const userRepo = await fetchUserData(`${username}/repos`);
      setData(userProfileData);
      setRepoData(userRepo)
      setRepoFilterData([...repoData, ...userRepo]);
    }catch(err){
       return (<h1>Please enter the existing username!</h1>);
    }}

  const handleSearch = (e) => {
    setQuery(e.target.value);
    
    const filtered = repoData.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
    setRepoFilterData(filtered);
  }
   console.log(repoData);
  return (
    <div>
        <Link to="/"><h2 className='dancing-heading'>{`<< Back to Home`}</h2></Link> 
      <header className='main-div'>
   {data&&(  <div className='profile-details'>
          <div className="avatar">
            <img src={data && data.avatar_url} alt="User Avatar" />
          </div>
          <div className="user-info">
            <h1>{data && data.name}</h1>
            <p>{data && data.login}</p>
          </div>

          <div className="connectivity">
            <i className="fa fa-share-alt"></i>
          </div>
          <p className="bio">{data && data.bio}</p>
          <div><span className='circle1'></span><span>{data.followers}  Followers  </span>   <span className='circle1'></span><span>{data.following}  Following</span></div>
          <div><span>{data.location ? "Location : " + data.location : ""}</span></div>
          <div><span>{data.blog && data.blog != null ? " Blog : " + data.blog : ""}</span></div>
        </div>)}
        <div className='repo-list-table'>
        { data && (<div className="search-bar">
            <input type="text" placeholder="Find a repository..." value={query}
              onChange={handleSearch} />
               {/* <input type="submit" style={{marginLeft:"10px"}} value="Submit" onClick={handleSearch}/> */}
            <div className='select-box'>
              <select>
                <option>Type</option>
                <option>All</option>
                <option>Sources</option>
                <option>Forks</option>
                <option>Archived</option>
                <option>Can be sponsored</option>
                <option>Mirrors</option>
                <option>Templates</option>
              </select>
              <select>
                <option>Language</option>
                <option> All</option>
                <option>JavaScript</option>
                <option>HTML</option>
                <option>EJS</option>
                <option>Java</option>
                <option>TypeScript</option>
                <option>CSS</option>
              </select>
              <select>
                <option>Sort</option>
                <option>Last updated</option>
                <option>Name</option>
                <option>Stars</option>
              </select>
            </div>
          </div>
          )}
          <ul className="repositories">
            {
              repoFilterData && repoFilterData.length > 0 ? repoFilterData.map((item, index) => {
                return (<Link to={`/repository/${username}/${item.name}`}><div key={index} className='li-item'>
                  <div> <li key={index}>{item.name}</li><br></br>
                    <span className='circle'></span><span>{item.language}</span><span>{item.updated_at.slice(0, 10)}</span></div>
                  <span className='public-repo'>{item.visibility}</span>
                </div></Link>);
              }) :repoFilterData.length > 0 ? (<h1>Loading....</h1>):(<h1>Search Data Not Found!</h1>)}
            
            {/* <li>Amazon clone (Updated on Feb 6)</li>
            <li>Netflix clone (Updated on Feb 6)</li>
            <li>FRONT-PAGE (Updated on Feb 6)</li>
            <li>Shopping (Updated on Feb 6)</li> */
            }

          </ul>
        </div>

      </header>
    </div>
  )
}

export default ProfilePage
