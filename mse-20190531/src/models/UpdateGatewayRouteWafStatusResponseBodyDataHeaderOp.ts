// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems } from "./UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems";


export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp extends $dara.Model {
  /**
   * @remarks
   * The policy.
   */
  headerOpItems?: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems[];
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
      headerOpItems: { 'type': 'array', 'itemType': UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems },
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

