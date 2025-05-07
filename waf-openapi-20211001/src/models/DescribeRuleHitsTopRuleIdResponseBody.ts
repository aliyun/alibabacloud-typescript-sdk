// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId } from "./DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId";


export class DescribeRuleHitsTopRuleIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6334274-8870-5D2F-A1AD-D6EF885AC1ED
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the IDs of the top 10 rules that are matched by requests.
   */
  ruleHitsTopRuleId?: DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopRuleId: 'RuleHitsTopRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopRuleId: { 'type': 'array', 'itemType': DescribeRuleHitsTopRuleIdResponseBodyRuleHitsTopRuleId },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopRuleId)) {
      $dara.Model.validateArray(this.ruleHitsTopRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

