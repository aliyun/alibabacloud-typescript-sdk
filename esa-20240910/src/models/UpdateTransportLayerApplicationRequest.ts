// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransportLayerApplicationRequestRules extends $dara.Model {
  /**
   * @remarks
   * Client IP pass-through protocol, supports:
   * - **off**: No pass-through.
   * - **PPv1**: PROXY Protocol v1, supports client IP pass-through for TCP protocol.
   * - **PPv2**: PROXY Protocol v2, supports client IP pass-through for TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, supports client IP pass-through for UDP protocol.
   * 
   * @example
   * SPP
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * Comment information for the rule.
   * 
   * @example
   * 123
   */
  comment?: string;
  /**
   * @remarks
   * Edge port. Supports:
   * 
   * - A single port, e.g., 80.
   * - Port range, e.g., 81-85, representing ports 81, 82, 83, 84, 85.
   * - Combination of ports and port ranges, separated by commas, e.g., 80,81-85,90, representing ports 80, 81, 82, 83, 84, 85, 90.
   * - Edge ports within a single rule and between multiple rules must not overlap.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * Forwarding rule protocol, supports:
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
   * Specific value of the source.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * Source port. Supports:
   * 
   * - A single port, when the source port is a single port, any valid edge port combination is supported.
   * - Port range, only when the edge port is a port range, the source port can be set as a port range, and the size of the range must match that of the edge port. For example, if the edge port is 90-93, the source port cannot be set to 81-85 because the source port range is 5 and the edge port range is 3, which do not match.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * Source type, supports:
   * - **ip**: IP address.
   * - **domain**: Domain name.
   * - **OP**: Origin pool.
   * - **LB**: Load balancer.
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
   * Transport layer application ID, which can be obtained by calling the [ListTransportLayerApplications](~~ListTransportLayerApplications~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 165503967****
   */
  applicationId?: number;
  /**
   * @remarks
   * Whether to enable China mainland network access optimization, default is disabled. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * IP access rule switch. When enabled, the IP access rules in WAF will take effect on the transport layer application.
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
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Forwarding rule list. Details of each rule. Except for the comment, all other parameters are required.
   */
  rules?: UpdateTransportLayerApplicationRequestRules[];
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
      applicationId: 'ApplicationId',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
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

