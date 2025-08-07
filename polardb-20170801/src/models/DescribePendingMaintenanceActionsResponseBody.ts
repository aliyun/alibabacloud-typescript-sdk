// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePendingMaintenanceActionsResponseBodyTypeList extends $dara.Model {
  /**
   * @remarks
   * The number of pending events.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The task type of pending events. Valid values:
   * 
   * *   **DatabaseSoftwareUpgrading**: database software upgrades
   * *   **DatabaseHardwareMaintenance**: hardware maintenance and upgrades
   * *   **DatabaseStorageUpgrading**: database storage upgrades
   * *   **DatabaseProxyUpgrading**: minor version upgrades of the proxy
   * 
   * @example
   * DatabaseSoftwareUpgrading
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 314127C2-B6C1-4F58-B1F6-E6B645******
   */
  requestId?: string;
  /**
   * @remarks
   * The details of pending events.
   */
  typeList?: DescribePendingMaintenanceActionsResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribePendingMaintenanceActionsResponseBodyTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

