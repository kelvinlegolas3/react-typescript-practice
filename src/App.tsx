import React, { useState } from 'react'
import Navbar from "@/scenes/navbar"

const App = () => 
{
	const [selectedPage, setSelectedPage] = useState("home")

	return (
		<div className="App bg-gray-20">
			<Navbar 
				selectedPage = {selectedPage}
				setSelectedPage = {setSelectedPage}
			/>
		</div>
	)
}

export default App