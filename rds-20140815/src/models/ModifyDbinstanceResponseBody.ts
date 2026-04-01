// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 221172852******
   */
  orderId?: number;
  /**
   * @example
   * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
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

