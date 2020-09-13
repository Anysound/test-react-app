import React from 'react';
import ItemsList from './components/items-list';

// function App() {

//     // add this to not trigger eslint no-undef
//     /* global Modernizr */
//     console.log(Modernizr);
//   if (Modernizr.awesomeNewFeature) {
//     alert(true);
//   } 

//   return (
//     <section className="feeds">
//       <h1 className="feeds__header">Ты сегодня покормил кота?</h1>
//       <ItemsList />
//     </section>
//   );
// }

// export default App;

export default class App extends React.Component {
  render() {
    return (
      <section className="feeds">
        <h1 className="feeds__header">Ты сегодня покормил кота?</h1>
        <ItemsList />
      </section>
    );
  }
}