// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackRulesResponseBodyRuleInfos extends $dara.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  /**
   * @example
   * deny
   */
  defaultAction?: string;
  /**
   * @example
   * 100010
   */
  logRuleId?: number;
  /**
   * @example
   * The HTTP request\\"s Accept header contains invalid features#1
   */
  ruleDesc?: string;
  /**
   * @example
   * 20203578
   */
  ruleId?: number;
  /**
   * @example
   * global_01_s
   */
  ruleIdInfo?: string;
  /**
   * @example
   * Illegal request。
   */
  ruleName?: string;
  /**
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
   * D4030CD2-0D9D-5E92-B358-421AE58307C6
   */
  requestId?: string;
  ruleInfos?: DescribeHttpDDoSAttackRulesResponseBodyRuleInfos[];
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

