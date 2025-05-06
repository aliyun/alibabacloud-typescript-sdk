// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePendingMaintenanceActionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the historical tasks. Valid values:
   * 
   * *   **0**: returns the current task.
   * *   **1**: returns the historical tasks.
   * 
   * Default value: **0**.
   * 
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Specify the parameter to a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the pending event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the regions and zones that are supported by PolarDB.
   * >- You can set this parameter to **all** to view all pending events within your account.
   * >- If you set `Region` to **all**, you must set `TaskType` to **all**.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task type of pending events. Valid values:
   * 
   * *   **DatabaseSoftwareUpgrading**: database software upgrades
   * *   **DatabaseHardwareMaintenance**: hardware maintenance and upgrades
   * *   **DatabaseStorageUpgrading**: database storage upgrades
   * *   **DatabaseProxyUpgrading**: minor version upgrades of the proxy
   * *   **all**: queries the details of the pending events of all preceding types.
   * 
   * > If the `Region` parameter is set to **all**, the `TaskType` parameter must be set to **all**.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

