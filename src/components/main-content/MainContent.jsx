import "./MainContent.css"
import cross from "../../assets/cross.png"
import arrow from "../../assets/arrow.png"

export default function MainContent() {
  const results = [];
  for(let i =0; i<18; i++){
    results.push("There is no Sore it will Not Heal, No cool it will not Subdue.")
  }

  return (
    <div className="main-container">
        <div className="content-container">
            <section className="top-section">
                <h1 className="main-header">Free Slogan Maker</h1>
                <h4>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</h4>
                <form>
                    <label>Word for your slogan</label>
                    <input type="text"/>
                    <button 
                    className="generate-btn"
                    type="submit">
                        Generate Slogan
                    </button>
                </form>
            </section>
            <section className="middle-section">
                <div className="result-header">
                    <h2>
                        We have generated 1,023 slogans for "cozy"
                    </h2>
                    <button className="download-btn">
                        Download all
                    </button>
                </div>
                <div className="result-container">
                    {results.map((result) => (<div className="result">{result}</div>))}
                </div>
            </section>
            <div className="result-footer">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>...</li>
                        <li>21</li>
                    </ul>
                    <ul>
                        <li className="next">
                            Next 
                            <img src={arrow}/>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}
