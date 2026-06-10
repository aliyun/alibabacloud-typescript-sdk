// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID. You can find the order ID in <props="china">[Expenses and Costs > My Orders](https://billing-cost.console.aliyun.com/order/list). <props="intl">[Expenses and Costs > Order Management](https://usercenter2-intl.aliyun.com/order/list).
   * 
   * @example
   * 219861020660568
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F89BBB13-8B3B-5C8A-A700-EEFDC17B8227
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

