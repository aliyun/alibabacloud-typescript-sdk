// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDeliveryTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The log category.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * 
   * 1.  cn: the Chinese mainland.
   * 2.  sg: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery destination.
   * 
   * @example
   * oss
   */
  deliveryType?: string;
  /**
   * @remarks
   * The status of the delivery task.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The name of the delivery task.
   * 
   * @example
   * testoss11
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

