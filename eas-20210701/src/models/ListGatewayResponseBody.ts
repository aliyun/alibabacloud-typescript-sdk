// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayResponseBodyGateways } from "./ListGatewayResponseBodyGateways";


export class ListGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateways.
   */
  gateways?: ListGatewayResponseBodyGateways[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of private gateways returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gateways: 'Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateways: { 'type': 'array', 'itemType': ListGatewayResponseBodyGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gateways)) {
      $dara.Model.validateArray(this.gateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

