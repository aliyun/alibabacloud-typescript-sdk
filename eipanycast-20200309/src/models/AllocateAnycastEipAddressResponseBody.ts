// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateAnycastEipAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 1422000****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBDB18D8-E91E-4978-8D6C-6E2E3EE10133
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
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

