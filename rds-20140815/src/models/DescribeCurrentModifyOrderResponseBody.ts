// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCurrentModifyOrderResponseBodyModifyOrder extends $dara.Model {
  /**
   * @remarks
   * The instance family of the instance.
   * 
   * @example
   * x
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores that are supported by the instance type. Unit: cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-cn-nwy39qeys0003r
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The effective time. Valid values:
   * 
   * *   **Immediate**: This is the default value.
   * *   **MaintainTime**: The effective time is within the maintenance window. For more information, see [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/610402.html).
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MTg2MjEwOTkwLCJzdGFydCI6InNob3BpZnktdXNlci1jb3JlXHUwMDAwIn0
   */
  mark?: string;
  /**
   * @remarks
   * The memory capacity that is supported by the instance type. Unit: GB.
   * 
   * @example
   * 1024
   */
  memoryClass?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Succeed,Scheduled,Running,Cancelling,Canceled,Waiting
   */
  status?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 20
   */
  storage?: string;
  /**
   * @remarks
   * The new instance type of the instance. Valid values:
   * 
   * @example
   * mysql.x2.medium.2c
   */
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      classGroup: 'ClassGroup',
      cpu: 'Cpu',
      dbInstanceId: 'DbInstanceId',
      effectiveTime: 'EffectiveTime',
      mark: 'Mark',
      memoryClass: 'MemoryClass',
      status: 'Status',
      storage: 'Storage',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classGroup: 'string',
      cpu: 'string',
      dbInstanceId: 'string',
      effectiveTime: 'string',
      mark: 'string',
      memoryClass: 'string',
      status: 'string',
      storage: 'string',
      targetDBInstanceClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentModifyOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specification change order.
   */
  modifyOrder?: DescribeCurrentModifyOrderResponseBodyModifyOrder[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C87415BE-F5AB-55A4-A60E-A0A329EAF2A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyOrder: 'ModifyOrder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyOrder: { 'type': 'array', 'itemType': DescribeCurrentModifyOrderResponseBodyModifyOrder },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyOrder)) {
      $dara.Model.validateArray(this.modifyOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

