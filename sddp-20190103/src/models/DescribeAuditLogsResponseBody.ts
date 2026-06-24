// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeAuditLogsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 139.*.*.57
   */
  clientIp?: string;
  /**
   * @remarks
   * The client port.
   * 
   * @example
   * 35756
   */
  clientPort?: string;
  /**
   * @remarks
   * The user agent of the client.
   * 
   * @example
   * mysql
   */
  clientUa?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @remarks
   * The time when the alert was generated. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The SQL result set.
   * 
   * @example
   * plan_id ~ application_id ~ plan_type ~ plan_name ~ plan_value_id
   */
  dataSet?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * chngc_b2b_migration_sh
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
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
   * The execution status. Valid values: 0 (failed) and 1 (successful).
   * 
   * @example
   * 1
   */
  executeStatus?: number;
  /**
   * @remarks
   * The execution duration in milliseconds.
   * 
   * @example
   * 1751870592000
   */
  executeTime?: number;
  /**
   * @remarks
   * Indicates whether the operation is whitelisted.
   * 
   * @example
   * true
   */
  inWhiteList?: boolean;
  /**
   * @remarks
   * The audit status of the instance.
   * 
   * @example
   * 2
   */
  instanceAuditStatus?: string;
  /**
   * @remarks
   * The description of the data asset.
   * 
   * @example
   * instance dscription
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * **default**: a non-Alibaba Cloud service. This is the default value.
   * 
   * **aliyun**: an Alibaba Cloud service.
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
   * The time when the operation was logged. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1751870592000
   */
  logTime?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * **********8103
   */
  memberAccount?: string;
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
   * The sensitive data detection rule that was matched.
   * 
   * @example
   * Identity Card
   */
  modelName?: string;
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
   * oss-key1
   */
  ossObjectKey?: string;
  /**
   * @remarks
   * The name of the MaxCompute package.
   * 
   * @example
   * test01
   */
  packageName?: string;
  /**
   * @remarks
   * The code of the Alibaba Cloud service. Examples: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service that contains the data asset. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * @example
   * 5
   */
  productId?: number;
  ramConsoleLink?: string;
  /**
   * @remarks
   * The type of the rule.
   * 
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @remarks
   * The ID of the audit rule.
   * 
   * @example
   * 9952275
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
   * The SQL statement in the alert log.
   * 
   * @example
   * select * from test03
   */
  sqlText?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 19********94
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * admin
   */
  userName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: Low
   * 
   * - **2**: Medium
   * 
   * - **3**: High
   * 
   * @example
   * 2
   */
  warnLevel?: string;
  /**
   * @remarks
   * The name of the risk level. Valid values:
   * 
   * - Low
   * 
   * - Medium
   * 
   * - High
   * 
   * @example
   * High risk
   */
  warnLevelName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      clientUa: 'ClientUa',
      columnName: 'ColumnName',
      creationTime: 'CreationTime',
      dataSet: 'DataSet',
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      effectRow: 'EffectRow',
      executeStatus: 'ExecuteStatus',
      executeTime: 'ExecuteTime',
      inWhiteList: 'InWhiteList',
      instanceAuditStatus: 'InstanceAuditStatus',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      ipType: 'IpType',
      logSource: 'LogSource',
      logTime: 'LogTime',
      memberAccount: 'MemberAccount',
      message: 'Message',
      modelName: 'ModelName',
      operateType: 'OperateType',
      ossObjectKey: 'OssObjectKey',
      packageName: 'PackageName',
      productCode: 'ProductCode',
      productId: 'ProductId',
      ramConsoleLink: 'RamConsoleLink',
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
      dataSet: 'string',
      databaseName: 'string',
      dbType: 'string',
      effectRow: 'number',
      executeStatus: 'number',
      executeTime: 'number',
      inWhiteList: 'boolean',
      instanceAuditStatus: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      ipType: 'string',
      logSource: 'string',
      logTime: 'number',
      memberAccount: 'string',
      message: 'string',
      modelName: 'string',
      operateType: 'string',
      ossObjectKey: 'string',
      packageName: 'string',
      productCode: 'string',
      productId: 'number',
      ramConsoleLink: 'string',
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
   * CE4681BA-8019-5BE1-9F4B-8973BEA9CF57
   */
  asyncRequestId?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array of alert logs.
   */
  items?: DescribeAuditLogsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
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
   * The total number of entries returned.
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

