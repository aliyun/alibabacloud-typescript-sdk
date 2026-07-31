// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * > An order ID is returned only when you expand a subscription disk.
   * 
   * @example
   * 20413515388****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3CD6886-D8D0-4FEE-B93E-1B732396****
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

