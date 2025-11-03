// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * Client IP pass-through protocol, supporting:
   * - **off**: No pass-through.
   * - **PPv1**: PROXY Protocol v1, supports client IP pass-through for TCP protocol.
   * - **PPv2**: PROXY Protocol v2, supports client IP pass-through for TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, supports client IP pass-through for UDP protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * Comment information for the rule (optional).
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * Edge port. Supports:
   * 
   * - A single port, such as 80.
   * - Port range, such as 81-85, representing ports 81, 82, 83, 84, and 85.
   * - Combination of ports and port ranges, separated by commas, such as 80,81-85,90, representing ports 80, 81, 82, 83, 84, 85, and 90.
   * 
   * Edge ports within a single rule and between multiple rules must not overlap.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * Forwarding rule protocol, with values:
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
   * Specific value of the origin, which needs to match the origin type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * Origin port. Supports:
   * 
   * - A single port, when the origin port is a single port, any valid combination of edge ports is supported.
   * - Port range, only when the edge port is a port range, the origin port can be set to a port range, and the size of the range must match that of the edge port. For example, if the edge port is 90-93, the origin port cannot be set to 81-85 because the origin port range is 5 and the edge port range is 3, which do not match.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * Origin type, supporting:
   * - **ip**: IP address.
   * - **domain**: Domain name.
   * - **OP**: Origin pool.
   * - **LB**: Load balancer.
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
   * Whether to enable China mainland network access optimization, default is disabled. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * IP access rule switch. When enabled, the WAF\\"s IP access rules apply to the transport layer application.
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * IPv6 switch.
   * 
   * @example
   * off
   */
  ipv6?: string;
  /**
   * @remarks
   * Domain name of the transport layer application.
   * 
   * This parameter is required.
   * 
   * @example
   * aaa.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * List of forwarding rules.
   * 
   * This parameter is required.
   */
  rules?: CreateTransportLayerApplicationRequestRules[];
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
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

