// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleGroupsResponseBodyRuleGroups extends $dara.Model {
  /**
   * @remarks
   * The most recent time when the rule group was modified.
   * 
   * @example
   * 1664336364000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the automatic update feature is enabled for the rule group.
   * 
   * *   1: The automatic update feature is enabled for the rule group.
   * *   2: The automatic update feature is disabled for the rule group.
   * 
   * @example
   * 1
   */
  isSubscribe?: number;
  /**
   * @remarks
   * The ID of the rule group.
   * 
   * *   0: The rule group is created from scratch.
   * *   1011: The rule group is a strict rule group.
   * *   1012: The rule group is a medium rule group.
   * *   1013: The rue group is a loose rule group.
   * 
   * @example
   * 1012
   */
  parentRuleGroupId?: number;
  /**
   * @remarks
   * The ID of the regular expression rule group.
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
   * The number of built-in rules in the rule group.
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
   * The ID of the request.
   * 
   * @example
   * 02E9A4B8-90FB-5F41-A049-C82277EB82FB
   */
  requestId?: string;
  /**
   * @remarks
   * An array of regular expression rule groups.
   */
  ruleGroups?: DescribeRuleGroupsResponseBodyRuleGroups[];
  /**
   * @remarks
   * The total number of entries that are returned.
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

