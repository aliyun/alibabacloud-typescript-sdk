// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowTopResourceResponseBodyRuleHitsTopResource } from "./DescribeFlowTopResourceResponseBodyRuleHitsTopResource";


export class DescribeFlowTopResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F0E0B9A-B518-5C6D-BEFC-A373DDE4F652
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 protected objects that receive requests.
   */
  ruleHitsTopResource?: DescribeFlowTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeFlowTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopResource)) {
      $dara.Model.validateArray(this.ruleHitsTopResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

