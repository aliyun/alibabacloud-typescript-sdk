// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsRequest extends $dara.Model {
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
   * The IP address of the request client.
   * 
   * @example
   * 10.*.*.94
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
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * bose_o2o_data
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
   * 1583856000000
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
   * i-2zeftaaq4gqcqb9kfkzg
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **default** (default): non-Alibaba Cloud service
   * 
   * - **aliyun**: Alibaba Cloud service
   * 
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh
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
  /**
   * @remarks
   * The JSON string that specifies whether the query conditions are included.
   * 
   * @example
   * [ {   "isContain" : false,   "queryKey" : "effectRowRange" }, {   "isContain" : false,   "queryKey" : "remoteClientIp" } ]
   */
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
   * The UID of the member accounts.
   * 
   * @example
   * **********8103
   */
  memberAccount?: string;
  /**
   * @remarks
   * The message content.
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
   * Insert
   */
  operateType?: string;
  /**
   * @remarks
   * The key of the OSS object.
   * 
   * @example
   * oss-key
   */
  ossObjectKey?: string;
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
   * The name of the product to which the data asset belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and more.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name to which the data object belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
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
   * select * from test03
   */
  sqlText?: string;
  /**
   * @remarks
   * The start time of the alert log, in milliseconds.
   * 
   * @example
   * 1616068534877
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
      memberAccount: 'MemberAccount',
      message: 'Message',
      operateType: 'OperateType',
      ossObjectKey: 'OssObjectKey',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      ruleAggQuery: 'RuleAggQuery',
      ruleCategory: 'RuleCategory',
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
      memberAccount: 'string',
      message: 'string',
      operateType: 'string',
      ossObjectKey: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      ruleAggQuery: 'boolean',
      ruleCategory: 'string',
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

