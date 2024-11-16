import { default as React, FC } from 'react';
interface CopyButtonProps {
    getText: () => string;
    label?: string;
    successMessage?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const CopyButton: FC<CopyButtonProps>;
export default CopyButton;
