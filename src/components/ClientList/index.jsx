import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients, getClientDetail } from "../../redux/slices/clientSlice";
import thunkStates from "../../redux/thunkStates";

const ClientList = () => {
  const dispatch = useDispatch();
  const { clients, isLoading } = useSelector((store) => store.clients);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  const handleClientList = (id) => {
    dispatch(getClientDetail(id));
  };

  return (
    <div className="client-list">
      <h3>Clients</h3>
      <div className="client-list content">
        {isLoading === thunkStates.FULFILLED &&
          clients.map((client, ind) => (
            <div
              onClick={() => handleClientList(client.id)}
              className="client"
              key={ind}
            >
              {client.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClientList;
