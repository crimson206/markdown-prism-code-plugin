import React, { useState, useCallback, FC } from 'react';

interface CopyButtonProps {
  getText: () => string;
  label?: string;
  successMessage?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CopyButton: FC<CopyButtonProps> = ({
  getText,
  label = 'Copy',
  successMessage = 'Copied!',
  className = '',
  style = {}
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCopy = useCallback(() => {
    const text = getText();
    navigator.clipboard.writeText(text).then(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    });
  }, [getText]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={handleCopy}
        className={className}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '5px',
          cursor: 'pointer',
          borderRadius: '4px',
          ...style
        }}
      >
        {label}
      </button>
      {showSuccess && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'green',
          color: 'white',
          padding: '2px 5px',
          borderRadius: '3px',
          marginTop: '5px',
          fontSize: '0.8em'
        }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default CopyButton;