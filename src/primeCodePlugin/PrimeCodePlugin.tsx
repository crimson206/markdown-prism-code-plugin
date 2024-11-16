import React, { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prismStyles from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './CopyButton';

export type PrismStylesType = typeof prismStyles;
export type CodeStyleType = keyof PrismStylesType;

export interface CodeBlockProps {
  language: string;
  value: string;
  style: CodeStyleType;
  showCopyButtons?: boolean;
}

export interface CodeProps {
  node?: any,
  inline?: any,
  className?: any,
  children?: any,
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value, style, showCopyButtons = true }) => {
  const htmlRef = React.useRef<HTMLDivElement>(null);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={htmlRef}>
        <SyntaxHighlighter language={language} style={prismStyles[style]} PreTag="div">
          {value}
        </SyntaxHighlighter>
      </div>
      
      {showCopyButtons && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
          <CopyButton getText={() => value} label="Copy Raw" />
          <CopyButton
            getText={() => htmlRef.current ? htmlRef.current.innerHTML : ''}
            label="Copy HTML"
          />
        </div>
      )}
    </div>
  );
};

export class PrimeCodePlugin {
  private initialCodeStyle: CodeStyleType;
  private codeStyles: CodeStyleType[];

  constructor(initialCodeStyle: CodeStyleType = 'darcula') {
    this.initialCodeStyle = initialCodeStyle;
    this.codeStyles = Object.keys(prismStyles) as CodeStyleType[];
  }

  useComponent = () => {
    const [codeStyle, setCodeStyle] = useState<CodeStyleType>(this.initialCodeStyle);

    const handleCodeStyleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
      setCodeStyle(event.target.value as CodeStyleType);
    }, []);

    const CodeStyleSelector: React.FC<React.HTMLAttributes<HTMLDivElement>> = useCallback((props) => (
      <div className="mb-3" {...props}>
        <label htmlFor="codeStyleSelect" className="form-label">Select Code Style:</label>
        <select
          id="codeStyleSelect"
          className="form-select"
          value={codeStyle}
          onChange={handleCodeStyleChange}
        >
          {this.codeStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>
    ), [codeStyle, handleCodeStyleChange]);

    const codeExecute = useCallback(({ node, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <CodeBlock language={match[1]} value={children} style={codeStyle} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }, [codeStyle]);

    return {
      CodeStyleSelector,
      codeExecute: codeExecute,
      codeStyle,
      setCodeStyle
    };
  }
}

export default PrimeCodePlugin;
