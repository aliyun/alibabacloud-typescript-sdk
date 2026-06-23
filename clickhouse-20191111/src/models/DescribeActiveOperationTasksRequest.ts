// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Valid values:
   * 
   * - **0**: The task cannot be canceled.
   * 
   * - **1**: The task can be canceled.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the time can be changed. Valid values:
   * 
   * - **0**: The time cannot be changed.
   * 
   * - **1**: The time can be changed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The task level. Valid values:
   * 
   * - **all** (Default): All levels.
   * 
   * - **S0**: Returns tasks for fixing exceptions.
   * 
   * - **S1**: Returns tasks for system O\\&M.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * clickhouse
   */
  dbType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * cc-bp191w*******
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (Default)
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
   * The product ID.
   * 
   * @example
   * clickhouse
   */
  productId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status. This parameter is used to filter tasks.
   * 
   * - **-1:** All tasks.
   * 
   * - **3:** Tasks to be processed.
   * 
   * - **4:** Tasks in progress.
   * 
   * - **5:** Successfully completed tasks.
   * 
   * - **6:** Failed tasks.
   * 
   * - **7:** Canceled tasks.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **rds_apsaradb_upgrade**: Minor version upgrade.
   * 
   * - **all**: All task types.
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
      dbType: 'string',
      insName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
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

