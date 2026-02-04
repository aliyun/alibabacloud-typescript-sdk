// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 0
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time range cannot exceed one day. We recommend that you specify 1 hour. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-22T14:11Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node in the instance. You can set this parameter to query the slow query logs of a specified node.
   * 
   * >  This parameter is available only for read/write splitting and cluster instances.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The dimension by which to sort the results. Default value: execution_time. Valid values:
   * 
   * *   **execution_time**: sorts the results by query start time.
   * *   **latency**: sorts the results by query latency.
   * 
   * @example
   * execution_time
   */
  orderBy?: string;
  /**
   * @remarks
   * The sorting order of the results to return. Default value: DESC. Valid values:
   * 
   * *   **ASC**: ascending order
   * *   **DESC**: descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword based on which slow logs are queried. You can set this parameter to a value of the string type.
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
   * The type of the slow logs. Default value: db. Valid values:
   * 
   * *   **proxy**: slow logs of proxy nodes
   * *   **db**: slow logs of data nodes
   * 
   * @example
   * proxy
   */
  slowLogRecordType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-10T14:11Z
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

