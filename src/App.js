import {GlobalStyle} from "./global.styles";
import AuthenticationComponent from "./routes/authentication/authentication.component";


const App = () => {
  return (
      <>
        <GlobalStyle/>
          <AuthenticationComponent/>
      </>
);
}

export default App;
