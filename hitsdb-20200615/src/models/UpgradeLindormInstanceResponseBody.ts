// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeLindormInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 111111111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2A7D4F9D-AA26-4E15-A2B1-3E4792C6****
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

