// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Valid values:
   * 
   * - **-1** (default): returns all tasks.
   * 
   * - **0**: returns only tasks that cannot be canceled.
   * 
   * - **1**: returns only tasks that can be canceled.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the time can be changed. Valid values:
   * 
   * - **-1** (default): returns all tasks.
   * 
   * - **0**: returns only tasks whose time cannot be changed.
   * 
   * - **1**: returns only tasks whose time can be changed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The level of the task. Valid values:
   * 
   * - **all** (default): returns all tasks.
   * 
   * - **S0**: returns tasks for exception fixing.
   * 
   * - **S1**: returns tasks for system O\\&M.
   * 
   * @example
   * ***
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type. Default value: **all**.
   * 
   * @example
   * mongoDb
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance. This parameter is optional. You can specify only one instance name.
   * 
   * @example
   * dds-bp16aaccfe10****
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The product name. For MongoDB instances, set this parameter to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the region where the pending event is located. Call the DescribeRegions operation to obtain the region ID.
   * 
   * > A value of **all** indicates all region IDs.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task status. This parameter filters the returned tasks.
   * 
   * - **-1**: all tasks.
   * 
   * - **3**: pending tasks.
   * 
   * - **4**: running tasks.
   * 
   * - **5**: successfully completed tasks.
   * 
   * - **6**: failed tasks.
   * 
   * - **7**: canceled tasks.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **rds_apsaradb_ha**: primary-secondary node switchover.
   * 
   * - **rds_apsaradb_transfer**: instance migration.
   * 
   * - **rds_apsaradb_upgrade**: minor version upgrade.
   * 
   * - **rds_apsaradb_maxscale**: proxy minor version upgrade.
   * 
   * - **all**: all task types.
   * 
   * @example
   * all
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

