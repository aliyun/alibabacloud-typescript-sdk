// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * The client IP address pass-through protocol. Valid values:
   * - **off**: Do not pass through.
   * - **PPv1**: PROXY protocol v1, which supports client IP address pass-through for the TCP protocol.
   * - **PPv2**: PROXY protocol v2, which supports client IP address pass-through for the TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, which supports client IP address pass-through for the UDP protocol.
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
   * - A combination of ports and port ranges, separated by commas, such as 80,81-85,90, which represents ports 80, 81, 82, 83, 84, 85, and 90.
   * - The edge ports within a single rule and the edge ports across multiple rules must not overlap.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The protocol of the forwarding rule. Valid values:
   * 
   * - TCP: TCP.
   * - UDP: UDP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The specific value of the origin server.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin server port. Valid values:
   * 
   * - A single port. If the origin server port is a single port, any valid combination of edge ports is supported.
   * - A port range. The origin server port can be set to a port range only when the edge port is a port range, and the range size must be the same as that of the edge port. For example, if the edge port is 90-93, you cannot set the origin server port to 81-85 because the origin server port range is 5 and the edge port range is 3, which are inconsistent.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * The origin server type. Valid values:
   * - **ip**: IP address.
   * - **domain**: Domain name.
   * - **OP**: Origin IPAM pool.
   * - **LB**: Load balancing.
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
   * The Layer 4 application ID. You can obtain the ID by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Specifies whether to enable the IP access rule. After this feature is enabled, the IP access rules in WAF take effect for the Layer 4 application. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether to enable connection keep-alive protection. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * off
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The list of forwarding rules. For rule details, all parameters except the comment are required for each rule.
   */
  rules?: UpdateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * The site ID. You can obtain the ID by calling the [ListSites](~~ListSites~~) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable the static IP address feature. Default value: off. Valid values:
   * 
   * - on: Enable.
   * - off: Disable.
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

