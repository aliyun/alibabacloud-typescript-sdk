// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the event can be canceled. Default value: -1. Valid values:
   * 
   * - **-1**: All events.
   * - **0**: Only O&M events that cannot be canceled are returned.
   * - **1**: Only O&M events that can be canceled are returned.
   * 
   * @example
   * 1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the execution time can be modified. Default value: -1. Valid values:
   * 
   * - **-1**: All events.
   * - **0**: Only O&M events whose execution time cannot be modified are returned.
   * - **1**: Only O&M events whose execution time can be modified are returned.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The change level. Default value: all. Valid values:
   * 
   * - **all**: All exception repair and system O&M levels.
   * - **S0**: Exception repair.
   * - **S1**: System O&M.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database engine. Set the value to **redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance. This parameter is optional. If you specify this parameter, you can specify only one instance name.
   * 
   * @example
   * r-wz96fzmpvpr2qnqnlb
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
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
   * The region ID of the pending events. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * > A value of **all** specifies all region IDs.
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
   * The status of the O&M event, which is used to filter the returned tasks. Valid values:
   * * **-1**: All events.
   * * **3**: Pending events.
   * * **4**: Processing events.
   * * **5**: Successfully completed events.
   * * **6**: Failed events.
   * * **7**: Canceled events.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The event type. If this parameter is left empty, all event types are queried.
   * 
   * @example
   * rds_apsradb_transfer
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

