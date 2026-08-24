// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2c548e83-1473-4fda-b3dc-5a189074ead5
   */
  asyncRequestId?: string;
  /**
   * @remarks
   * The IP address of the request client.
   * 
   * @example
   * 11.26.118.7
   */
  clientIp?: string;
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
   * The current page number.
   * 
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * TestDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The range of affected rows.
   * 
   * @example
   * in[1 33]
   */
  effectRowRange?: string;
  /**
   * @remarks
   * The end time of the alert log. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 15682887991222
   */
  endTime?: number;
  /**
   * @remarks
   * The range of execution time.
   * 
   * @example
   * in[1000 2000]
   */
  executeTimeRange?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * rm-t4ni1cezz5y3xxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **default** (default): non-Alibaba Cloud service.
   * 
   * - **aliyun**: Alibaba Cloud service.
   * 
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @remarks
   * The language type for sending and receiving messages. Default value: zh_cn. Valid values:
   * 
   * - zh_cn: Chinese.
   * - en_us: English.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to load the whitelist status.
   * 
   * @example
   * false
   */
  loadWhiteList?: boolean;
  logQueryOpJson?: string;
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
   * The operation type.
   * 
   * @example
   * Insert
   */
  operateType?: string;
  /**
   * @remarks
   * The key of the OSS storage object.
   * 
   * @example
   * N.A
   */
  ossObjectKey?: string;
  /**
   * @remarks
   * The maximum number of records per page. Default value: 10.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the product to which the data asset belongs. Valid values: **RDS, PolarDB, PolarDB-X 2.0**, and others.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name to which the data object belongs. Valid values:
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
   * Specifies whether to perform an aggregate query.
   * 
   * @example
   * true
   */
  ruleAggQuery?: boolean;
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
   * The ID of the audit policy.
   * 
   * @example
   * 9953411
   */
  ruleID?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 867028
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the audit policy.
   * 
   * @example
   * test_rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The content of the SQL statement.
   * 
   * @example
   * SELECT * FROM test where name = \\"das\\"
   */
  sqlText?: string;
  /**
   * @remarks
   * The start time of the alert log, in milliseconds.
   * 
   * @example
   * 1608888296000
   */
  startTime?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      asyncRequestId: 'AsyncRequestId',
      clientIp: 'ClientIp',
      clientUa: 'ClientUa',
      currentPage: 'CurrentPage',
      databaseName: 'DatabaseName',
      effectRowRange: 'EffectRowRange',
      endTime: 'EndTime',
      executeTimeRange: 'ExecuteTimeRange',
      instanceName: 'InstanceName',
      ipType: 'IpType',
      lang: 'Lang',
      loadWhiteList: 'LoadWhiteList',
      logQueryOpJson: 'LogQueryOpJson',
      logSource: 'LogSource',
      operateType: 'OperateType',
      ossObjectKey: 'OssObjectKey',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      ruleAggQuery: 'RuleAggQuery',
      ruleCategory: 'RuleCategory',
      ruleID: 'RuleID',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sqlText: 'SqlText',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncRequestId: 'string',
      clientIp: 'string',
      clientUa: 'string',
      currentPage: 'number',
      databaseName: 'string',
      effectRowRange: 'string',
      endTime: 'number',
      executeTimeRange: 'string',
      instanceName: 'string',
      ipType: 'string',
      lang: 'string',
      loadWhiteList: 'boolean',
      logQueryOpJson: 'string',
      logSource: 'string',
      operateType: 'string',
      ossObjectKey: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      ruleAggQuery: 'boolean',
      ruleCategory: 'string',
      ruleID: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sqlText: 'string',
      startTime: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

