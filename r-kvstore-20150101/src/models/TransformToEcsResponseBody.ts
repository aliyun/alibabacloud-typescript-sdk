// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToEcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20905403119****
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DAABAD9B-890F-56C0-806C-6144946594AB
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

