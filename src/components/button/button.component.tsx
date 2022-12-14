import {FC, ButtonHTMLAttributes} from 'react';
import {
    BaseButton, LoadingSpinner,
    InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    inverted = 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonComponent: FC<ButtonProps> = ({children, buttonType, isLoading, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton disabled={isLoading} {...otherProps}>
        {isLoading ? <LoadingSpinner/> : children}
    </CustomButton>;
}

export default ButtonComponent