import { Body } from "components/table/Table.styled";
import {
  StyledCellBody,
  StyledHeadRow,
  StyledTableWrapper,
  StyledRow,
} from "./RequestsTable.styled";

import useClient from "hooks/useOracleClient";
import useReader from "hooks/useOracleReader";
import createRequestsTableCells from "./createRequestsTableCells";

const RequestsTable = () => {
  const { state } = useClient();
  const { descendingRequests } = useReader(state);
  const { headerCells, rows } = createRequestsTableCells(descendingRequests);

  return (
    <StyledTableWrapper>
      <StyledHeadRow>
        {headerCells.map((cell, index) => {
          return (
            <StyledCellBody
              key={index}
              className={cell.cellClassName ?? ""}
              size={cell.size}
            >
              {cell.value}
            </StyledCellBody>
          );
        })}
      </StyledHeadRow>
      <Body>
        {rows.map((row, ridx) => {
          return (
            <StyledRow key={ridx}>
              {row.cells.map((cell, cidx) => {
                return (
                  <StyledCellBody
                    className={cell.cellClassName ?? ""}
                    key={cidx}
                    size={cell.size}
                  >
                    {cell.value}
                  </StyledCellBody>
                );
              })}
            </StyledRow>
          );
        })}
      </Body>
    </StyledTableWrapper>
  );
};

export default RequestsTable;