import { RouteProps } from "react-router-dom"
import LoginApp from "../pages/LoginPage/LoginApp"

const pagesData = [
  {
    path: "/login",
    element: <LoginApp />
  }
] as unknown as RouteProps[]

export default pagesData
