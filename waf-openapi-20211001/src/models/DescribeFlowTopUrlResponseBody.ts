// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowTopUrlResponseBodyRuleHitsTopUrl } from "./DescribeFlowTopUrlResponseBodyRuleHitsTopUrl";


export class DescribeFlowTopUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 520D4E4C-B8EC-5602-ACB6-4D378ACBA28D
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 URLs that are used to initiate requests.
   */
  ruleHitsTopUrl?: DescribeFlowTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeFlowTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopUrl)) {
      $dara.Model.validateArray(this.ruleHitsTopUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

