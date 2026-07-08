// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 3.3.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of attack requests.
   * 
   * @example
   * 531
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopClientIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F0F9AD6-62E2-50BB-A3E5-30FFB9410262
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 source IP addresses that initiated the most attacks.
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

