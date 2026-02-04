// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account. If you do not specify this parameter, all accounts of the instance are queried.
   * 
   * @example
   * demo
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database in the instance. If you do not specify this parameter, all databases are queried. Valid values: 0 to 255. 0 specifies database 0.
   * 
   * @example
   * 0
   */
  databaseName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > We recommend that you specify a time range of 10 minutes or less because audit logs contain a great number of entries. Do not specify a time range that is longer than one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-25T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address of the client. If you do not specify this parameter, this call applies to all clients.
   * 
   * @example
   * 127.0.0.1
   */
  hostAddress?: string;
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
   * The ID of the node in the instance. You can set this parameter to query the monitoring data of a specified node.
   * 
   * > 
   * 
   * *   This parameter is available only for read/write splitting and cluster instances.
   * 
   * *   You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query node IDs.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword based on which the audit logs are queried. You can specify a command as a keyword to query logs. By default, all commands are queried.
   * 
   * > You can specify only a single keyword in each call.
   * 
   * @example
   * maxclients
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-24T12:10:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      databaseName: 'DatabaseName',
      endTime: 'EndTime',
      hostAddress: 'HostAddress',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      databaseName: 'string',
      endTime: 'string',
      hostAddress: 'string',
      instanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

