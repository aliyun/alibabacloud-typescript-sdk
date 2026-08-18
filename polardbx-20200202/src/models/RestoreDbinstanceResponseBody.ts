// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 12345
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-XXXX-XXXX-XXXX-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

