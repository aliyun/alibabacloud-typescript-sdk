// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackRulesResponseBodyRuleInfos extends $dara.Model {
  action?: string;
  defaultAction?: string;
  logRuleId?: number;
  ruleDesc?: string;
  ruleId?: number;
  ruleIdInfo?: string;
  ruleName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      defaultAction: 'DefaultAction',
      logRuleId: 'LogRuleId',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleIdInfo: 'RuleIdInfo',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      defaultAction: 'string',
      logRuleId: 'number',
      ruleDesc: 'string',
      ruleId: 'number',
      ruleIdInfo: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHttpDDoSAttackRulesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  ruleInfos?: DescribeHttpDDoSAttackRulesResponseBodyRuleInfos[];
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
      ruleInfos: { 'type': 'array', 'itemType': DescribeHttpDDoSAttackRulesResponseBodyRuleInfos },
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

