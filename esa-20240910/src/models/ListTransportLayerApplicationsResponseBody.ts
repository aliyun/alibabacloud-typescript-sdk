// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsResponseBodyApplicationsRules extends $dara.Model {
  /**
   * @remarks
   * The client IP pass-through protocol. Supported values:
   * - **off**: Disabled.
   * - **PPv1**: PROXY Protocol v1, which supports client IP pass-through for TCP protocol.
   * - **PPv2**: PROXY Protocol v2, which supports client IP pass-through for TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, which supports client IP pass-through for UDP protocol.
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
   * The edge port. Supported formats:
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
   * The Layer 4 acceleration rule ID.
   * 
   * @example
   * 20258028****
   */
  ruleId?: number;
  /**
   * @remarks
   * The specific value of the origin, which must match the origin type.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin port. Supported formats:
   * 
   * - A single port. When the origin port is a single port, any valid combination of edge ports is supported.
   * - A port range. The origin port can be set to a port range only when the edge port is a port range, and the range size must be the same as that of the edge port. For example, if the edge port is 90-93, the origin port cannot be set to 81-85, because the origin port range size is 5 while the edge port range size is 3, which are inconsistent.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * The origin type. Supported values:
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

export class ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List extends $dara.Model {
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
   * - unknown: IP address is being prepared.
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

export class ListTransportLayerApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The Layer 4 application ID.
   * 
   * @example
   * 170997271816****
   */
  applicationId?: number;
  /**
   * @remarks
   * The CNAME domain name corresponding to the Layer 4 acceleration application. This field is non-empty only when the site is connected via the CNAME method.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @remarks
   * Indicates whether mainland China network access optimization is enabled. Disabled by default. Valid values:
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
   * The IP access rule switch. When enabled, the IP access rules in WAF take effect for the Layer 4 application.
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
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Indicates whether keep-alive protection is enabled. Disabled by default. Valid values:
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
   * The list of forwarding rules.
   */
  rules?: ListTransportLayerApplicationsResponseBodyApplicationsRules[];
  /**
   * @remarks
   * The number of forwarding rules contained in the Layer 4 acceleration application.
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
   * 36556540048****
   */
  siteId?: number;
  /**
   * @remarks
   * Indicates whether static IP is enabled. Disabled by default. Valid values:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  staticIp?: string;
  /**
   * @remarks
   * The list of static IPv4 addresses assigned to this Layer 4 application after the static IP feature is enabled.
   * 
   * This parameter is required.
   */
  staticIpV4List?: ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List[];
  /**
   * @remarks
   * The status of the Layer 4 application.
   * 
   * - **deploying**: Deploying. Modification and deletion are not allowed in this state.
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
      rules: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplicationsRules },
      rulesCount: 'number',
      siteId: 'number',
      staticIp: 'string',
      staticIpV4List: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List },
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

export class ListTransportLayerApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Layer 4 applications.
   */
  applications?: ListTransportLayerApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The current page number, same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Layer 4 applications.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplications },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

