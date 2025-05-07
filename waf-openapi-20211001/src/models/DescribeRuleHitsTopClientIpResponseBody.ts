// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp } from "./DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp";


export class DescribeRuleHitsTopClientIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F0F9AD6-62E2-50BB-A3E5-30FFB9410262
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 IP addresses from which attacks are initiated.
   */
  ruleHitsTopClientIp?: DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopClientIp: 'RuleHitsTopClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopClientIp: { 'type': 'array', 'itemType': DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopClientIp)) {
      $dara.Model.validateArray(this.ruleHitsTopClientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

