// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * Specifies the protocol for client IP pass-through. Valid values:
   * 
   * - **off**: Disables client IP pass-through.
   * 
   * - **PPv1**: PROXY Protocol v1. Supports client IP pass-through for the TCP protocol.
   * 
   * - **PPv2**: PROXY Protocol v2. Supports client IP pass-through for both TCP and UDP protocols.
   * 
   * - **SPP**: Simple Proxy Protocol. Supports client IP pass-through for the UDP protocol.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * An optional comment for the forwarding rule.
   * 
   * @example
   * 123
   */
  comment?: string;
  /**
   * @remarks
   * The edge port. The following formats are supported:
   * 
   * - A single port, for example, `80`.
   * 
   * - A port range, for example, `81-85`. This range includes ports 81, 82, 83, 84, and 85.
   * 
   * - A combination of ports and port ranges separated by commas, for example, `80,81-85,90`. This includes ports 80, 81, 82, 83, 84, 85, and 90.
   * 
   * - Edge ports cannot overlap within a single rule or across multiple rules.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The forwarding protocol. Valid values:
   * 
   * - TCP: Transmission Control Protocol.
   * 
   * - UDP: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source, which must correspond to the specified `SourceType`. For example, if `SourceType` is `ip`, this parameter must be an IP address.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The source port. The following formats are supported:
   * 
   * - A single port. When a single source port is used, any valid format can be used for the edge port.
   * 
   * - A port range. You can specify a port range for the source port only if the edge port is also a port range, and their sizes must match. For example, if `EdgePort` is `90-93`, you cannot set `SourcePort` to `81-85` because their sizes (4 and 5 ports, respectively) do not match.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * The type of the source. Valid values:
   * 
   * - **ip**: An IP address.
   * 
   * - **domain**: A domain name.
   * 
   * - **OP**: An origin pool.
   * 
   * - **LB**: A load balancer.
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
   * The transport layer application ID. You can obtain this ID by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-border optimization for network access from the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - on: Enables the feature.
   * 
   * - off: Disables the feature.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Specifies whether to enable IP access rules. If enabled, the IP access rules in WAF apply to the transport layer application. Valid values:
   * 
   * - on: Enables the feature.
   * 
   * - off: Disables the feature.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values: `on` and `off`.
   * 
   * @example
   * on
   */
  ipv6?: string;
  keepAliveProtection?: string;
  /**
   * @remarks
   * A list of forwarding rules. For each rule, all parameters are required except for `Comment`.
   */
  rules?: UpdateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * The site ID. You can obtain this ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
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

