export default function About(props) {

    // const [btnText,setBtnText] = useState("Enable Dark Mode");

    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }
    
    return (
    <div className="container">
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
   Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle} >
        <strong>Analyze Your Text</strong><code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" style={myStyle}>
      <button class="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free To Use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={myStyle}>
        <strong>Free To Use</strong> <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Browser Friendly
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong >Browser Friendly</strong><code>.accordion-body</code>, though the transition does limit overflow.
          </div>
       </div>
      </div>
    </div>

    </div>
  )
}
