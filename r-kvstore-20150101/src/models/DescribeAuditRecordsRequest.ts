// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account. If you do not specify this parameter, the audit logs of all accounts are queried.
   * 
   * @example
   * demo
   */
  accountName?: string;
  /**
   * @remarks
   * The database in the instance. If you do not specify this parameter, the audit logs of all databases are queried. Valid values: 0 to 255. For example, 0 indicates database 0.
   * 
   * @example
   * 0
   */
  databaseName?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > Because audit logs contain a large number of entries, specify a time range of up to 10 minutes and a maximum of 1 day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-25T12:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address of the client. If you do not specify this parameter, the audit logs of all IP addresses are queried.
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
   * The ID of the node in the instance. Specify this parameter to query the monitoring information of a specific node.
   * 
   * > * This parameter is available only when the instance uses the read/write splitting or cluster architecture.
   * > * You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query the node ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to query audit logs based on a specific command. By default, the audit logs of all executed commands are queried.
   * 
   * > You can specify only one keyword.
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
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
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

