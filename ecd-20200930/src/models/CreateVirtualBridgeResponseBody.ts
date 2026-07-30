// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBridgeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * @example
   * vb-sjfaijfish***
   */
  bridgeId?: string;
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
   * 93AD30C1-16B8-5C54-AD23-A51FF53F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeId: 'BridgeId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeId: 'string',
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

