import {useState, FormEvent, ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usernameSignInStart} from "../../store/user/user.action";

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {ButtonsContainer, SignInContainer} from "./sign-in-form.styles";

const defaultFormFields = {
    username: '',
    password: ''
}

const SignInFormComponent = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {username, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(usernameSignInStart(username, password));
            resetFormFields();
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your username and password</span>
            <form onSubmit={handleSubmit}>

                <FormInputComponent label='Username'
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='username'
                                    value={username}/>

                <FormInputComponent label='Password'
                                    type='password'
                                    required
                                    onChange={handleChange}
                                    name='password'
                                    value={password}/>
                <ButtonsContainer>
                    <ButtonComponent type='submit'>
                        Sign In
                    </ButtonComponent>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInFormComponent;