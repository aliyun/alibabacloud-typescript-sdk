// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @remarks
   * The action to perform.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The default action.
   * 
   * @example
   * deny
   */
  defaultAction?: string;
  /**
   * @remarks
   * The ID of the protection rule used for log records.
   * 
   * @example
   * 100010
   */
  logRuleId?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * The HTTP request\\"s Accept header contains invalid features#1
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the HTTP DDoS protection rule.
   * 
   * @example
   * 20203578
   */
  ruleId?: number;
  /**
   * @remarks
   * The short name of the rule.
   * 
   * @example
   * global_01_s
   */
  ruleIdInfo?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Illegal request。
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **on**: The rule is enabled.
   * 
   * - **off**: The rule is disabled.
   * 
   * @example
   * on
   */
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
   * D4030CD2-0D9D-5E92-B358-421AE58307C6
   */
  requestId?: string;
  /**
   * @remarks
   * A list of rule details.
   */
  ruleInfos?: DescribeHttpDDoSAttackRulesResponseBodyRuleInfos[];
  /**
   * @remarks
   * The total number of entries.
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

