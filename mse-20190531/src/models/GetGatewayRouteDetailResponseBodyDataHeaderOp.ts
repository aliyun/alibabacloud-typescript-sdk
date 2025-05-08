// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems } from "./GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems";


export class GetGatewayRouteDetailResponseBodyDataHeaderOp extends $dara.Model {
  /**
   * @remarks
   * The information about headers.
   */
  headerOpItems?: GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      headerOpItems: 'HeaderOpItems',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerOpItems: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headerOpItems)) {
      $dara.Model.validateArray(this.headerOpItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

