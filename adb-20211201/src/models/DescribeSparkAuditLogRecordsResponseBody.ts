// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * s202411061011hzc5d6476000****
   */
  appId?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  clientIp?: string;
  /**
   * @example
   * notFoundIp
   */
  errorMsg?: string;
  /**
   * @example
   * notFoundIpException
   */
  errorTrace?: string;
  /**
   * @example
   * 2022-01-23T16:05:08Z
   */
  executeTime?: string;
  /**
   * @example
   * 1
   */
  innerQueryId?: string;
  /**
   * @example
   * true
   */
  isDiagnosable?: boolean;
  /**
   * @example
   * 999f2439-6b10-xxxx-a5d3-daf3b35c****
   */
  processId?: string;
  /**
   * @example
   * test_job
   */
  resourceGroupName?: string;
  /**
   * @example
   * SELECT * FROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * Statement ID。
   * 
   * @example
   * fbd22066-1c03-xxxx-aa16-6ae28288****
   */
  statementId?: string;
  /**
   * @example
   * SQL_EDITOR
   */
  statementSource?: string;
  /**
   * @example
   * finish
   */
  status?: string;
  /**
   * @example
   * 40000
   */
  totalTime?: number;
  /**
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
   * @example
   * amv-bp1j7******78j8i
   */
  DBClusterId?: string;
  items?: DescribeSparkAuditLogRecordsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * 2D5867CF-423F-559F-BBB1-199A289E****
   */
  requestId?: string;
  /**
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

