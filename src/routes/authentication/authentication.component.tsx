import SignInFormComponent from "../../components/sign-in-form/sign-in-form.component";

import {AuthenticationContainer} from "./authentication.styles";

const AuthenticationComponent = () => {
    return (
        <AuthenticationContainer>
            <SignInFormComponent />
        </AuthenticationContainer>
    );
};

export default AuthenticationComponent;
