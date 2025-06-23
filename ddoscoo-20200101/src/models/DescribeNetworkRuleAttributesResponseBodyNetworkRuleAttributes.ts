// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig } from "./DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig";


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributes extends $dara.Model {
  /**
   * @remarks
   * The mitigation settings of the port forwarding rule.
   */
  config?: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 8080
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The forwarding protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfig,
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

