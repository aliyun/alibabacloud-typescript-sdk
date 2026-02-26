// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderLineResult } from "./OrderLineResult";


export class OrderResult extends $dara.Model {
  /**
   * @example
   * 2023-09-01T12:00:00.000Z
   */
  createDate?: string;
  /**
   * @example
   * 12****01
   */
  distributorId?: string;
  /**
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @example
   * 100
   */
  orderAmount?: number;
  /**
   * @example
   * 系统关单
   */
  orderClosedReason?: string;
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  orderLineList?: OrderLineResult[];
  /**
   * @example
   * 1
   */
  orderStatus?: string;
  /**
   * @example
   * D12***111
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'createDate',
      distributorId: 'distributorId',
      logisticsStatus: 'logisticsStatus',
      orderAmount: 'orderAmount',
      orderClosedReason: 'orderClosedReason',
      orderId: 'orderId',
      orderLineList: 'orderLineList',
      orderStatus: 'orderStatus',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      distributorId: 'string',
      logisticsStatus: 'string',
      orderAmount: 'number',
      orderClosedReason: 'string',
      orderId: 'string',
      orderLineList: { 'type': 'array', 'itemType': OrderLineResult },
      orderStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderLineList)) {
      $dara.Model.validateArray(this.orderLineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

