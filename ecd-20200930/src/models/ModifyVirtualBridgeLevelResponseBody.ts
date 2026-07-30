// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBridgeLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456789
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7E4322D-D679-5ACB-A909-490D2F0E****
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
      orderId: 'number',
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

