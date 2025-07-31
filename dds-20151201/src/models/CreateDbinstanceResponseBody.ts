// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp144a7f2db8****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21077576248****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
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

