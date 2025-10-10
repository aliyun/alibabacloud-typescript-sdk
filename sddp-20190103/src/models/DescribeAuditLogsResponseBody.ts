// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeAuditLogsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 139.*.*.57
   */
  clientIp?: string;
  /**
   * @example
   * 35756
   */
  clientPort?: string;
  /**
   * @example
   * mysql
   */
  clientUa?: string;
  /**
   * @example
   * hide14
   */
  columnName?: string;
  /**
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @example
   * plan_id ~ application_id ~ plan_type ~ plan_name ~ plan_value_id
   */
  dataSet?: string;
  /**
   * @example
   * chngc_b2b_migration_sh
   */
  databaseName?: string;
  dbType?: string;
  /**
   * @example
   * 10
   */
  effectRow?: number;
  /**
   * @example
   * 1
   */
  executeStatus?: number;
  /**
   * @example
   * 1751870592000
   */
  executeTime?: number;
  /**
   * @example
   * true
   */
  inWhiteList?: boolean;
  /**
   * @example
   * 2
   */
  instanceAuditStatus?: string;
  /**
   * @example
   * instance dscription
   */
  instanceDescription?: string;
  /**
   * @example
   * rm-1234
   */
  instanceName?: string;
  /**
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @example
   * SLOW_SQL
   */
  logSource?: string;
  /**
   * @example
   * 1751870592000
   */
  logTime?: number;
  /**
   * @example
   * **********8103
   */
  memberAccount?: string;
  /**
   * @example
   * success
   */
  message?: string;
  modelName?: string;
  /**
   * @example
   * Drop
   */
  operateType?: string;
  /**
   * @example
   * oss-key1
   */
  ossObjectKey?: string;
  /**
   * @example
   * com.sinosoft.chinalife
   */
  packageName?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @example
   * 9952275
   */
  ruleId?: string;
  /**
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @example
   * select schema_name, catalog_name, default_character_set_name as encoding from information_schema.schemata  order by 1
   */
  sqlText?: string;
  /**
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @example
   * 19********94
   */
  userId?: string;
  /**
   * @example
   * admin
   */
  userName?: string;
  /**
   * @example
   * 2
   */
  warnLevel?: string;
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
   * @example
   * CE4681BA-8019-5BE1-9F4B-8973BEA9CF57
   */
  asyncRequestId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeAuditLogsResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A7021857-AFD9-5AD6-979D-AA7DFC5AFADF
   */
  requestId?: string;
  /**
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

