// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * The client IP passthrough protocol. Valid values:
   * 
   * - **off**: Disables client IP passthrough.
   * 
   * - **PPv1**: PROXY Protocol v1. Preserves the client IP address for TCP connections.
   * 
   * - **PPv2**: PROXY Protocol v2. Preserves the client IP address for TCP and UDP connections.
   * 
   * - **SPP**: Simple Proxy Protocol. Preserves the client IP address for UDP connections.
   * 
   * This parameter is required.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * An optional comment for the rule.
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @remarks
   * The edge port. Supported formats:
   * 
   * - A single port, for example, `80`.
   * 
   * - A port range, for example, `81-85`, which includes ports 81, 82, 83, 84, and 85.
   * 
   * - A combination of ports and port ranges separated by commas, for example, `80,81-85,90`, which includes ports 80, 81, 82, 83, 84, 85, and 90.
   * 
   * Edge ports cannot overlap within a single rule or across multiple rules.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The forwarding protocol. Valid values:
   * 
   * - `TCP`: The TCP protocol.
   * 
   * - `UDP`: The UDP protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The origin address. The value must match the specified `SourceType`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin port. Supported formats:
   * 
   * - A single port, which supports any valid combination of edge ports.
   * 
   * - A port range. You can specify a port range only if the edge port is also a port range. The origin and edge port ranges must be the same size. For example, if the edge port range is `90-93` (4 ports), the origin port range cannot be `81-85` (5 ports).
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
   * 
   * - **ip**: An IP address.
   * 
   * - **domain**: A domain name.
   * 
   * - **OP**: An origin pool.
   * 
   * - **LB**: A load balancer.
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
   * Enables or disables network optimization for access from the Chinese mainland. This feature is disabled by default. Valid values:
   * 
   * - `on`: Enables the optimization.
   * 
   * - `off`: Disables the optimization.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Applies IP access rules from Web Application Firewall (WAF) to this Transport Layer Application. Valid values:
   * 
   * - `on`: Enables the feature.
   * 
   * - `off`: Disables the feature.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Enables or disables IPv6 support.
   * 
   * @example
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Enables or disables keep-alive protection.
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Transport Layer Application.
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
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

