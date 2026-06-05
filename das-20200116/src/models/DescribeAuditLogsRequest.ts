// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogsRequest extends $dara.Model {
  /**
   * @example
   * 2c548e83-1473-4fda-b3dc-5a189074ead5
   */
  asyncRequestId?: string;
  /**
   * @example
   * 11.26.118.7
   */
  clientIp?: string;
  clientUa?: string;
  /**
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @example
   * TestDB
   */
  databaseName?: string;
  /**
   * @example
   * in[1 33]
   */
  effectRowRange?: string;
  /**
   * @example
   * 15682887991222
   */
  endTime?: number;
  /**
   * @example
   * in[1000 2000]
   */
  executeTimeRange?: string;
  /**
   * @example
   * rm-t4ni1cezz5y3xxxx
   */
  instanceName?: string;
  /**
   * @example
   * aliyun
   */
  ipType?: string;
  /**
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @example
   * false
   */
  loadWhiteList?: boolean;
  /**
   * @example
   * SLOW_SQL
   */
  logSource?: string;
  /**
   * @example
   * Insert
   */
  operateType?: string;
  /**
   * @example
   * N.A
   */
  ossObjectKey?: string;
  /**
   * @example
   * 30
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
  /**
   * @example
   * true
   */
  ruleAggQuery?: boolean;
  /**
   * @example
   * 10
   */
  ruleCategory?: string;
  /**
   * @example
   * 9953411
   */
  ruleID?: string;
  /**
   * @example
   * 867028
   */
  ruleId?: string;
  /**
   * @example
   * test_rule
   */
  ruleName?: string;
  /**
   * @example
   * SELECT * FROM test where name = \\"das\\"
   */
  sqlText?: string;
  /**
   * @example
   * 1608888296000
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

