import React, { useEffect, useRef } from 'react';

export interface JotFormProps {
  formId: string;
  className?: string;
  style?: React.CSSProperties;
}

export const JotForm = ({ formId, className = '', style = {} }: JotFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentFormRef = formRef.current;

    if (currentFormRef) {
      const script = document.createElement('script');
      script.src = `https://form.jotform.com/jsform/${formId}`;
      script.async = true;
      currentFormRef.appendChild(script);
    }

    return () => {
      if (currentFormRef) {
        currentFormRef.innerHTML = '';
      }
    };
  }, [formId]);

  return (
    <div className={className} style={style} data-testid="jotform-container">
      <div ref={formRef} />
    </div>
  );
};
