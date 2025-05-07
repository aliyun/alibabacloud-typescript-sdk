// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * rm-7xv******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 221172852******
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49BC2500-8078-5AC4-A545-20AA5945B0E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

