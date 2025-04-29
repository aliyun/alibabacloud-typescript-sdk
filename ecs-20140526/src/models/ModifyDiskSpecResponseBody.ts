// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * >  This parameter is returned only when the category of a subscription disk or the performance level of a subscription ESSD is modified.
   * 
   * @example
   * 20413515388****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the disk category change task.
   * 
   * >  If you only modify the performance level of an ESSD, this parameter is not returned.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

