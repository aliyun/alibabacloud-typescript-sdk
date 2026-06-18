// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The client IP pass-through mode. Valid values:
   * 
   * - **off**: Client IP pass-through is disabled.
   * 
   * - **PPv1**: PROXY Protocol v1, which supports client IP pass-through for TCP.
   * 
   * - **PPv2**: PROXY Protocol v2, which supports client IP pass-through for both TCP and UDP.
   * 
   * - **SPP**: Simple Proxy Protocol, which supports client IP pass-through for UDP.
   * 
   * @example
   * off
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * A comment about the forwarding rule.
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @remarks
   * The edge port. The following formats are supported:
   * 
   * - A single port, for example, `80`.
   * 
   * - A port range, such as `81-85` (ports 81 to 85).
   * 
   * - A comma-separated list of ports and port ranges, such as `80,81-85,90`.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The protocol for the forwarding rule. Valid values:
   * 
   * - **TCP**: For TCP traffic.
   * 
   * - **UDP**: For UDP traffic.
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
   * The origin. This value must be consistent with the specified origin type.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin port. The following formats are supported:
   * 
   * - A single port. A single origin port can be mapped to one or more edge ports.
   * 
   * - A port range. When mapping a range of edge ports to a range of origin ports, both ranges must contain the same number of ports. For example, you cannot map edge ports `90-93` (4 ports) to origin ports `81-85` (5 ports).
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
   * - **OP**: An origin address pool.
   * 
   * - **LB**: A load balancer.
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
  address?: string;
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
   * The ID of the Transport Layer Application.
   * 
   * @example
   * 17099311410****
   */
  applicationId?: number;
  /**
   * @remarks
   * The CNAME domain name of the Transport Layer Application. This parameter is returned only if the Site was added using the CNAME method.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @remarks
   * Indicates whether network optimization for access from the Chinese mainland is enabled. This feature is disabled by default. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Indicates whether the IP Access Rule feature is enabled. If enabled, IP Access Rules in Web Application Firewall (WAF) take effect for the Transport Layer Application. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Indicates whether keep-alive protection is enabled.
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the Transport Layer Application.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB635996-1FD6-5DFD-BA57-27A849599940
   */
  requestId?: string;
  /**
   * @remarks
   * A list of forwarding rules.
   */
  rules?: GetTransportLayerApplicationResponseBodyRules[];
  /**
   * @remarks
   * The number of forwarding rules in the Transport Layer Application.
   * 
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @remarks
   * The ID of the Site.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  staticIp?: string;
  staticIpV4List?: GetTransportLayerApplicationResponseBodyStaticIpV4List[];
  /**
   * @remarks
   * The status of the Transport Layer Application. Valid values:
   * 
   * - **deploying**: The application is deploying. You cannot modify or delete the application in this state.
   * 
   * - **active**: The application is active.
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

