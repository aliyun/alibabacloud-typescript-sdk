// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * 0
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time, and the time range cannot exceed 1 day. The recommended time range is 1 hour. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-10T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID in the instance. Specify this parameter to query the slow query logs of a specific node.
   * > This parameter is available only when the instance uses the read/write splitting or cluster architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The field based on which the returned results are sorted. Valid values:
   * * **execution_time**: sorts the results based on the start time of request execution. This is the default value.
   * * **latency**: sorts the results based on the execution duration of requests.
   * 
   * @example
   * execution_time
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of the returned results. Valid values:
   * * **ASC**: ascending order.
   * * **DESC**: descending order. This is the default value.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to search the returned results.
   * 
   * @example
   * keyword1
   */
  queryKeyword?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The slow log type. Valid values:
   * * **proxy**: Slow query logs on proxy nodes.
   * * **db**: Slow query logs on data nodes. This is the default value.
   * 
   * @example
   * proxy
   */
  slowLogRecordType?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-10T14:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      slowLogRecordType: 'SlowLogRecordType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      endTime: 'string',
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      slowLogRecordType: 'string',
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

