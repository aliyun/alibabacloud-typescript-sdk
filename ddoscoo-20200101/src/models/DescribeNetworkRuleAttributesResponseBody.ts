// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigCcSblack extends $dara.Model {
  /**
   * @remarks
   * The threshold that the number of connections initiated from a source IP address can exceed the limit. Set the value to **5**. If the number of connections initiated from a source IP address exceeds the limit five times during the check, the source IP address is added to the blacklist.
   * 
   * @example
   * 5
   */
  cnt?: number;
  /**
   * @remarks
   * The interval at which checks are performed. Set the value to **60**. Unit: seconds.
   * 
   * @example
   * 60
   */
  during?: number;
  /**
   * @remarks
   * The validity period of the IP address in the blacklist. Valid values: **60** to **604800**. Unit: seconds.
   * 
   * @example
   * 600
   */
  expires?: number;
  /**
   * @remarks
   * The type of the limit that causes a source IP address to be added to the blacklist. Valid values:
   * 
   * *   **1**: Source New Connection Rate Limit
   * *   **2**: Source Concurrent Connection Rate Limit
   * *   **3**: PPS Limit for Source
   * *   **4**: Bandwidth Limit for Source
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      during: 'During',
      expires: 'Expires',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      during: 'number',
      expires: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigPayloadLen extends $dara.Model {
  /**
   * @remarks
   * The maximum length of a packet. Valid values: **0** to **6000**. Unit: bytes.
   * 
   * @example
   * 6000
   */
  max?: number;
  /**
   * @remarks
   * The minimum length of a packet. Valid values: **0** to **6000**. Unit: bytes.
   * 
   * @example
   * 0
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSla extends $dara.Model {
  /**
   * @remarks
   * The maximum number of new connections per second that can be established over the port of the destination instance. Valid values: **100** to **100000**.
   * 
   * @example
   * 100000
   */
  cps?: number;
  /**
   * @remarks
   * The status of the Destination New Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 1
   */
  cpsEnable?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections that can be established over the port of the destination instance. Valid values: **1000** to **1000000**.
   * 
   * @example
   * 1000000
   */
  maxconn?: number;
  /**
   * @remarks
   * The status of the Destination Concurrent Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  maxconnEnable?: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      cpsEnable: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleAttributesResponseBodyNetworkRuleAttributesConfigSlimit extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for a source IP address. Valid values: **1024** to **268435456**. Unit: bytes/s. Default value: **0**, which indicates that the bandwidth for a source IP address is unlimited.
   * 
   * @example
   * 0
   */
  bps?: number;
  /**
   * @remarks
   * The maximum number of new connections per second that can be initiated from a source IP address. Valid values: **1** to **500000**.
   * 
   * @example
   * 0
   */
  cps?: number;
  /**
   * @remarks
   * The status of the Source New Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @remarks
   * The mode of the Source New Connection Rate Limit switch. Valid values:
   * 
   * *   **1**: the manual mode
   * *   **2**: the automatic mode
   * 
   * @example
   * 1
   */
  cpsMode?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections initiated from a source IP address. Valid values: **1** to **500000**.
   * 
   * @example
   * 0
   */
  maxconn?: number;
  /**
   * @remarks
   * The status of the Source Concurrent Connection Rate Limit switch. Valid values:
   * 
   * *   **0**: The switch is turned off.
   * *   **1**: The switch is turned on.
   * 
   * @example
   * 0
   */
  maxconnEnable?: number;
  /**
   * @remarks
   * The packets per second (pps) limit for a source IP address. Valid values: **1** to **100000**. Unit: packets/s. Default value: **0**, which indicates that the pps for a source IP address is unlimited.
   * 
   * @example
   * 0
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

