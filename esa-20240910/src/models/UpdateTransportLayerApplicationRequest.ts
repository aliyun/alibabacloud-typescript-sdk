// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * The client IP pass-through protocol. Valid values:
   * - **off**: disabled.
   * - **PPv1**: PROXY Protocol v1, which supports client IP pass-through for TCP.
   * - **PPv2**: PROXY Protocol v2, which supports client IP pass-through for TCP and UDP.
   * - **SPP**: Simple Proxy Protocol, which supports client IP pass-through for UDP.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * The comment for the rule.
   * 
   * @example
   * 123
   */
  comment?: string;
  /**
   * @remarks
   * The edge port. Valid values:
   * 
   * - A single port, such as 80.
   * - A port range, such as 81-85, which represents ports 81, 82, 83, 84, and 85.
   * - A combination of ports and port ranges separated by commas, such as 80,81-85,90, which represents ports 80, 81, 82, 83, 84, 85, and 90.
   * - Edge ports within a single rule and across multiple rules cannot overlap.
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
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The specific value of the origin.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * Origin Server Port. Valid values:
   * 
   * - A single port. When Origin Server Port is a single port, any valid edge port combination is supported.
   * - A port range. Origin Server Port can be set to a port range only when the edge port is a port range, and the range size must match the edge port range. For example, if the edge port is 90-93, you cannot set Origin Server Port to 81-85 because Origin Server Port range is 5 while the edge port range is 4, which are inconsistent.
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

export class UpdateTransportLayerApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The Layer 4 application ID. You can call the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * The IP access rule switch. When enabled, WAF IP access rules take effect for the Layer 4 application. Valid values:
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
   * The IPv6 switch. Valid values:
   * 
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
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
   * The list of forwarding rules. For each rule, all parameters except the comment are required.
   */
  rules?: UpdateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
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
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      rules: 'Rules',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      rules: { 'type': 'array', 'itemType': UpdateTransportLayerApplicationRequestRules },
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

