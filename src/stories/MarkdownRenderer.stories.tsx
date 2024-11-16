import { MarkdownRenderer } from './MarkdownRenderer'
import MarkdownString from './markdown.md?raw'
import React from 'react'

export default {
    title: 'MarkdownRenderer'
}

export const Default = () => {
    return <MarkdownRenderer markdownString={MarkdownString}/>
}

export const WithHiddenCodeSelector = () => {
    return <MarkdownRenderer markdownString={MarkdownString} selectorProps={{ style: { display: 'none' } }}/>
}

export const WithCustomStyle = () => {
    return (
      <MarkdownRenderer
        markdownString={MarkdownString}
        selectorProps={{
          style: {
            backgroundColor: '#f0f8ff',
            padding: '10px',
            border: '2px solid #333',
            borderRadius: '5px',
          },
        }}
      />
    );
  };