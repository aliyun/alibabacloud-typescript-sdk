// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @example
   * js
   */
  action?: string;
  /**
   * @example
   * {"$and":[{"key":"URI","opValue":"prefix-match","values":"/"}]}
   */
  condition?: string;
  /**
   * @example
   * 100030
   */
  logRuleId?: number;
  /**
   * @example
   * 86400
   */
  punishTime?: number;
  /**
   * @example
   * {"threshold":2000,"interval":5,"target":"ip","ttl":600}
   */
  rateLimit?: string;
  /**
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @example
   * 20110849
   */
  ruleId?: number;
  /**
   * @example
   * inner_cc_client_ip_ratelimit
   */
  ruleName?: string;
  /**
   * @example
   * {"field":"ip","mode":"count"}
   */
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      logRuleId: 'LogRuleId',
      punishTime: 'PunishTime',
      rateLimit: 'RateLimit',
      recordName: 'RecordName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      condition: 'string',
      logRuleId: 'number',
      punishTime: 'number',
      rateLimit: 'string',
      recordName: 'string',
      ruleId: 'number',
      ruleName: 'string',
      statistics: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSIntelligentRateLimitRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  ruleInfos?: DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      ruleInfos: 'RuleInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      ruleInfos: { 'type': 'array', 'itemType': DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfos)) {
      $dara.Model.validateArray(this.ruleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

