// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > - You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1j7******78j8i
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time, and the interval between the start time and the end time must be less than one day.
   * Format: yyyy-MM-ddTHH:mmZ (UTC).
   * 
   * @example
   * 2025-09-25T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting rule for SQL statements based on specified fields. The value is a JSON array that specifies composite sorting in the order of the input array. The array contains the `Field` and `Type` fields. Example: `[{"Field":"TotalTime", "Type": "desc" }]`.
   * 
   * - `Field`: the name of the field to sort by. Valid values:
   *     - `ResourceGroupName`: the name of the resource group.
   *     - `Status`: the execution status of the SQL statement.
   *     - `User`: the username that executed the SQL statement.
   *     - `ExecuteTime`: the start time of the SQL execution.
   *     - `TotalTime`: the execution duration of the SQL statement.
   *     - `ProcessId`: the query ID.
   *     - `ClientIp`: the source IP address.
   *     - `StatementSource`: the source from which the query is initiated.
   * 
   * - `Type`: the sorting type. Valid values (case-insensitive):
   *     - `Desc`: descending order.
   *     - `Asc`: ascending order.
   * 
   * @example
   * [{\\"Field\\":\\"ExecuteTime\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 999f2439-6b10-xxxx-a5d3-daf3b35c****
   */
  processId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612293.html) operation to view the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to view the resource group ID of the cluster.
   * 
   * @example
   * test_job
   */
  resourceGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The keyword in the SQL statement.
   * 
   * @example
   * test_table_name
   */
  SQLText?: string;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-MM-ddTHH:mmZ</i> (UTC).
   * > Set the start time to a point in time within the last 30 days.
   * 
   * @example
   * 2025-09-25T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The statement ID.
   * 
   * @example
   * fbd22066-1c03-xxxx-aa16-6ae28288****
   */
  statementId?: string;
  /**
   * @remarks
   * The source from which the query is initiated.
   * 
   * @example
   * SQL_EDITOR
   */
  statementSource?: string;
  /**
   * @remarks
   * The execution status of the SQL statement.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  totalTime?: string;
  /**
   * @remarks
   * The username that executed the SQL statement.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processId: 'ProcessId',
      proxyUser: 'ProxyUser',
      regionId: 'RegionId',
      resourceGroupName: 'ResourceGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLText: 'SQLText',
      startTime: 'StartTime',
      statementId: 'StatementId',
      statementSource: 'StatementSource',
      status: 'Status',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      processId: 'string',
      proxyUser: 'string',
      regionId: 'string',
      resourceGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLText: 'string',
      startTime: 'string',
      statementId: 'string',
      statementSource: 'string',
      status: 'string',
      totalTime: 'string',
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

