// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
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
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
   * > The end time must be within 24 hours from the start time. Otherwise, the call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical operator for keyword-based search.
   * Default value: and.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Instance ID of the mongos or shard node in the sharded cluster instance.
   * 
   * > This parameter is available only if you set the **DBInstanceId** parameter to instance ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The order in which the returned running logs are sorted by time. Valid values:
   * - asc: ascending order.
   * - desc: descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords for the query. Separate multiple keywords with spaces. You can specify up to 10 keywords.
   * 
   * @example
   * test test2
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * sg-bpxxxxxxxxxxxxxxxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node. You can call [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) to query the role ID.
   * 
   * @example
   * 651xxxxx
   */
  roleId?: string;
  /**
   * @remarks
   * The role of the node in the instance. Valid values:
   * - **primary**: primary node.
   * - **secondary**: secondary node.
   * - **search**: search node.
   * 
   * > If you set the **NodeId** parameter to the ID of a mongos node, the value of **RoleType** can only be **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
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

