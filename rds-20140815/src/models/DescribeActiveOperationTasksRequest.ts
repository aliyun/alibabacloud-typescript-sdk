// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to return tasks based on the settings of task cancellation. Default value: -1. Valid values:
   * 
   * *   **-1**: returns all tasks.
   * *   **0**: returns only tasks that cannot be canceled.
   * *   **1**: returns only tasks that can be canceled.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * The filter condition that is used to return tasks based on the settings of the switching time. Default value: -1. Valid values:
   * 
   * *   **-1**: returns all tasks.
   * *   **0**: returns only tasks for which the switching time cannot be changed.
   * *   **1**: returns only tasks for which the switching time can be changed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The filter condition that is used to return tasks based on the task level. Default value: all. Valid values:
   * 
   * *   **all**: all types
   * *   **S0**: returns the tasks of the exception fixing level.
   * *   **S1**: returns the tasks of the system O\\&M level.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The type of the database. Default value: all. Valid values: mysql, pgsql, and mssql.
   * 
   * @example
   * all
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance. You can leave this parameter empty. If you configure this parameter, you can specify the name only of one instance.
   * 
   * @example
   * rm-bp191w771kd3****
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The name of the service. Valid values: RDS, POLARDB, MongoDB, and Redis. For RDS instances, set the value to RDS.
   * 
   * @example
   * RDS
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * >  The value **all** indicates all regions.
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
   * The status of the task, which is used as a filter condition to return tasks.
   * 
   * *   **-1**: all tasks
   * *   **3**: pending
   * *   **4**: being processed
   * *   **5**: completed
   * *   **6**: failed
   * *   **7**: canceled
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **rds_apsaradb_ha**: primary/secondary switchover
   * *   **rds_apsaradb_transfer**: instance migration
   * *   **rds_apsaradb_upgrade**: update of the minor engine version
   * *   **rds_apsaradb_maxscale**: update of the minor version of the proxy
   * *   **all**: all types
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

