import { useEffect } from "react";
import Table from "../table/Table";
import { useSearchParams } from "react-router-dom";
import useRequestTableData from "./useRequestTableData";
import { Wrapper, TableContentWrapper, TableSection } from "./Request.styled";
import RequestHero from "./RequestHero";
// import useRequestClient from "hooks/useRequestClient";
import { client } from "../../helpers/oracleClient";

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
  // const { setActiveRequest } = useRequestClient();
  const [searchParams] = useSearchParams();
  const { rows, headerCells } = useRequestTableData(searchParams);

  useEffect(() => {

    const requester= searchParams.get("requester")
    const identifier= searchParams.get("identifier")
    const timestamp= searchParams.get("timestamp") && Number(searchParams.get("timestamp"))
    const ancillaryData= searchParams.get("ancillaryData")
    const chainId= searchParams.get("chainId") && Number(searchParams.get("chainId"))

    if( 
      requester &&
      identifier && 
      timestamp && 
      ancillaryData && 
      chainId
    ){
      client.setActiveRequest({requester,identifier,timestamp,ancillaryData,chainId})
    }
  }, [searchParams]);

  return (
    <Wrapper>
      <RequestHero chainId={Number(searchParams.get("chainId")) ?? 0} />
      <TableSection>
        <TableContentWrapper>
          <Table title={"Input Data"} headerCells={headerCells} rows={rows} />
        </TableContentWrapper>
      </TableSection>
    </Wrapper>
  );
};

export default Request;
