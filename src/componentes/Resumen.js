import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso, datos } = props;

  const pintarDato = (datos) => {
    const entradas = Object.entries(datos);

    return entradas.map((entrada) => <li>{`${entrada[0]}: ${entrada[1]}`}</li>);
  };
  return (
    <>
      <h2>Resumen</h2>
      <ul>
        {pintarDato(datos.datosPersonales)}
        {pintarDato(datos.datosRegistro)}
        {pintarDato(datos.datosAcceso)}
      </ul>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
};
