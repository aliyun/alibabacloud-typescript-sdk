// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database to be queried. By default, all databases are queried.
   * 
   * @example
   * database****
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > The end time must be within 24 hours from the start time. Otherwise, the query fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T13:11:14Z
   */
  endTime?: string;
  /**
   * @remarks
   * The form of the audit log that the operation returns. Valid values:
   * 
   * *   **File**: triggers the generation of audit logs. If this parameter is set to File, only common parameters are returned.
   * *   **Stream** (default): returns data streams.
   * 
   * @example
   * Stream
   */
  form?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
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
   * The ID of the mongos node or shard node in the instance.
   * 
   * > This parameter takes effect only when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order of time in which the log entries to return are sorted. Valid values:
   * 
   * *   **asc**: The log entries are sorted by time in ascending order.
   * *   **desc**: The log entries are sorted by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The valid value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 30. Valid values: **30**, **50**, and **100**.
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
   * slow
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  /**
   * @remarks
   * The user of the database. If you do not specify this parameter, this operation returns records of all users.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      form: 'Form',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      form: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

