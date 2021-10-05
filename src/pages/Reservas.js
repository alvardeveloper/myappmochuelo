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
  { ID: 1, Reserva: "", Horario: "5:00 pm" },
  { ID: 2, Reserva: "", Horario: "6:00 pm" },
  { ID: 3, Reserva: "", Horario: "7:00 pm" },
  { ID: 4, Reserva: "", Horario: "8:00 pm" },
  { ID: 5, Reserva: "", Horario: "9:00 pm"},
  { ID: 6, Reserva: "", Horario: "10:00 pm" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
        ID: "",
        Reserva: "",
        Horario: "",
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
      if (dato.ID == registro.ID) {
        arreglo[contador].Reserva = dato.Reserva;
        arreglo[contador].Horario = dato.Horario;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(" ¿Estás Seguro que deseas eliminar la reserva? "+dato.ID);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.ID == registro.ID) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.ID=this.state.data.length+1;
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
          <Button color="dark" onClick={()=>this.mostrarModalInsertar()}>Agregar reserva</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Reserva</th>
                <th>Horario</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.ID}>
                  <td>{dato.ID}</td>
                  <td>{dato.Reserva}</td>
                  <td>{dato.Horario}</td>
                  <td>
                    <Button
                      color="light"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="secondary" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Favor de agregar o editar el nombre y apellido de la persona a quien se realiza la reserva en el apartado "Reserva." </h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              ID:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.ID}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Reserva: 
              </label>
              <input
                className="form-control"
                name="Reserva"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Reserva}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Horario: 
              </label>
              <input
                className="form-control"
                name="Horario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Horario}
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
           <div><h3>Crear nueva reserva</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              ID: 
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
              Reserva: 
              </label>
              <input
                className="form-control"
                name="Reserva"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Horario: 
              </label>
              <input
                className="form-control"
                name="Horario"
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