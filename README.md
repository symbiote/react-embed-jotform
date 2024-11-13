# REACT EMBED JOTFORM

A React component library for easily embedding JotForm forms into your React applications.

## INSTALLATION

```bash
npm install @symbiotetech/react-embed-jotform
```

## USAGE

```tsx
import { JotForm } from '@symbiotetech/react-embed-jotform';

function App() {
  return (
    <JotForm
      formId="your-jotform-id-here"
      // Optional props
      className="jotform-form"
      style={{
        width: '500px',
      }}
    />
  );
}
```

## Props

| Prop        | Type          | Required | Description                             |
| ----------- | ------------- | -------- | --------------------------------------- |
| `formId`    | string        | Yes      | The JotForm form ID to embed            |
| `className` | string        | No       | Custom CSS class name for the container |
| `style`     | CSSProperties | No       | Inline styles for the container         |

## Development

To start development:

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run Storybook for development:

   ```bash
   npm run storybook:dev
   ```

4. Run tests:
   ```bash
   npm run test
   ```

---

Made with love by [Symbiote](https://www.symbiote.com.au/)
