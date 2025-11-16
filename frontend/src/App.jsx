import Navbars from './Components/Navbar/Navbar'
import Loading from "./Components/Loading/Loading.jsx";
import { useEffect, useState } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbars />
    </>
  )
}

export default App