// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to return events based on the settings of event cancellation. Default value: -1. Valid values:
   * 
   * *   **-1**: returns all events.
   * *   **0**: returns only O\\&M events that cannot be canceled.
   * *   **1**: returns only O\\&M events that can be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: number;
  /**
   * @remarks
   * The filter condition that is used to return events based on the settings of the switching time. Default value: -1. Valid values:
   * 
   * *   **-1**: returns all events.
   * *   **0**: returns only O\\&M events for which the switching time cannot be changed.
   * *   **-1**: returns only O\\&M events for which the switching time can be changed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The type of task configuration change. Valid values:
   * 
   * *   **all** (default): The configurations of all O\\&M tasks are changed.
   * *   **S0**: The configurations of tasks initiated to fix exceptions are changed.
   * *   **S1**: The configurations of system O\\&M tasks are changed.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type. Valid values: **redis**
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance. You can leave this parameter empty. If you configure this parameter, you can specify the name only of one instance.
   * 
   * @example
   * r-wz96fzmpvpr2qnqnlb
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
   * The name of the service. Valid values: RDS, POLARDB, MongoDB, and Redis. For Redis instances, set the value to Redis.
   * 
   * @example
   * Redis
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the O&M task. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * > A value of **all** indicates all region IDs.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The status of an O\\&M event. This parameter is used to filter returned tasks. Valid values:
   * 
   * *   **-1**: filters all events.
   * *   **3**: filters pending events.
   * *   **4**: filters in-progress events.
   * *   **5**: filters successful events.
   * *   **6**: filters failed events.
   * *   **7**: filters canceled events.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The type of the O\\&M event. If this parameter is not specified, all types of O\\&M events are queried.
   * 
   * Valid values:
   * 
   * *   rds_apsradb_upgrade: minor version update
   * *   rds_apsaradb_ha: primary/secondary switchover
   * *   rds_apsaradb_ssl_update: SSL certificate update
   * *   rds_apsaradb_major_upgrade: major version upgrade
   * *   rds_apsradb_transfer: instance migration
   * *   rds_apsaradb_modify_config: network upgrade
   * *   rds_apsaradb_modify_config: instance parameter adjustment
   * *   rds_apsaradb_maxscale: proxy minor version update
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

