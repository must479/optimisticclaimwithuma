import { useEffect } from "react";
import Table from "../table/Table";
import { useSearchParams } from "react-router-dom";
import useRequestTableData from "./useRequestTableData";
import {
  Wrapper,
  TableContentWrapper,
  TableSection,
  TableTitle,
} from "./Request.styled";
import RequestHero from "./RequestHero";
import useClient from "hooks/useOracleClient";
import useReader from "hooks/useOracleReader";
import SettledTable from "./SettledTable";
import dataIcon from "assets/data-icon.svg";
import useOracleClient from "hooks/useOracleClient";
/* Search Params:
  {
    requester: string;
    identifier: string;
    ancillaryData: string;
    timestamp: number;
    chainId: number;
  } 
*/

const Request = () => {
  const { client, state } = useClient();
  const [searchParams] = useSearchParams();
  const { rows, headerCells } = useRequestTableData(searchParams);

  const { requestState, proposer, disputer, proposedPrice } = useReader(state);
  const oracleContext = useOracleClient();

  useEffect(() => {
    const requester = searchParams.get("requester")?.trim();
    const identifier = searchParams.get("identifier");
    const timestamp =
      searchParams.get("timestamp") && Number(searchParams.get("timestamp"));
    const ancillaryData = searchParams.get("ancillaryData");
    const chainId =
      searchParams.get("chainId") && Number(searchParams.get("chainId"));

    if (requester && identifier && timestamp && ancillaryData && chainId) {
      client.setActiveRequest({
        requester,
        identifier,
        timestamp,
        ancillaryData,
        chainId,
      });
    }
  }, [searchParams, client]);

  return (
    <Wrapper>
      {requestState !==
        oracleContext.oracle.types.state.RequestState.Settled && (
        <RequestHero chainId={Number(searchParams.get("chainId")) ?? 0} />
      )}

      <TableSection>
        {requestState ===
          oracleContext.oracle.types.state.RequestState.Settled && (
          <TableContentWrapper>
            <SettledTable
              proposer={proposer}
              disputer={disputer}
              proposedPrice={proposedPrice}
              chainId={
                searchParams.get("chainId") &&
                Number(searchParams.get("chainId"))
              }
            />
          </TableContentWrapper>
        )}
        <TableContentWrapper>
          <Table
            title={
              <TableTitle>
                <img src={dataIcon} alt="data_icon" />
                <span>Input Data</span>
              </TableTitle>
            }
            headerCells={headerCells}
            rows={rows}
          />
        </TableContentWrapper>
      </TableSection>
    </Wrapper>
  );
};

export default Request;
