// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123412341234123
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E19E345-101D-4014-946C-****
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

