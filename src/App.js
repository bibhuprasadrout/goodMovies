import React from 'react'
import {useState} from 'react'
import {MdLocalMovies} from 'react-icons/md'
import './App.css'

export default function App() {

  // -------------------crude and simple------------------------
  // ------------------it does work though----------------------

  // let Action, Romance, Comedy, Thriller, Cult
  
  // const goodMovies = [
  //   Action = {
  //     'Dhoom' : '3/5',
  //     'Rocky Handsome' : '4.5/5'
  //   },
  //   Romance = {
  //     'Love aaj kal' : '3/5',
  //     'Kabir singh' : '4/5'
  //   },
  //   Comedy = {
  //     'Golmaal' : '4/5',
  //     'Welcome' : '5/5'
  //   },
  //   Thriller = {
  //     'Raman raghav 2.0' : '4/5',
  //     'Andha dhun' : '4/5'
  //   },
  //   Cult = {
  //     'Gangs of wasepur' : '3.5/5',
  //     'Gangs of wasepur 2' : '4/5'
  //   }
  // ]

  // function submitAction(){
  //   document.querySelector('#movieOne').innerText = `${Object.keys(goodMovies[0])[0]}: ${Object.values(goodMovies[0])[0]}`
  //   document.querySelector('#movieTwo').innerText = `${Object.keys(goodMovies[0])[1]}: ${Object.values(goodMovies[0])[1]}`
  // }
  // function submitRomance(){
  //   document.querySelector('#movieOne').innerText = `${Object.keys(goodMovies[1])[0]}: ${Object.values(goodMovies[1])[0]}`
  //   document.querySelector('#movieTwo').innerText = `${Object.keys(goodMovies[1])[1]}: ${Object.values(goodMovies[1])[1]}`
  // }
  // function submitComedy(){
  //   document.querySelector('#movieOne').innerText = `${Object.keys(goodMovies[2])[0]}: ${Object.values(goodMovies[2])[0]}`
  //   document.querySelector('#movieTwo').innerText = `${Object.keys(goodMovies[2])[1]}: ${Object.values(goodMovies[2])[1]}`
  // }
  // function submitThriller(){
  //   document.querySelector('#movieOne').innerText = `${Object.keys(goodMovies[3])[0]}: ${Object.values(goodMovies[3])[0]}`
  //   document.querySelector('#movieTwo').innerText = `${Object.keys(goodMovies[3])[1]}: ${Object.values(goodMovies[3])[1]}`
  // }
  // function submitCult(){
  //   document.querySelector('#movieOne').innerText = `${Object.keys(goodMovies[4])[0]}: ${Object.values(goodMovies[4])[0]}`
  //   document.querySelector('#movieTwo').innerText = `${Object.keys(goodMovies[4])[1]}: ${Object.values(goodMovies[4])[1]}`
  // }


  // return (
  //   <>
  //     <div>
  //       <div className="container">
  //         <header>
  //           <MdLocalMovies/>
  //           <h1>goodMovies</h1>
  //         </header>
  //       </div>
  //       <div className="container">
  //         <p>Checkout these movie ratings. Select genre for more information.</p>
  //         <div>
  //           <button onClick={submitAction}>Action</button>
  //           <button onClick={submitRomance}>Romance</button>
  //           <button onClick={submitComedy}>Comedy</button>
  //           <button onClick={submitThriller}>Thriller</button>
  //           <button onClick={submitCult}>Cult</button>
  //         </div>
  //       <hr/>
  //       <div className="container">
  //         <div><p id="movieOne"></p></div>
  //         <div><p id="movieTwo"></p></div>
  //       </div>
  //       </div>
  //     </div>
  //   </>
  // )

  // ------------------------another way----------------------------
  // 

  const goodMovies = {
    Action: [
      { 'movie' : 'Dhoom', 'rating' : '3/5'},
      { 'movie' : 'Rocky Handsome', 'rating' : '4.5/5'}
    ],
    Romance: [
      { 'movie' : 'Love aaj kal', 'rating' : '3/5'},
      { 'movie' : 'Kabir singh', 'rating' : '4/5'}
    ],
    Comedy: [
      { 'movie' : 'Golmaal', 'rating' : '4/5'},
      { 'movie' : 'Welcome', 'rating' : '5/5'}
    ],
    Thriller: [
      { 'movie' : 'Raman raghav 2.0', 'rating' : '4/5'},
      { 'movie' : 'Andha dhun', 'rating' : '4/5'}
    ],
    Cult: [
      { 'movie' : 'Gangs of wasepur', 'rating' : '3.5/5'},
      { 'movie' : 'Gangs of wasepur 2', 'rating' : '4/5'}
    ]
  }

  const [selectedGenre,setgenre] = useState('Action')

  
  function submitGenre(genre){
    setgenre(genre)
  }


  return (
    <>
      <div id="main-div">
        <div id="topContainer" className="container">
          <header>
            <span id="logoIcon"><MdLocalMovies/></span>
            <p>goodMovies</p>
          </header>
        </div>
        <div id="bottomContainer" className="container">
          <section>
            <article id="introText" className="article">
              <p>Checkout these movie ratings. Select genre for more information.</p>
            </article>
            <article id="genreButtons" className="article">
              <div id="genreButton">
                {Object.keys(goodMovies).map((genre) => (<button onClick = {() => submitGenre(genre)}>{genre}</button>))}
              </div>
            </article>
            <hr/>
            <article id="genreContent" className="article">
              <div>
                <ul>
                {goodMovies[selectedGenre].map((movieInfo) => (
                  <li key={movieInfo.movie}>
                    <div key={movieInfo.movie}>{movieInfo.movie}</div>
                    <div key={movieInfo.rating}>{movieInfo.rating}</div>
                  </li>
                ))}
                </ul>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  )
}

