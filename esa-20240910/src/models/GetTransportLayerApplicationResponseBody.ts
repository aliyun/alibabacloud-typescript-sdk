// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The client IP pass-through protocol. Valid values:
   * - **off**: disabled.
   * - **PPv1**: PROXY Protocol v1, which supports client IP pass-through for TCP.
   * - **PPv2**: PROXY Protocol v2, which supports client IP pass-through for TCP and UDP.
   * - **SPP**: Simple Proxy Protocol, which supports client IP pass-through for UDP.
   * 
   * @example
   * off
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * The comment for the rule.
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
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The protocol of the forwarding rule. Valid values:
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
   * The rule ID.
   * 
   * @example
   * 1234323***
   */
  ruleId?: number;
  /**
   * @remarks
   * The specific value of the origin server, which must match the origin server type.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin server port. The following formats are supported:
   * 
   * - A single port. When the origin server port is a single port, any valid edge port combination is supported.
   * - A port range. The origin server port can be set to a port range only when the edge port is a port range, and the range size must be the same as the edge port range. For example, if the edge port is 90-93, you cannot set the origin server port to 81-85 because the origin server port range is 5 while the edge port range is 4, which are inconsistent.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * The origin server type. Valid values:
   * - **ip**: IP address.
   * - **domain**: domain name.
   * - **OP**: IPAM pool.
   * - **LB**: load balancing.
   * 
   * @example
   * domain
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientIPPassThroughMode: 'ClientIPPassThroughMode',
      comment: 'Comment',
      edgePort: 'EdgePort',
      protocol: 'Protocol',
      ruleId: 'RuleId',
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
      ruleId: 'number',
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

export class GetTransportLayerApplicationResponseBodyStaticIpV4List extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.1.2
   */
  address?: string;
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * - healthy: Healthy.
   * - unhealthy: Unhealthy.
   * - unknown: The IP address is being prepared.
   * 
   * @example
   * healthy
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransportLayerApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Layer 4 application ID.
   * 
   * @example
   * 17099311410****
   */
  applicationId?: number;
  /**
   * @remarks
   * The CNAME domain name of the Layer 4 acceleration application. This field is non-empty only when the site is connected by using the CNAME method.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @remarks
   * Specifies whether to enable network access optimization for the Chinese mainland. This feature is disabled by default. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * The IP access rule switch. When enabled, IP access rules in WAF take effect for the Layer 4 application. Valid values:
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
   * The IPv6 switch. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether to enable keep-alive protection. This feature is disabled by default. Valid values:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Layer 4 application.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB635996-1FD6-5DFD-BA57-27A849599940
   */
  requestId?: string;
  /**
   * @remarks
   * The list of forwarding rules.
   */
  rules?: GetTransportLayerApplicationResponseBodyRules[];
  /**
   * @remarks
   * The number of forwarding rules in the Layer 4 acceleration application.
   * 
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable static IP. This feature is disabled by default. Valid values:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  staticIp?: string;
  /**
   * @remarks
   * The list of static IPv4 addresses assigned to this Layer 4 application after the static IP feature is enabled.
   */
  staticIpV4List?: GetTransportLayerApplicationResponseBodyStaticIpV4List[];
  /**
   * @remarks
   * The Layer 4 application status. Valid values:
   * 
   * - **deploying**: Being deployed. Modifications and deletions are not allowed in this state.
   * - **active**: Active.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      cname: 'Cname',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      recordName: 'RecordName',
      requestId: 'RequestId',
      rules: 'Rules',
      rulesCount: 'RulesCount',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
      staticIpV4List: 'StaticIpV4List',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      cname: 'string',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      recordName: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': GetTransportLayerApplicationResponseBodyRules },
      rulesCount: 'number',
      siteId: 'number',
      staticIp: 'string',
      staticIpV4List: { 'type': 'array', 'itemType': GetTransportLayerApplicationResponseBodyStaticIpV4List },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.staticIpV4List)) {
      $dara.Model.validateArray(this.staticIpV4List);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

