// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList } from "./ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList";


export class ListGatewayIntranetLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The internal endpoints.
   */
  intranetLinkedVpcList?: ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      intranetLinkedVpcList: 'IntranetLinkedVpcList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      intranetLinkedVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intranetLinkedVpcList)) {
      $dara.Model.validateArray(this.intranetLinkedVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

