// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN } from "./GetVbrFlowTopNresponseBodyVirtualBorderRouterFlowlogTopN";


export class GetVbrFlowTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The ranking result of hybrid cloud traffic data.
   */
  virtualBorderRouterFlowlogTopN?: GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualBorderRouterFlowlogTopN: 'VirtualBorderRouterFlowlogTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualBorderRouterFlowlogTopN: { 'type': 'array', 'itemType': GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterFlowlogTopN)) {
      $dara.Model.validateArray(this.virtualBorderRouterFlowlogTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

