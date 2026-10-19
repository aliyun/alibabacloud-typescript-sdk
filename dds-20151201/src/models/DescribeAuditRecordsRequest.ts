// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsRequest extends $dara.Model {
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
   * The name of the database. The default value is all databases.
   * 
   * @example
   * database****
   */
  database?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > The time range between the end time and the start time cannot exceed 24 hours. If the time range exceeds 24 hours, the call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T13:11:14Z
   */
  endTime?: string;
  /**
   * @remarks
   * The display format of the returned audit records. Valid values:
   * - **File**: Triggers the generation of an audit log file. If you set this parameter to this value, only common parameters are returned.
   * - **Stream** (default): Returns a data stream.
   * 
   * > The **File** value is deprecated.
   * 
   * @example
   * Stream
   */
  form?: string;
  /**
   * @remarks
   * The logical operator for keyword search. The default value is and.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Instance ID of a mongos node or shard node in the sharded cluster instance.
   * 
   * > This parameter is available only when **DBInstanceId** is set to instance ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order in which the queried slow logs are sorted by time. Valid values:
   * - **asc**: sorts results in ascending order by time.
   * - **desc**: sorts results in descending order by time.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **30** (default), **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords to query. Separate multiple keywords with spaces. You can specify a maximum of 10 keywords.
   * 
   * @example
   * slow
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  /**
   * @remarks
   * The database account. The default value is all accounts.
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

