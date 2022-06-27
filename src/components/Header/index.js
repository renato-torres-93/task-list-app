import {Link} from 'react-router-dom'

function Header ()
{
  return (
    <header>
      <h2>Menu</h2>
      <Link to='/'>Home</Link>
    </header>
  )
}
export default Header