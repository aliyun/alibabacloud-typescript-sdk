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
   * The end time of the query. The end time must be later than the start time, and the time range cannot exceed one day. Set the time range to one hour. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
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
   * The node ID in the instance. Specify this parameter to query the slow logs of a specific node.
   * > This parameter is available only when the instance uses the read/write splitting or cluster architecture.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The sort criterion of the returned results. Valid values:
   * * **execution_time**: execution start time of the request (default)
   * * **latency**: execution duration of the request
   * 
   * @example
   * execution_time
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of the returned results. Valid values:
   * * **ASC**: ascending order
   * * **DESC**: descending order (default)
   * 
   * @example
   * ASC
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
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
   * The keyword used to search the returned results. Specify a string value.
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
   * * **proxy**: slow logs of proxy nodes
   * * **db**: slow logs of data nodes (default)
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

