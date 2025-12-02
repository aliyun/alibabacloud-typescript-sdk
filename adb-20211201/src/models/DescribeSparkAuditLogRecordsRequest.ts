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
   * > 
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1j7******78j8i
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Query end time. The end time must be later than the start time, and the interval between them must be less than 1 day. Format: yyyy-MM-ddTHH:mmZ (UTC time).
   * 
   * @example
   * 2025-09-25T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Sort the SQL statements based on specified fields. The format is a JSON array that preserves order, and composite sorting is performed according to the sequence of objects in the array. Each object contains two fields: `Field` and `Type`. For example:`[{"Field":"CreateTime", "Type": "desc" }]`. Where:
   * 
   * *   `Field` specifies the field that is used to sort the SQL statements. Valid values:
   * 
   *     *   `ResourceGroupName`: The name of the resource group.
   *     *   `Status` :SQL execution status.
   *     *   `User`: The username that is used to execute the SQL statement.
   *     *   `ExecuteTime`: The start time of SQL execution.
   *     *   `TotalTime`: The amount of time consumed to execute the SQL statement.
   *     *   `ProcessId`: Query ID.
   *     *   `ClientIp`: The source IP address.
   *     *   `StatementSource`: The source from which the query was initiated.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Desc`: Descending order.
   *     *   `Asc`: Ascending order.
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
   * The number of entries to return on each page.
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
   * This parameter is deprecated.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612293.html) operation to query the available regions and zones, including region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query the resource group ID within a cluster.
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
   * Query start time. Format: *yyyy-MM-ddTHH:mmZ* (UTC time).
   * 
   * >  We recommend that you set the query start time to any point in time within 30 days.
   * 
   * @example
   * 2025-09-25T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the statement.
   * 
   * @example
   * fbd22066-1c03-xxxx-aa16-6ae28288****
   */
  statementId?: string;
  /**
   * @remarks
   * The source from which the query was initiated.
   * 
   * Valid values:
   * 
   * *   SQL_EDITOR: SQL_EDITOR.
   * *   JDBC: JDBC.
   * 
   * @example
   * SQL_EDITOR
   */
  statementSource?: string;
  /**
   * @remarks
   * The execution status of the SQL statement.
   * 
   * Valid values:
   * 
   * *   cancel: The task is canceled .
   * *   finished: The execution succeeds .
   * *   error:The execution fails .
   * *   timeout: The execution timed out .
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  totalTime?: string;
  /**
   * @remarks
   * The username that is used to execute SQL statements.
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

