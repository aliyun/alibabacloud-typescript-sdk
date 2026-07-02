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
   * hide14
   */
  columnName?: string;
  /**
   * @remarks
   * The alert time, in milliseconds.
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
   * The database name.
   * 
   * @example
   * chngc_b2b_migration_sh
   */
  databaseName?: string;
  /**
   * @remarks
   * The database type.
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
   * The execution status. Valid values:
   * - 0: failed.
   * - 1: succeeded.
   * 
   * @example
   * 1
   */
  executeStatus?: number;
  /**
   * @remarks
   * The execution duration, in milliseconds.
   * 
   * @example
   * 1751870592000
   */
  executeTime?: number;
  /**
   * @remarks
   * Indicates whether the entry is whitelisted.
   * 
   * @example
   * true
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
   * The name of the asset instance.
   * 
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * **default** (default): non-Alibaba Cloud service
   * 
   * **aliyun**: Alibaba Cloud service
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
   * The log execution time.
   * 
   * @example
   * 1751870592000
   */
  logTime?: number;
  /**
   * @remarks
   * The UID of the member accounts.
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
   * The sensitive data model that was matched.
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
   * The MaxCompute package name.
   * 
   * @example
   * test01
   */
  packageName?: string;
  /**
   * @remarks
   * The name of the product to which the column data in the data asset table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and more.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name to which the data asset belongs. Valid values:
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: RDS.
   * - **6**: SELF_DB.
   * 
   * @example
   * 5
   */
  productId?: number;
  ramConsoleLink?: string;
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
   * The audit policy ID.
   * 
   * @example
   * 9952275
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the audit policy.
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
   * The table name.
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
   * - **1**: Low.
   * - **2**: Medium.
   * - **3**: High.
   * 
   * @example
   * 2
   */
  warnLevel?: string;
  /**
   * @remarks
   * The name of the risk level. Valid values:
   * - Low.
   * - Medium.
   * - High.
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
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of alert logs.
   */
  items?: DescribeAuditLogsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
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

