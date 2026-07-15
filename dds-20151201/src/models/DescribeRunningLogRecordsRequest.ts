// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If this parameter is set to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time is in UTC.
   * 
   * > The end time can be up to 24 hours later than the start time. Otherwise, the call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical operator for the keyword-based query. Default value: `and`.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of a mongos node or shard node in a sharded cluster instance.
   * 
   * > This parameter is available only when the **DBInstanceId** parameter is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The sort order of the running logs to return. Valid values:
   * 
   * - asc: ascending order
   * 
   * - desc: descending order
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords for the query. You can specify up to 10 keywords. Separate multiple keywords with spaces.
   * 
   * @example
   * test test2
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * sg-bpxxxxxxxxxxxxxxxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node. You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation to query the role ID.
   * 
   * @example
   * 651xxxxx
   */
  roleId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * - **primary**: The primary node.
   * 
   * - **secondary**: A secondary node.
   * 
   * > If the **NodeId** parameter is set to the ID of a mongos node, the **RoleType** parameter can only be set to **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time is in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleId: 'string',
      roleType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

