// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN } from "./GetTransitRouterFlowTopNresponseBodyTransitRouterFlowTopN";


export class GetTransitRouterFlowTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking result of inter-region traffic data.
   */
  transitRouterFlowTopN?: GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterFlowTopN: 'TransitRouterFlowTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterFlowTopN: { 'type': 'array', 'itemType': GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterFlowTopN)) {
      $dara.Model.validateArray(this.transitRouterFlowTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

