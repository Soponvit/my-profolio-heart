import React from 'react'
import './style.css'
const LeftLayer = () => {
    return (
        <div style={{width:'400px', marginLeft:'150px', marginTop:'30px', textAlign:'left'}}>
          <h3>HTML</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">55%</div>
</div> <br/>
<h3>CSS</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '47%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">47%</div>
</div> <br/>
<h3>React/JS</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
</div> <br/>
<h3>Python</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
</div> <br/>
<h3>C/C++</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">65%</div>
</div> <br/>
<h3>Arduino</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">72%</div>
</div> <br/>
<h3>C#</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">20%</div>
</div> <br/>
  </div>
    );
  };

  const stitle = {fontFamily:'Papyrus'};
  const CenterLayer = () => {
    return (<> 
        <div style={{width:'400px', marginLeft:'-80px', marginTop:'30px', textAlign:'left'}}>
          <h3>Tensorflow/Pytorch</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">40%</div>
</div> <br/>
<h3>English</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">30%</div>
</div> <br/>
<h3>Bootstrap</h3>
          <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div> <br/><br/><br/><br/><br/>
<img src='/img/Tensorflow.png' style={{marginLeft:'200px'}} width={100}/>
  </div>
      </>
    );
  };
  const RightLayer = () => {
    return (
      <div className="right-layer-img-about-me">
        
      </div>
    );
  };
  
export function Skill_Page() {
    return (<>
        <div className="skill-container">
      <LeftLayer/>
      <CenterLayer/>
      <RightLayer/>
    </div>  
    </>
    )
}