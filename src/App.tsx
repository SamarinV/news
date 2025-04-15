import "./App.css"
import { News } from "./components/News/News"
import { mockData } from "./mockData/mockData"

function App() {
	return (
		<div className="App">
			<main>
				<News data={mockData} />
			</main>
		</div>
	)
}

export default App
