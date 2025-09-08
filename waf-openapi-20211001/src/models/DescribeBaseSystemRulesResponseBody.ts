// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBaseSystemRulesResponseBodyRules extends $dara.Model {
  /**
   * @example
   * CVE-2021-34538
   */
  cveId?: string;
  /**
   * @example
   * rule description
   */
  description?: string;
  /**
   * @example
   * sqli
   */
  detectType?: string;
  /**
   * @example
   * super_strict
   */
  riskLevel?: string;
  /**
   * @example
   * block
   */
  ruleAction?: string;
  /**
   * @example
   * 113089
   */
  ruleId?: number;
  /**
   * @example
   * systemRuleTest
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @example
   * 1665460629000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      description: 'Description',
      detectType: 'DetectType',
      riskLevel: 'RiskLevel',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      description: 'string',
      detectType: 'string',
      riskLevel: 'string',
      ruleAction: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseSystemRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 80736FA5-FA87-55F6-AA69-C5477C6FE6D0
   */
  requestId?: string;
  rules?: DescribeBaseSystemRulesResponseBodyRules[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeBaseSystemRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

