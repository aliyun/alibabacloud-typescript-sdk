// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop IDs. If multiple cloud desktops are created in a single call, multiple cloud desktop IDs are returned.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456789
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The file transfer task ID.
   * 
   * @example
   * task_abc123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

