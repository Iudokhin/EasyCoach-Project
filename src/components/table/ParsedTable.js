import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import useParseCSV from "../../utils/custom_hooks/useParseCSV";
import LiveChart from "../live_chart/LiveChart";
import { useState } from "react";
import { nextColumn, prevColumn } from "../../utils/functions/utilFuncs";
const file = require("../../data/u20advancedstats.csv");

export default function ParsedTable() {
  let { headers, players } = useParseCSV(file);
  let [series, setSeries] = useState(2);

  const genInc = nextColumn(series, setSeries, headers)
  const genDec = prevColumn(series, setSeries)

  return (
    <>
      <Table responsive borderless striped size="sm">
        <thead>
          <tr>
            {headers.map((el, index) => (
              <TableHeader key={index} data={el} />
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((el, index) => {
            return <TableRow key={index} data={el} />;
          })}
        </tbody>
      </Table>
      <LiveChart players={players} series={series} title={headers[series]} />
      <div className="text-center mb-5">
        <button className='btn btn-primary rounded me-4' onClick={() => genDec.next()}>PREV column</button>
        <button className='btn btn-primary rounded' onClick={() => genInc.next()}>NEXT column</button>
      </div>
      
    </>
  );
}
