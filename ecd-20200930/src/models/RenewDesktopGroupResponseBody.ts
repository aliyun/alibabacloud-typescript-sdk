// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDesktopGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order IDs.
   */
  orderId?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E55E6732-2028-52FA-AB06-EA29C36B****
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
      orderId: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderId)) {
      $dara.Model.validateArray(this.orderId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

