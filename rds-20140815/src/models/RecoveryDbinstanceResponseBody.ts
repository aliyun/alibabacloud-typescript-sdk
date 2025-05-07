// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 54325****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFB6083A-7699-489B-8278-C0CB4793A96E
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

