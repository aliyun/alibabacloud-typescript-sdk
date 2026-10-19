// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the event can be canceled. Default value: -1. Valid values:
   * 
   * - **-1**: all events.
   * - **0**: returns only O&M events that cannot be canceled.
   * - **1**: returns only O&M events that can be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the event time can be modified. Default value: -1. Valid values:
   * 
   * - **-1**: all events.
   * - **0**: returns only O&M events whose time cannot be modified.
   * - **1**: returns only O&M events whose time can be modified.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The change level. Default value: all. Valid values:
   * 
   * - **all**: all levels including exception recovery and system O&M.
   * - **S0**: exception recovery.
   * - **S1**: system O&M.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type. Set this parameter to **redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The instance name. This parameter is optional. If specified, only one instance name is allowed.
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
   * The product name. Valid values: RDS, POLARDB, MongoDB, and Redis. For Redis instances, set this parameter to Redis.
   * 
   * @example
   * Redis
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query available region IDs.
   * > Set this parameter to **all** to query events in all regions.
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
   * The status of the O&M event. This parameter is used to filter the returned events. Valid values:
   * * **-1**: all events.
   * * **3**: pending events.
   * * **4**: events being processed.
   * * **5**: events that ended successfully.
   * * **6**: events that ended with failures.
   * * **7**: canceled events.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The event type of the O&M event. If this parameter is left empty, all types are queried.
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

