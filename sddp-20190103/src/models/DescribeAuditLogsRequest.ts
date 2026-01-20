// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsRequest extends $dara.Model {
  /**
   * @example
   * CE4681BA-8019-5BE1-9F4B-8973BEA9CF57
   */
  asyncRequestId?: string;
  /**
   * @example
   * 10.*.*.94
   */
  clientIp?: string;
  /**
   * @example
   * mysql
   */
  clientUa?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * bose_o2o_data
   */
  databaseName?: string;
  /**
   * @example
   * in[1 33]
   */
  effectRowRange?: string;
  /**
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @example
   * in[1000 2000]
   */
  executeTimeRange?: string;
  /**
   * @example
   * i-2zeftaaq4gqcqb9kfkzg
   */
  instanceName?: string;
  /**
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * false
   */
  loadWhiteList?: boolean;
  /**
   * @example
   * [ {   "isContain" : false,   "queryKey" : "effectRowRange" }, {   "isContain" : false,   "queryKey" : "remoteClientIp" } ]
   */
  logQueryOpJson?: string;
  /**
   * @example
   * SLOW_SQL
   */
  logSource?: string;
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
  /**
   * @example
   * Insert
   */
  operateType?: string;
  /**
   * @example
   * oss-key
   */
  ossObjectKey?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
  ruleAggQuery?: boolean;
  /**
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @example
   * 994007
   */
  ruleID?: string;
  ruleId?: string;
  ruleName?: string;
  /**
   * @example
   * select * from test03
   */
  sqlText?: string;
  /**
   * @example
   * 1616068534877
   */
  startTime?: number;
  /**
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
      memberAccount: 'string',
      message: 'string',
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

