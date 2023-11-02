import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const FindFlight = lazy(async () => import('./pages/FindFlight'))


export default function App(): ReactElement {
	return (

		<BrowserRouter>
			<Suspense fallback={< ></>}>
				<Routes>
					<Route path='/' element={<FindFlight />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
