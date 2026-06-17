// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cancellation. Valid values:
   * 
   * - **-1** (default): all.
   * 
   * - **0**: returns only tasks that do not allow cancellation.
   * 
   * - **1**: returns only tasks that allow cancellation.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether to allow time modification. Valid values:
   * 
   * - **-1** (default): all.
   * 
   * - **0**: returns only tasks that do not allow time modification.
   * 
   * - **1**: returns only tasks that allow time modification.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The task level. Valid values:
   * 
   * - **all** (default): all.
   * 
   * - **S0**: returns tasks at the abnormal repair level.
   * 
   * - **S1**: returns tasks at the system maintenance level.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query detailed information about all clusters under your account, including cluster IDs.
   * 
   * @example
   * pc-3ns***********d5d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the pending event.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - -1: all tasks.
   * 
   * - 3: pending tasks.
   * 
   * - 4: tasks in progress.
   * 
   * - 5: successfully completed tasks.
   * 
   * - 6: failed tasks.
   * 
   * - 7: canceled tasks.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The type of the pending event task. Valid values:
   * 
   * - **DatabaseSoftwareUpgrading**: database software upgrade
   * 
   * - **DatabaseHardwareMaintenance**: hardware maintenance and upgrade
   * 
   * - **DatabaseStorageUpgrading**: database storage upgrade
   * 
   * - **DatabaseProxyUpgrading**: proxy minor version upgrade
   * 
   * - **all**: returns all types of pending events
   * 
   * > When `Region` is set to **all**, `TaskType` must also be set to **all**.
   * 
   * @example
   * DatabaseProxyUpgrading
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      status: 'number',
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

