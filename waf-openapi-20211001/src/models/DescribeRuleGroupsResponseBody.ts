// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleGroupsResponseBodyRuleGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the rule group was last updated.
   * 
   * @example
   * 1664336364000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The automatic update status of the rule group.
   * 
   * - 1: Automatic updates are enabled.
   * 
   * - 2: Automatic updates are disabled.
   * 
   * @example
   * 1
   */
  isSubscribe?: number;
  /**
   * @remarks
   * The ID of the rule group that the current rule group inherits.
   * 
   * - 0: The rule group is created from scratch and does not inherit from another rule group.
   * 
   * - 1011: The Strict rule group.
   * 
   * - 1012: The Medium rule group.
   * 
   * - 1013: The Loose rule group.
   * 
   * @example
   * 1012
   */
  parentRuleGroupId?: number;
  /**
   * @remarks
   * The ID of the rule group.
   * 
   * @example
   * 115361
   */
  ruleGroupId?: number;
  /**
   * @remarks
   * The name of the rule group.
   * 
   * @example
   * ssssss
   */
  ruleGroupName?: string;
  /**
   * @remarks
   * The number of built-in rules.
   * 
   * @example
   * 4444
   */
  ruleTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      isSubscribe: 'IsSubscribe',
      parentRuleGroupId: 'ParentRuleGroupId',
      ruleGroupId: 'RuleGroupId',
      ruleGroupName: 'RuleGroupName',
      ruleTotalCount: 'RuleTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      isSubscribe: 'number',
      parentRuleGroupId: 'number',
      ruleGroupId: 'number',
      ruleGroupName: 'string',
      ruleTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02E9A4B8-90FB-5F41-A049-C82277EB82FB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of regular expression rule groups.
   */
  ruleGroups?: DescribeRuleGroupsResponseBodyRuleGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 24
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleGroups: 'RuleGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleGroups: { 'type': 'array', 'itemType': DescribeRuleGroupsResponseBodyRuleGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleGroups)) {
      $dara.Model.validateArray(this.ruleGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

