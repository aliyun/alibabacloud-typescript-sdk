// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsResponseBodyApplicationsRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether and how to pass the client\\"s IP address to the origin server. Valid values:
   * 
   * - **off**: Disables client IP pass-through.
   * 
   * - **PPv1**: The PROXY Protocol v1, which supports client IP pass-through for TCP traffic.
   * 
   * - **PPv2**: The PROXY Protocol v2, which supports client IP pass-through for both TCP and UDP traffic.
   * 
   * - **SPP**: The Simple Proxy Protocol, which supports client IP pass-through for UDP traffic.
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
   * - A single port, for example, `80`.
   * 
   * - A port range, for example, `81-85`, which includes ports 81, 82, 83, 84, and 85.
   * 
   * - A combination of ports and port ranges separated by commas, for example, `80,81-85,90`, which includes ports 80, 81, 82, 83, 84, 85, and 90.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * The protocol of the forwarding rule. Valid values:
   * 
   * - **TCP**: The TCP protocol.
   * 
   * - **UDP**: The UDP protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The unique ID of the forwarding rule.
   * 
   * @example
   * 20258028****
   */
  ruleId?: number;
  /**
   * @remarks
   * The origin address. The value of this parameter must match the `SourceType`.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The origin port. The following formats are supported:
   * 
   * - A single port. If you specify a single origin port, you can use any valid combination of edge ports.
   * 
   * - A port range. The origin port can be a port range only if the edge port is also a port range. The number of ports in the origin port range must be the same as that in the edge port range. For example, if the edge port range is `90-93` (which contains 4 ports), you cannot set the origin port range to `81-85` (which contains 5 ports) because their sizes do not match.
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
   * The health status of the IP address. Valid values:
   * 
   * - healthy: The IP address is passing health checks.
   * 
   * - unhealthy: The IP address is failing health checks.
   * 
   * - unknown: The IP address is being provisioned.
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
   * The transport layer application ID.
   * 
   * @example
   * 170997271816****
   */
  applicationId?: number;
  /**
   * @remarks
   * The CNAME for the transport layer application. This parameter is returned only when the site is onboarded by using a CNAME record.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @remarks
   * Specifies whether cross-border optimization is enabled for Chinese mainland network access. By default, this feature is disabled. Valid values:
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * Specifies whether the IP access rule feature is enabled. When enabled, the IP access rules in WAF apply to this transport layer application.
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is enabled.
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Specifies whether keep-alive protection is enabled.
   */
  keepAliveProtection?: string;
  /**
   * @remarks
   * The domain name of the transport layer application.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * A list of forwarding rules.
   */
  rules?: ListTransportLayerApplicationsResponseBodyApplicationsRules[];
  /**
   * @remarks
   * The number of forwarding rules in the transport layer application.
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
   * Specifies whether the static IP feature is enabled. By default, this feature is disabled. Valid values:
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  staticIp?: string;
  /**
   * @remarks
   * A list of static IPv4 addresses assigned to the application when the static IP feature is enabled.
   * 
   * This parameter is required.
   */
  staticIpV4List?: ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List[];
  /**
   * @remarks
   * The status of the transport layer application. Valid values:
   * 
   * - **deploying**: The application is being deployed. You cannot modify or delete the application in this state.
   * 
   * - **active**: The application is running.
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
   * A list of transport layer applications.
   */
  applications?: ListTransportLayerApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The current page number.
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
   * The total number of transport layer applications.
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

