// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopClientIpResponseBodyRuleHitsTopClientIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the service client.
   * 
   * @example
   * 3.3.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
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

