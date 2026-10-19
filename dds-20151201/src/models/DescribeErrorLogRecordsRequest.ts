// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > If you specify a sharded cluster instance ID for this parameter, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
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
   * The end time of the query. The end time must be later than the start time, and the interval between the end time and the start time cannot exceed one day. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-02T12:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical operator for keyword search. Default value: and.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of a mongos node or shard node in the sharded cluster instance.
   * 
   * > This parameter is available only when the **DBInstanceId** parameter is set to a sharded cluster instance ID.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
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
   * The keywords to search for. Separate multiple keywords with spaces. You can specify a maximum of 10 keywords.
   * 
   * @example
   * test test1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node in the instance. Valid values:
   * - **primary**: primary node.
   * - **secondary**: secondary node.
   * - **search**: search node.
   * 
   * > If the **NodeId** parameter is set to a mongos node ID, this parameter can only be set to **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

