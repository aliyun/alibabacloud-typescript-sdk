// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNatTopNResponseBodyNatGatewayTopN } from "./GetNatTopNresponseBodyNatGatewayTopN";


export class GetNatTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Network Intelligence Service (NIS) is activated. The NatGatewayTopN parameter returns an empty array when NIS is not activated.
   * 
   * *   **true**: activated
   * *   **false**: not activated
   * 
   * @example
   * true
   */
  isTopNOpen?: boolean;
  /**
   * @remarks
   * An array of statistics about real-time SNAT performance ranking.
   */
  natGatewayTopN?: GetNatTopNResponseBodyNatGatewayTopN[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 77C512B5-12f3-f892-BD94-88A98271C1A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTopNOpen: 'IsTopNOpen',
      natGatewayTopN: 'NatGatewayTopN',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTopNOpen: 'boolean',
      natGatewayTopN: { 'type': 'array', 'itemType': GetNatTopNResponseBodyNatGatewayTopN },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natGatewayTopN)) {
      $dara.Model.validateArray(this.natGatewayTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

