// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBaseRuleChangeLogResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The CVE ID of the vulnerability associated with the system rule.
   * 
   * @example
   * CVE-2021-34538
   */
  cveId?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - add: Add.
   * 
   * - modify: Modify.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 42755
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * Header XSS Scanner Behavior
   */
  ruleName?: string;
  /**
   * @remarks
   * The update time of the rule.
   * 
   * @example
   * 1665460629000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      operation: 'Operation',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      operation: 'string',
      ruleId: 'number',
      ruleName: 'string',
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

export class DescribeBaseRuleChangeLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FBF08CB-8691-5B65-BBF8-***
   */
  requestId?: string;
  /**
   * @remarks
   * List of ruleset changes.
   */
  rules?: DescribeBaseRuleChangeLogResponseBodyRules[];
  /**
   * @remarks
   * The total number of rule change entries in the list.
   * 
   * @example
   * 63
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
      rules: { 'type': 'array', 'itemType': DescribeBaseRuleChangeLogResponseBodyRules },
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

