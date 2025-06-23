// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc";
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen";
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla";
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit";


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig extends $dara.Model {
  /**
   * @remarks
   * The protection policy applied when the number of connections initiated from a source IP address frequently exceeds the limit.
   */
  cc?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc;
  /**
   * @remarks
   * The status of the Empty Connection switch. Valid values:
   * 
   * *   **on**: The switch is turned on.
   * *   **off**: The switch is turned off.
   * 
   * @example
   * off
   */
  nodataConn?: string;
  /**
   * @remarks
   * The settings of the Packet Length Limit policy.
   */
  payloadLen?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen;
  /**
   * @remarks
   * The timeout period of session persistence. Valid values: **30** to **3600**. Unit: seconds. Default value: **0**, which indicates that session persistence is disabled.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * The settings of the Speed Limit for Destination policy.
   */
  sla?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla;
  /**
   * @remarks
   * The settings of the Speed Limit for Source policy.
   */
  slimit?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit;
  /**
   * @remarks
   * The status of the False Source switch. Valid values:
   * 
   * *   **on**: The switch is turned on.
   * *   **off**: The switch is turned off.
   * 
   * @example
   * off
   */
  synproxy?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      nodataConn: 'NodataConn',
      payloadLen: 'PayloadLen',
      persistenceTimeout: 'PersistenceTimeout',
      sla: 'Sla',
      slimit: 'Slimit',
      synproxy: 'Synproxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCc,
      nodataConn: 'string',
      payloadLen: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla,
      slimit: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit,
      synproxy: 'string',
    };
  }

  validate() {
    if(this.cc && typeof (this.cc as any).validate === 'function') {
      (this.cc as any).validate();
    }
    if(this.payloadLen && typeof (this.payloadLen as any).validate === 'function') {
      (this.payloadLen as any).validate();
    }
    if(this.sla && typeof (this.sla as any).validate === 'function') {
      (this.sla as any).validate();
    }
    if(this.slimit && typeof (this.slimit as any).validate === 'function') {
      (this.slimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

