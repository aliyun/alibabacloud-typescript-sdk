// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa extends $dara.Model {
  /**
   * @remarks
   * The number of attacks that are initiated from the IP address.
   * 
   * @example
   * 531
   */
  count?: number;
  /**
   * @remarks
   * The user agent.
   * 
   * @example
   * android
   */
  ua?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ua: 'Ua',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ua: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8E5C7ED7-503A-5986-A005-36F2511EB89F
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 user agents that are used to initiate attacks.
   */
  ruleHitsTopUa?: DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUa: 'RuleHitsTopUa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUa: { 'type': 'array', 'itemType': DescribeRuleHitsTopUaResponseBodyRuleHitsTopUa },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopUa)) {
      $dara.Model.validateArray(this.ruleHitsTopUa);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

