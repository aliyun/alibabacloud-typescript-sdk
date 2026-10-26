// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCurrentModifyOrderResponseBodyModifyOrder extends $dara.Model {
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * x
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores that correspond to the instance specifications. Unit: cores.
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
   * * **Immediate** (default): takes effect immediately.
   * * **MaintainTime**: takes effect within the maintenance window. For more information, see [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/610402.html).
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The mark.
   * 
   * @example
   * None
   */
  mark?: string;
  /**
   * @remarks
   * The memory capacity that corresponds to the instance specifications. Unit: GB.
   * 
   * @example
   * 1024
   */
  memoryClass?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Succeed,Scheduled,Running,Cancelling,Canceled,Waiting
   */
  status?: string;
  /**
   * @remarks
   * The storage description.
   * 
   * @example
   * 20
   */
  storage?: string;
  /**
   * @remarks
   * The target instance specifications for the specification change.
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

