// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseRulesResponseBodyRules } from "./DescribeDefenseRulesResponseBodyRules";


export class DescribeDefenseRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 80736FA5-FA87-55F6-AA69-C5477C6FE6D0
   */
  requestId?: string;
  /**
   * @remarks
   * The protection rules.
   */
  rules?: DescribeDefenseRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
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
      rules: { 'type': 'array', 'itemType': DescribeDefenseRulesResponseBodyRules },
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

