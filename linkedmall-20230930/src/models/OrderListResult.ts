// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderResult } from "./OrderResult";


export class OrderListResult extends $dara.Model {
  /**
   * @remarks
   * The order list.
   */
  orderList?: OrderResult[];
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      orderList: 'orderList',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': OrderResult },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

