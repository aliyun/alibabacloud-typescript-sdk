// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @remarks
   * The action.
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
   * The attack prevention rule ID for log records.
   * 
   * @example
   * 100010
   */
  logRuleId?: number;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * The HTTP request\\"s Accept header contains invalid features#1
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The HTTP DDoS rule ID.
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
   * The rule name.
   * 
   * @example
   * Illegal request。
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * 
   * - **on**: The rule is enabled.
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
   * Id of the request
   * 
   * @example
   * D4030CD2-0D9D-5E92-B358-421AE58307C6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rule information.
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

