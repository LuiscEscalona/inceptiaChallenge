import {
  ClientList,
  ClientDetailsTable,
  TopBar,
  Filters
} from "../../components";

export default function Reports() {
  return (
    <div className="reports-container">
      <div className="reports">
        <div className="header">
          <TopBar />
          <Filters />
        </div>
        <div className="master-detail">
          <ClientList />
          <ClientDetailsTable />
        </div>
      </div>
    </div>
  );
}
