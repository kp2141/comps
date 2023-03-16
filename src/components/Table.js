import { Fragment } from "react";
function Table({ data, config,keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header){
        return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });
  const renderedData = data.map((item) => {
    const renderedConfig = config.map((conf)=>{
        return <td key={conf.label} className="p-3">{conf.render(item)}</td>
    })


    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderedConfig}
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
}

export default Table;
