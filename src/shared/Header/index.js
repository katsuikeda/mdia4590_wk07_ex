/* - index.js in the root of a component simplifies imports in other files
     because it is the default location
   - IE from the root folder if we didn't have this file we'd have to use
     import TodoList from './components/Todo/List/List';   
*/
import Header from './Header.jsx';

export default Header;