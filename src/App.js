import React from 'react';
import ContentList from './components/ContentList';
import InsertItemInput from './components/InsertItemInput';
import './stylesheet/App.css';

function App() {

  const [ arrayList, setArrayList ] = React.useState([]);

  return (
    <div className="App">

      <div className='App__cardBox'>

        <InsertItemInput {...{arrayList, setArrayList}}/>

        <ContentList {...{arrayList, setArrayList}}/>

      </div>

    </div>
  );
}

export default App;
