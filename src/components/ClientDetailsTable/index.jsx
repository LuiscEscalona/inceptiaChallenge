import React from "react";
import { useSelector } from "react-redux";

const ClientDetailsTable = () => {
  const { clientDetail } = useSelector((store) => store.clients);
  return (
    <div className="client-details-table">
      <table>
        <tr>
          <th>Gestionado</th>
          <th>ID Caso</th>
          <th>DNI</th>
          <th>Grupo</th>
          <th>Orden</th>
          <th>Llamada</th>
          <th>LLamada</th>
          <th>Estado</th>
        </tr>
        {clientDetail?.results && clientDetail.results.length > 0 ? (
          clientDetail.results.map((detail) => {
            return (
              <tr key={detail.case_uuid}>
                <td>{detail.last_updated}</td>
                <td>{detail.case_uuid}</td>
                <td>{detail.phone}</td>
                <td>{detail.extra_metadata.dni}</td>
                <td>{detail.extra_metadata.grupo}</td>
                <td>{detail.extra_metadata.orden}</td>
                <td>{detail.case_duration}</td>
                <td>{detail.status}</td>
              </tr>
            );
          })
        ) : (
          <div className="msj-table">Seleccionar un cliente</div>
        )}
      </table>
    </div>
  );
};

export default ClientDetailsTable;
