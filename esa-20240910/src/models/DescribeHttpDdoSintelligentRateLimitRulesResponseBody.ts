// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @remarks
   * The action to perform.
   * 
   * @example
   * js
   */
  action?: string;
  /**
   * @remarks
   * The conditions that trigger the rule.
   * 
   * @example
   * {"$and":[{"key":"URI","opValue":"prefix-match","values":"/"}]}
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the protection rule for log records.
   * 
   * @example
   * 100030
   */
  logRuleId?: number;
  /**
   * @remarks
   * The duration of the penalty in seconds.
   * 
   * @example
   * 86400
   */
  punishTime?: number;
  /**
   * @remarks
   * The frequency information.
   * 
   * @example
   * {"threshold":2000,"interval":5,"target":"ip","ttl":600}
   */
  rateLimit?: string;
  /**
   * @remarks
   * The name of the record.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 20110849
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * inner_cc_client_ip_ratelimit
   */
  ruleName?: string;
  /**
   * @remarks
   * The statistics.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rules.
   */
  ruleInfos?: DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos[];
  /**
   * @remarks
   * The total number of rules.
   * 
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

