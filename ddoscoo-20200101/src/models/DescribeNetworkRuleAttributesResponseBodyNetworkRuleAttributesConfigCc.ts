// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack";


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc extends $dara.Model {
  /**
   * @remarks
   * The protection policy that a source IP address is added to the blacklist when the number of connections initiated from the IP address frequently exceeds the limit.
   */
  sblack?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack },
    };
  }

  validate() {
    if(Array.isArray(this.sblack)) {
      $dara.Model.validateArray(this.sblack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

