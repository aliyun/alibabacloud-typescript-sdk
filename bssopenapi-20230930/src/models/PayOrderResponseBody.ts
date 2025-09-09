// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PayOrderResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 260591304500425
   */
  orderId?: number;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 201437655683478597
   */
  payerId?: number;
  /**
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      orderId: 'OrderId',
      payStatus: 'PayStatus',
      payerId: 'PayerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      orderId: 'number',
      payStatus: 'number',
      payerId: 'number',
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

