// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer4RulesResponseBodyListenersUsTimeout extends $dara.Model {
  connectTimeout?: number;
  rsTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      connectTimeout: 'ConnectTimeout',
      rsTimeout: 'RsTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTimeout: 'number',
      rsTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The origin server port.
   * 
   * @example
   * 233
   */
  backendPort?: number;
  /**
   * @remarks
   * The origin mode. Values:
   * 
   * - **0**: Indicates the default origin mode.
   * - **1**: Indicates the primary/backup origin mode.
   * 
   * @example
   * 0
   */
  bakMode?: number;
  /**
   * @remarks
   * The currently effective origin server type. Values:
   * 
   * - **1**: Indicates that the primary origin server settings are in effect (DDoS protection forwards business traffic to the primary origin server IP address).
   * - **2**: Indicates that the backup origin server settings are in effect (DDoS protection forwards business traffic to the backup origin server IP address).
   * 
   * @example
   * 1
   */
  currentIndex?: number;
  /**
   * @remarks
   * The IP address of the DDoS protection instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  eip?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the DDoS protection instance.
   * 
   * @example
   * ddoscoo-cn-zvp2ay9b****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the rule was automatically created. Values:
   * 
   * - **true**: Indicates that the rule was automatically created by DDoS protection.
   * - **false**: Indicates that the rule was manually created by you.
   * 
   * @example
   * false
   */
  isAutoCreate?: boolean;
  /**
   * @remarks
   * Payload rule module switch. Values:
   * 
   * - 1: Enabled
   * - 0: Disabled
   * 
   * @example
   * 0
   */
  payloadRuleEnable?: number;
  /**
   * @remarks
   * The type of forwarding protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * Traffic diversion switch. Values:
   * - **0** Off.
   * - **1** On.
   * 
   * @example
   * 0
   */
  proxyEnable?: number;
  /**
   * @remarks
   * Traffic diversion status. Values:
   * 
   * - on: Diversion is effective
   * - off: Diversion is ineffective
   * 
   * @example
   * on
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The list of origin server IP addresses.
   */
  realServers?: string[];
  /**
   * @remarks
   * The remarks for the port forwarding rule.
   * 
   * @example
   * test-remark
   */
  remark?: string;
  usTimeout?: DescribeLayer4RulesResponseBodyListenersUsTimeout;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      bakMode: 'BakMode',
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      payloadRuleEnable: 'PayloadRuleEnable',
      protocol: 'Protocol',
      proxyEnable: 'ProxyEnable',
      proxyStatus: 'ProxyStatus',
      realServers: 'RealServers',
      remark: 'Remark',
      usTimeout: 'UsTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      bakMode: 'number',
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      payloadRuleEnable: 'number',
      protocol: 'string',
      proxyEnable: 'number',
      proxyStatus: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
      usTimeout: DescribeLayer4RulesResponseBodyListenersUsTimeout,
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    if(this.usTimeout && typeof (this.usTimeout as any).validate === 'function') {
      (this.usTimeout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed configuration of port forwarding rules, including the forwarding port, forwarding protocol, and origin server addresses, etc.
   */
  listeners?: DescribeLayer4RulesResponseBodyListeners[];
  /**
   * @remarks
   * The ID of the current request.
   * 
   * @example
   * 949919A2-6636-1444-9213-AB27DD88AAA8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned results.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RulesResponseBodyListeners },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

