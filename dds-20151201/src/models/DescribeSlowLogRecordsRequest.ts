// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the `NodeId` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fc7e65108****
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The end time must be within 24 hours from the start time. Otherwise, the query fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-16T14:13Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical relationship among multiple keywords.
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * > This parameter is required only when you specify the `DBInstanceId` parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp18b06ebc21****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order of time in which the log entries to return are sorted. Valid values:
   * 
   * *   asc: The log entries are sorted by time in ascending order.
   * *   desc: The log entries are sorted by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
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
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * test test1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-15T14:13Z
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

