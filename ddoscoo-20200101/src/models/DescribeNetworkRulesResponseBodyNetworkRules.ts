// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRulesResponseBodyNetworkRules extends $dara.Model {
  /**
   * @remarks
   * The port of the origin server.
   * 
   * @example
   * 80
   */
  backendPort?: number;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 80
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
   * Indicates whether the port forwarding rule is automatically created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isAutoCreate?: boolean;
  /**
   * @remarks
   * Indicates whether the payload filtering rule is enabled. Valid values:
   * 
   * *   1: enabled.
   * *   0: disabled.
   * 
   * @example
   * 1
   */
  payloadRuleEnable?: number;
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
  /**
   * @remarks
   * Indicates whether the traffic diversion switch is on. Valid values:
   * 
   * *   0: on.
   * *   1: off.
   * 
   * @example
   * 0
   */
  proxyEnable?: number;
  /**
   * @remarks
   * The status of traffic diversion. Valid values:
   * 
   * *   on: Traffic diversion takes effect.
   * *   off: Traffic diversion does not take effect.
   * 
   * @example
   * on
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The IP addresses of origin servers.
   */
  realServers?: string[];
  /**
   * @remarks
   * The remarks of the port forwarding rule.
   * 
   * @example
   * Test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      payloadRuleEnable: 'PayloadRuleEnable',
      protocol: 'Protocol',
      proxyEnable: 'ProxyEnable',
      proxyStatus: 'ProxyStatus',
      realServers: 'RealServers',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      frontendPort: 'number',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      payloadRuleEnable: 'number',
      protocol: 'string',
      proxyEnable: 'number',
      proxyStatus: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

