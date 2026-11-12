// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 276025619780639
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4D10F506-E583-517D-A937-4378BF0C665B
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

