// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client in the query.
   * 
   * @example
   * 100.104.16.251
   */
  clientIp?: string;
  /**
   * @remarks
   * The port number of the client in the query.
   * 
   * @example
   * 53815
   */
  clientPort?: string;
  /**
   * @remarks
   * The client type.
   * 
   * @example
   * mysql
   */
  clientUa?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * ds
   */
  columnName?: string;
  /**
   * @remarks
   * The alert time. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * chngc_b2b_migration_sh
   */
  databaseName?: string;
  /**
   * @remarks
   * The number of affected rows.
   * 
   * @example
   * 10
   */
  effectRow?: number;
  /**
   * @remarks
   * The execution status. Valid values: 0: Failed. 1: Successful.
   * 
   * @example
   * 1
   */
  executeStatus?: number;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 1751870592000
   */
  executeTime?: number;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the alert is in the whitelist.
   * 
   * @example
   * True
   */
  inWhiteList?: boolean;
  /**
   * @remarks
   * The instance audit status.
   * 
   * @example
   * 2
   */
  instanceAuditStatus?: string;
  /**
   * @remarks
   * The description of the data asset instance.
   * 
   * @example
   * instance dscription
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance alias.
   * 
   * @example
   * test-instance-003
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * **default**: Non-Alibaba Cloud services. This is the default value.
   * 
   * **aliyun**: Alibaba Cloud services.
   * 
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * SLOW_SQL
   */
  logSource?: string;
  /**
   * @remarks
   * The log execution time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1751870592000
   */
  logTime?: number;
  /**
   * @remarks
   * The raw log content.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * Drop
   */
  operateType?: string;
  /**
   * @remarks
   * The key of the OSS object.
   * 
   * @example
   * N.A
   */
  ossObjectKey?: string;
  /**
   * @remarks
   * The MaxCompute package name.
   * 
   * @example
   * test01
   */
  packageName?: string;
  /**
   * @remarks
   * The name of the product to which the data asset belongs. Valid values include RDS, PolarDB, and PolarDB-X 2.0.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the product to which the data object belongs. Valid values:
   * 
   * - 3: ADB-MYSQL
   * - 5: RDS
   * - 7: PolarDB-X
   * - 8: PolarDB
   * - 9: ADB-PG
   * - 11: MongoDB
   * - 25: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @remarks
   * The audit rule ID.
   * 
   * @example
   * 9953411
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the audit rule.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select * from test03
   */
  sqlText?: string;
  /**
   * @remarks
   * The name of the table used in the query.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 19********94
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **1**: Low risk.
   * - **2**: Medium risk.
   * - **3**: High risk.
   * 
   * @example
   * 1
   */
  warnLevel?: string;
  /**
   * @remarks
   * The risk level name. Valid values:
   * - Low risk.
   * - Medium risk.
   * - High risk.
   * 
   * @example
   * 1
   */
  warnLevelName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      clientUa: 'ClientUa',
      columnName: 'ColumnName',
      creationTime: 'CreationTime',
      databaseName: 'DatabaseName',
      effectRow: 'EffectRow',
      executeStatus: 'ExecuteStatus',
      executeTime: 'ExecuteTime',
      id: 'Id',
      inWhiteList: 'InWhiteList',
      instanceAuditStatus: 'InstanceAuditStatus',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      ipType: 'IpType',
      logSource: 'LogSource',
      logTime: 'LogTime',
      message: 'Message',
      operateType: 'OperateType',
      ossObjectKey: 'OssObjectKey',
      packageName: 'PackageName',
      productCode: 'ProductCode',
      productId: 'ProductId',
      ruleCategory: 'RuleCategory',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sqlText: 'SqlText',
      tableName: 'TableName',
      userId: 'UserId',
      userName: 'UserName',
      warnLevel: 'WarnLevel',
      warnLevelName: 'WarnLevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientPort: 'string',
      clientUa: 'string',
      columnName: 'string',
      creationTime: 'number',
      databaseName: 'string',
      effectRow: 'number',
      executeStatus: 'number',
      executeTime: 'number',
      id: 'number',
      inWhiteList: 'boolean',
      instanceAuditStatus: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      ipType: 'string',
      logSource: 'string',
      logTime: 'number',
      message: 'string',
      operateType: 'string',
      ossObjectKey: 'string',
      packageName: 'string',
      productCode: 'string',
      productId: 'number',
      ruleCategory: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sqlText: 'string',
      tableName: 'string',
      userId: 'string',
      userName: 'string',
      warnLevel: 'string',
      warnLevelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3926fba5-1774-44f4-af2d-ac7b33e86c3b
   */
  asyncRequestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The IP addresses of the clients in the SQL log records.
   */
  items?: DescribeAuditLogsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7021857-AFD9-5AD6-979D-AA7DFC5AFADF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records. This parameter is valid only for the Redis engine.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncRequestId: 'AsyncRequestId',
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncRequestId: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeAuditLogsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

