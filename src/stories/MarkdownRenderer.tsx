import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PrimeCodePlugin } from '../primeCodePlugin/PrimeCodePlugin'


export interface MarkdownRendererProps {
  markdownString: string;
  selectorProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdownString,
  selectorProps
}) => {

  const codePlugin = new PrimeCodePlugin('tomorrow');
  const { CodeStyleSelector, codeExecute } = codePlugin.useComponent();

  const components = {
    code: codeExecute,
  }

  return (
    <div>
      <CodeStyleSelector key="code" {...selectorProps}/>
      <ReactMarkdown
        components={components}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
