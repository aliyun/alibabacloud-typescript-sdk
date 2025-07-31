// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShardingDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp114f14849d****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21010996721****
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
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

