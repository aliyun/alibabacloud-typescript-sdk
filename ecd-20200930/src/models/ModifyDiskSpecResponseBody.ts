// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order. You can obtain the ID of an order from the [Expenses and Costs > Orders](https://usercenter2-intl.aliyun.com/order/list) page.
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

