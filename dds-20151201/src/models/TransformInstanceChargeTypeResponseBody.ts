// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21084641369****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8F1D721-6439-4257-A89C-F1E8E9C9****
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

