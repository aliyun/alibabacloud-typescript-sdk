// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * The client IP pass-through protocol. Valid values:
   * - **off**: disabled.
   * - **PPv1**: PROXY Protocol v1. Supports client IP pass-through for TCP.
   * - **PPv2**: PROXY Protocol v2. Supports client IP pass-through for TCP and UDP.
   * - **SPP**: Simple Proxy Protocol. Supports client IP pass-through for UDP.
   * 
   * This parameter is required.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * The comment for the rule (optional).
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @remarks
   * The edge port. The following formats are supported:
   * 
   * - A single port, such as 80.
   * - A port range, such as 81-85, which represents ports 81, 82, 83, 84, and 85.
   * - A combination of ports and port ranges separated by commas, such as 80,81-85,90, which represents ports 80, 81, 82, 83, 84, 85, and 90.
   * 
   * Edge ports within a single rule and across multiple rules must not overlap.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The forwarding rule protocol. Valid values:
   * 
   * - TCP: TCP protocol.
   * - UDP: UDP protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The specific value of the origin, which must match the origin type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * Origin Server Port. The following formats are supported:
   * 
   * - A single port. When Origin Server Port is a single port, any valid edge port combination is supported.
   * - A port range. Origin Server Port can be set to a port range only when the edge port is also a port range, and the range size must match the edge port range. For example, if the edge port is 90-93, you cannot set Origin Server Port to 81-85 because Origin Server Port range size is 5 while the edge port range size is 4, which is inconsistent.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * The origin type. Valid values:
   * - **ip**: IP address.
   * - **domain**: domain name.
   * - **OP**: origin IPAM pool.
   * - **LB**: load balancing.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientIPPassThroughMode: 'ClientIPPassThroughMode',
      comment: 'Comment',
      edgePort: 'EdgePort',
      protocol: 'Protocol',
      source: 'Source',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIPPassThroughMode: 'string',
      comment: 'string',
      edgePort: 'string',
      protocol: 'string',
      source: 'string',
      sourcePort: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. This feature is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * The IP access rule switch. When enabled, IP access rules in WAF take effect for the Layer 4 application. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. This feature is disabled by default. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether to enable keep-alive protection. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Layer 4 application.
   * 
   * This parameter is required.
   * 
   * @example
   * aaa.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The list of forwarding rules.
   * 
   * This parameter is required.
   */
  rules?: CreateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID. The site must be activated.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable static IP. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  staticIp?: string;
  static names(): { [key: string]: string } {
    return {
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      recordName: 'RecordName',
      rules: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      recordName: 'string',
      rules: { 'type': 'array', 'itemType': CreateTransportLayerApplicationRequestRules },
      siteId: 'number',
      staticIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

