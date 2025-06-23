// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes";


export class DescribeNetworkRuleAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the mitigation settings of the port forwarding rule for a non-website service. The mitigation settings include session persistence and DDoS mitigation policies.
   */
  networkRuleAttributes?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9F2F77D-307C-4F15-8D02-AB5957EEBF97
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkRuleAttributes: 'NetworkRuleAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRuleAttributes: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkRuleAttributes)) {
      $dara.Model.validateArray(this.networkRuleAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

