//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
import FuncProps from './FunceProps'
import StateExample from './StateExample'
import Demo from './Demo'
import Events from './Events'
function App(){
  return(
    <section>
    <StateExample/>
    <FuncProps carname="rolls royce" year="1998"/>
    <Demo price="1st"/>
    <Events/>
    {/*<PropsExample name="mounika" age="20"/>
        <PropsExample name="hema" age="19"/>
        
          <p>hi good afternoon all</p>
          <h1>Have a good day</h1>
          <img src="https://i.pinimg.com/736x/ce/14/20/ce1420adc861d3be19f003086d5d9930.jpg" alt="nyt view"/>
          <ClassComponent/>  */}
    </section>
    )
}
export default App;

