// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl } from "./DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl";


export class DescribeRuleHitsTopUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D8AF43B-08EB-51CE-B33A-93AA****9B0C
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 URLs that match protection rules.
   */
  ruleHitsTopUrl?: DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl },
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

