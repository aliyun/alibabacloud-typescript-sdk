// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Valid values:
   * - **0**: not allowed.
   * - **1**: allowed.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the execution time can be modified. Valid values:
   * - **0**: not allowed.
   * - **1**: allowed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The task level. Valid values:
   * - **all** (default): all levels.
   * - **S0**: exception fix tasks.
   * - **S1**: system O&M tasks.
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
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
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
   * The region.
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
   * The task status, which is used to filter returned tasks. Valid values:
   * - **-1**: all tasks.
   * - **3**: pending tasks.
   * - **4**: in-progress tasks.
   * - **5**: successfully completed tasks.
   * - **6**: failed tasks.
   * - **7**: canceled tasks.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * - **rds_apsaradb_upgrade**: minor version update.
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

