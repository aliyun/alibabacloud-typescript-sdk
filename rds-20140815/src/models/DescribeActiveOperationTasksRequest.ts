// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Default value: -1. Valid values:
   * 
   * - **-1**: all tasks.
   * - **0**: tasks that cannot be canceled.
   * - **1**: tasks that can be canceled.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the execution time can be modified. Default value: -1. Valid values:
   * - **-1**: all tasks.
   * - **0**: tasks whose execution time cannot be modified.
   * - **1**: tasks whose execution time can be modified.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The task level. Default value: all. Valid values:
   * 
   * - **all**: all tasks.
   * - **S0**: exception recovery tasks.
   * - **S1**: system O&M tasks.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database engine. Default value: all. Valid values: mysql, pgsql, mssql, and others.
   * 
   * @example
   * all
   */
  dbType?: string;
  /**
   * @remarks
   * The instance name. This parameter is optional. If you specify this parameter, you can specify only one instance name.
   * 
   * @example
   * rm-bp191w771kd3****
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number, which must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 25. Maximum value: 100.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The product name. Valid values: RDS, POLARDB, MongoDB, and Redis. For an ApsaraDB RDS instance, set the value to RDS.
   * 
   * @example
   * RDS
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the DescribeRegions operation to query the region ID.
   * > A value of **all** specifies all region IDs.
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
   * The task status, which is used to filter the returned tasks. Valid values:
   * * **-1**: all tasks.
   * * **3**: pending tasks.
   * * **4**: tasks in progress.
   * * **5**: successfully completed tasks.
   * * **6**: failed tasks.
   * * **7**: canceled tasks.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * * **rds_apsaradb_ha**: primary and secondary node switch.
   * * **rds_apsaradb_transfer**: instance migration.
   * * **rds_apsaradb_upgrade**: minor engine version update.
   * * **rds_apsaradb_maxscale**: proxy minor version upgrade.
   * * **all**: all task types.
   * 
   * @example
   * rds_apsaradb_upgrade
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

