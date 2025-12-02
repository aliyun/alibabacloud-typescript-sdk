// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202411061011hzc5d6476000****
   */
  appId?: string;
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
   * The SQL execution error message.
   * 
   * @example
   * notFoundIp
   */
  errorMsg?: string;
  /**
   * @remarks
   * The SQL execution error stack trace.
   * 
   * @example
   * notFoundIpException
   */
  errorTrace?: string;
  /**
   * @remarks
   * The start time of the SQL statement. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2022-01-23T16:05:08Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The ID of the query executed within the Spark application.
   * 
   * @example
   * 1
   */
  innerQueryId?: string;
  /**
   * @remarks
   * Whether it can be diagnosed.
   * 
   * @example
   * true
   */
  isDiagnosable?: boolean;
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
   * The resource group name.
   * 
   * @example
   * test_job
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM adb_hdfs_import_source
   */
  SQLText?: string;
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
   * *   error: The execution fails .
   * *   timeout: The execution of the command timed out.
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
   * 40000
   */
  totalTime?: number;
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
      appId: 'AppId',
      clientIp: 'ClientIp',
      errorMsg: 'ErrorMsg',
      errorTrace: 'ErrorTrace',
      executeTime: 'ExecuteTime',
      innerQueryId: 'InnerQueryId',
      isDiagnosable: 'IsDiagnosable',
      processId: 'ProcessId',
      resourceGroupName: 'ResourceGroupName',
      SQLText: 'SQLText',
      statementId: 'StatementId',
      statementSource: 'StatementSource',
      status: 'Status',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientIp: 'string',
      errorMsg: 'string',
      errorTrace: 'string',
      executeTime: 'string',
      innerQueryId: 'string',
      isDiagnosable: 'boolean',
      processId: 'string',
      resourceGroupName: 'string',
      SQLText: 'string',
      statementId: 'string',
      statementSource: 'string',
      status: 'string',
      totalTime: 'number',
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

export class DescribeSparkAuditLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1j7******78j8i
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of SQL audit logs.
   */
  items?: DescribeSparkAuditLogRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D5867CF-423F-559F-BBB1-199A289E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeSparkAuditLogRecordsResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

