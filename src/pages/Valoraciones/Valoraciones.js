import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { nombre: 1, Repartidor: "Alejandro Valencia", Valoracion: "★★★★☆" },
  { nombre: 2, Repartidor: "Ricardo Montes", Valoracion: "★★★★☆" },
  { nombre: 3, Repartidor: "Ivanna Sanchez", Valoracion: "★★★★★" },
  { nombre: 4, Repartidor: "Lucia Garcia", Valoracion: "★★★★☆" },
  { nombre: 5, Repartidor: "Ernesto Torres", Valoracion: "★★★☆☆"},
  { nombre: 6, Repartidor: "Ingrid Campos", Valoracion: "★★★★★" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
        nombre: "",
        Repartidor: "",
        Valoracion: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.nombre == registro.nombre) {
        arreglo[contador].Repartidor = dato.Repartidor;
        arreglo[contador].Valoracion = dato.Valoracion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás seguro que deseas eliminar la valoracion "+dato.nombre);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.nombre == registro.nombre) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.nombre=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="info" onClick={()=>this.mostrarModalInsertar()}> Agrega una nueva valoracion</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID de repartidor</th>
                <th>Repartidor</th>
                <th>Valoraciones</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.nombre}>
                  <td>{dato.nombre}</td>
                  <td>{dato.Repartidor}</td>
                  <td>{dato.Valoracion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              nombre:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Repartidor: 
              </label>
              <input
                className="form-control"
                name="Repartidor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Repartidor}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Valoraciones: 
              </label>
              <input
                className="form-control"
                name="Valoracion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Valoracion}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Agregar una nueva valoracion</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              ID del repartidor: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Repartidor: 
              </label>
              <input
                className="form-control"
                name="Repartidor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Valoraciones: 
              </label>
              <input
                className="form-control"
                name="Valoracion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
