// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBInstanceMajorVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * pgm-bp1gm3yh0ht1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21128667463****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 006729E5-2A33-5955-89E3-651D3F44EBE6
   */
  requestId?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 416980000
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

