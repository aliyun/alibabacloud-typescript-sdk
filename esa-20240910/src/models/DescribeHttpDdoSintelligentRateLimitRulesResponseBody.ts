// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos extends $dara.Model {
  action?: string;
  condition?: string;
  logRuleId?: number;
  punishTime?: number;
  rateLimit?: string;
  recordName?: string;
  ruleId?: number;
  ruleName?: string;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  ruleInfos?: DescribeHttpDDoSIntelligentRateLimitRulesResponseBodyRuleInfos[];
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

