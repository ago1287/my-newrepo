
import Header from "./Header"
import Footer from "./Footer"


function MainContent() {
  return (
    <div>
      <h1>Reasons I am excited to learn React:</h1>
      <ol>
            <li>I want to be limitless when creating an app</li>
            <li>I want to build a startup</li>
            <li>I want to reach financial independence</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />)
