// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderLineResult } from "./OrderLineResult";


export class OrderResult extends $dara.Model {
  /**
   * @remarks
   * The order creation time.
   * 
   * @example
   * 2023-09-11T12:22:24.000+08:00
   */
  createDate?: string;
  /**
   * @remarks
   * The distributor ID.
   * 
   * @example
   * 12****01
   */
  distributorId?: string;
  /**
   * @remarks
   * The logistics status. Valid values: 1 (Awaiting Seller\\"s Shipment), 2 (Awaiting Buyer\\"s Confirmation), 3 (Received), 4 (Returned), 5 (Partially Received), 6 (Partially Shipped), and 8 (Logistics Order Not Created).
   * 
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @remarks
   * The order amount, in cents.
   * 
   * @example
   * 100
   */
  orderAmount?: number;
  /**
   * @remarks
   * The reason the order was closed.
   * 
   * @example
   * 系统关单
   */
  orderClosedReason?: string;
  /**
   * @remarks
   * The ID of the main order.
   * 
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @remarks
   * The list of sub-orders.
   */
  orderLineList?: OrderLineResult[];
  /**
   * @remarks
   * The order status. Valid values: 1 (Pending Payment), 2 (Paid), 4 (Closed with Refund), 6 (Transaction Successful), and 8 (Closed).
   * 
   * @example
   * 1
   */
  orderStatus?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
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

