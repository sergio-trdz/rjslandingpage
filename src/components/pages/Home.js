import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                 <div className="main-footer" style={{margin:'0', fontFamily: 'sans-serif', maxWidth: '800px', padding:'35px 15px', width: '100'}}>
        <h1 style={{fontWeight:'500', fontSize: '2.8rem'}}>Hello!</h1>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400'}}>My name is Sergio, I'm a 27 year old front end web developer currently based in Monterrey, NL, Mexico. I currently work part-time at <a style={{textDecoration:'none', color: '#008b8b'}} href="http://arbatech.io/" target="_blank">ArbatechSolutions</a>.</p>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400'}}>If you would like to contact me, feel free to reach out to me with my email - <a style={{textDecoration:'none', color: '#008b8b'}}>sergiotrejordz@gmail.com</a>, we can set up a quick chat or even a meet up, just feel free to contact me. I look forward to hearing from you!</p>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400'}}>Aside from working as a web developer, I do moderation stuff on <a style={{textDecoration:'none', color: '#008b8b'}}  href="https://steamcommunity.com/id/ultralag/" target="_blank">Steam</a> and try to rank up at some video games in my spare time.</p>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400'}}>If you would like to stay up to date with me, or just to have a casual chat/check, feel free to follow me on <a style={{textDecoration:'none', color: '#008b8b'}}  href="https://twitter.com/elSergioTrejo" target="_blank">Twitter</a> and <a style={{textDecoration:'none', color: '#008b8b'}}  href="https://github.com/sergio-trdz" target="_blank">Github</a>!</p>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400', marginTop: '4rem'}} className="m">Greetings!</p>
        <p style={{fontSize:'1.3rem', lineHeight:'1.7', fontWeight: '400'}}>- Sergio</p>
        </div>
            </div>
        )
    }
}

export default Home;