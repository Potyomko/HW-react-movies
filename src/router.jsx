import { createBrowserRouter} from "react-router-dom"
import api from "./components/service/FetchMovies"
import { App } from "components/App"
import { Home } from "components/pages/Home"
import { MoviesList } from "components/pages/MoviesList"
import { MovieInfo } from "components/pages/MovieInfo"
import { Cast } from "components/pages/Cast"
import Reviews from "components/pages/Reviews"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        children: [
            { 
                index: true,
                element: <Home/>,               
            },
            {
                path: '/movies',
                element: <MoviesList/>,
                loader:  api.FetchHomeApi,
            }, 
            {
                path: '/movies/:movieId',
                element: <MovieInfo/>, 
                loader:  api.FetchMovieInfo,
                children: [
                    {
                        path: '/movies/:movieId/cast',
                        element: <Cast/>,
                        loader:  api.FetchCastApi,
                    }, 
                    {
                        path: '/movies/:movieId/revirews',
                        element: <Reviews/>,
                        loader: api.FetchReviewsApi,
                    }
                ]
            }
        ]
    }
])