// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456789
   */
  orderId?: string;
  /**
   * @remarks
   * A list of order IDs.
   */
  orderIds?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      orderIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

