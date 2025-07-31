// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21084641369****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61B05CCF-EBAB-4BF3-BA67-D77256A721E2
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

