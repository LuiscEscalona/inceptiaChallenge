import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUntilDate, setFromDate } from "../../redux/slices/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { from, until } = useSelector((store) => store.filters.date);
  return (
    <div className="filters">
      <input
        onChange={(e) => dispatch(setFromDate(e.target.value))}
        type="date"
        value={from}
      />
      <input
        onChange={(e) => dispatch(setUntilDate(e.target.value))}
        type="date"
        value={until}
      />
    </div>
  );
};

export default Filters;
