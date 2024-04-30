
# ReactPlayerModal

A simple and reusable React modal component for playing videos with ReactPlayer, allowing customization of specific style properties of the modal.

## Installation

```bash
npm install react-player
npm install @octa-labs/react-player-modal
```

## Usage

Import `ReactPlayerModal` into your React component and pass the necessary props including the URL and optional style customizations for the modal.

```jsx
import ReactPlayerModal from '@octa-labs/react-player-modal';

const App = () => {
  const customStyles = {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div>
      <ReactPlayerModal 
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        modalStyle={customStyles}
      />
    </div>
  );
};

export default App;
```

## Props

`ReactPlayerModal` accepts all props suitable for `ReactPlayer` along with an additional `modalStyle` object for styling the modal:

| Prop        | Type                | Description                                     |
|-------------|---------------------|-------------------------------------------------|
| `modalStyle`| `ModalStyleProps`   | Customizable styles for the modal's background, padding, and border-radius. |

## Features

- Easy to use modal for playing videos.
- Customizable modal appearance with specific style properties: background, padding, and border-radius.
- Inherits all player configuration options from `ReactPlayer`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
