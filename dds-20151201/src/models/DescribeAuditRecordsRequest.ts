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
   * The name of the database. By default, all databases are queried.
   * 
   * @example
   * database****
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > The time range between the start time and the end time cannot exceed 24 hours. Otherwise, the operation fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T13:11:14Z
   */
  endTime?: string;
  /**
   * @remarks
   * The format of the returned audit records. Valid values:
   * 
   * - **File**: Triggers the generation of an audit log file. If you set this parameter to File, only common parameters are returned.
   * 
   * - **Stream** (default): Returns a data stream.
   * 
   * > The **File** parameter is deprecated.
   * 
   * @example
   * Stream
   */
  form?: string;
  /**
   * @remarks
   * The logical operator for the keyword search. The default value is and.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of a Mongos node or a shard node in the sharded cluster instance.
   * 
   * > This parameter is available only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order in which to sort the returned audit log entries by time. Valid values:
   * 
   * - **asc**: Sorts the entries in ascending order.
   * 
   * - **desc**: Sorts the entries in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return. The value must be greater than 0 and must not exceed the maximum value of the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** (default), **50**, and **100**.
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
   * slow
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  /**
   * @remarks
   * The database account. By default, all accounts are queried.
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

