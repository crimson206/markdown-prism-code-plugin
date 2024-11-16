import { default as React } from 'react';
import * as prismStyles from 'react-syntax-highlighter/dist/esm/styles/prism';
export type PrismStylesType = typeof prismStyles;
export type CodeStyleType = keyof PrismStylesType;
export interface CodeBlockProps {
    language: string;
    value: string;
    style: CodeStyleType;
    showCopyButtons?: boolean;
}
export interface CodeProps {
    node?: any;
    inline?: any;
    className?: any;
    children?: any;
}
export declare const CodeBlock: React.FC<CodeBlockProps>;
export declare class PrimeCodePlugin {
    private initialCodeStyle;
    private codeStyles;
    constructor(initialCodeStyle?: CodeStyleType);
    useComponent: () => {
        CodeStyleSelector: React.FC<React.HTMLAttributes<HTMLDivElement>>;
        codeExecute: ({ node, className, children, ...props }: CodeProps) => React.JSX.Element;
        codeStyle: "a11yDark" | "atomDark" | "base16AteliersulphurpoolLight" | "cb" | "coldarkCold" | "coldarkDark" | "coyWithoutShadows" | "coy" | "darcula" | "dark" | "dracula" | "duotoneDark" | "duotoneEarth" | "duotoneForest" | "duotoneLight" | "duotoneSea" | "duotoneSpace" | "funky" | "ghcolors" | "gruvboxDark" | "gruvboxLight" | "holiTheme" | "hopscotch" | "lucario" | "materialDark" | "materialLight" | "materialOceanic" | "nightOwl" | "nord" | "okaidia" | "oneDark" | "oneLight" | "pojoaque" | "prism" | "shadesOfPurple" | "solarizedDarkAtom" | "solarizedlight" | "synthwave84" | "tomorrow" | "twilight" | "vs" | "vscDarkPlus" | "xonokai" | "zTouch";
        setCodeStyle: React.Dispatch<React.SetStateAction<"a11yDark" | "atomDark" | "base16AteliersulphurpoolLight" | "cb" | "coldarkCold" | "coldarkDark" | "coyWithoutShadows" | "coy" | "darcula" | "dark" | "dracula" | "duotoneDark" | "duotoneEarth" | "duotoneForest" | "duotoneLight" | "duotoneSea" | "duotoneSpace" | "funky" | "ghcolors" | "gruvboxDark" | "gruvboxLight" | "holiTheme" | "hopscotch" | "lucario" | "materialDark" | "materialLight" | "materialOceanic" | "nightOwl" | "nord" | "okaidia" | "oneDark" | "oneLight" | "pojoaque" | "prism" | "shadesOfPurple" | "solarizedDarkAtom" | "solarizedlight" | "synthwave84" | "tomorrow" | "twilight" | "vs" | "vscDarkPlus" | "xonokai" | "zTouch">>;
    };
}
export default PrimeCodePlugin;
