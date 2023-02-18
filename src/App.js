
import './App.css';
import Testimonio from './componentes/Testimonios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que se dice sobre los alumnos UTNG</h1>
      <Testimonio 
      nombre='Pablo'
      pais='Mexico'
      imagen='pablo'
      cargo='Ingeniero de Software'
      empresa='Optimen'
      testimonio='Pablo es muy bueno haciendo lo que hace por eso lo hace haciendo su trabajo que siempre hace para hacerlo mejor de lo que ya lo hace'/>
      <Testimonio
      nombre='Alexis'
      pais='USA'
      imagen='alexis'
      cargo='Ingeniero en Ingenieria'
      empresa='MICROSOFT'
      testimonio='Yo soy genio, invento cosas, que sirven para ser usadas como cosas que se usan'/>
      <Testimonio
      nombre='Carlos'
      pais='Panama'
      imagen='carlos'
      cargo='Licenciado en Inegieria'
      empresa='NatGloal'
      testimonio='Me gusta las cosas grandes y dificiles de trabajar poruqe son un reto para mi'
      />
      </div>
    </div>
  );
}

export default App;
