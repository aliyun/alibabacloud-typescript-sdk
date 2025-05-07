// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRuleGroupsResponseBodyRuleGroups } from "./DescribeRuleGroupsResponseBodyRuleGroups";


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

