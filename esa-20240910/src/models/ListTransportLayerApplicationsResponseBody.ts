// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsResponseBodyApplicationsRules extends $dara.Model {
  /**
   * @remarks
   * Client IP pass-through protocol, supports:
   * - **off**: No pass-through.
   * - **PPv1**: PROXY Protocol v1, supports client IP pass-through for TCP protocol.
   * - **PPv2**: PROXY Protocol v2, supports client IP pass-through for TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, supports client IP pass-through for UDP protocol.
   * 
   * @example
   * off
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * Comment information for the rule.
   * 
   * @example
   * 测试
   */
  comment?: string;
  /**
   * @remarks
   * Edge port. Supports:
   * 
   * - A single port, e.g., 80.
   * - Port range, e.g., 81-85, representing ports 81, 82, 83, 84, 85.
   * - Combination of ports and port ranges, separated by commas, e.g., 80,81-85,90, representing ports 80, 81, 82, 83, 84, 85, 90.
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
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Layer 4 acceleration rule ID.
   * 
   * @example
   * 20258028****
   */
  ruleId?: number;
  /**
   * @remarks
   * Specific value of the source, which needs to match the source type.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * Source port. Supports:
   * 
   * - A single port, when the source port is a single port, any valid combination of edge ports is supported.
   * - Port range, only when the edge port is a port range, the source port can be set to a port range, and the range size must be consistent with the edge port. For example, if the edge port is 90-93, the source port cannot be set to 81-85 because the source port range is 5 and the edge port range is 3, which are inconsistent.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * Source type, supports:
   * - **ip**: IP.
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

export class ListTransportLayerApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * Layer 4 application ID.
   * 
   * @example
   * 170997271816****
   */
  applicationId?: number;
  /**
   * @remarks
   * CNAME domain name corresponding to the Layer 4 acceleration application. This field is not empty only when the site is accessed via CNAME.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @remarks
   * Whether to enable China mainland network access optimization. It is disabled by default. The value range is:
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
   * IP access rule switch. When enabled, the IP access rules in WAF take effect on the Layer 4 application.
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
   * Domain name of the Layer 4 application.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * List of forwarding rules.
   */
  rules?: ListTransportLayerApplicationsResponseBodyApplicationsRules[];
  /**
   * @remarks
   * Number of forwarding rules contained in the Layer 4 acceleration application.
   * 
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 36556540048****
   */
  siteId?: number;
  staticIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  staticIpV4List?: ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List[];
  /**
   * @remarks
   * Status of the Layer 4 application
   * 
   * - **deploying**: Deploying. In this state, modification and deletion are not allowed.
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
   * List of transport layer applications.
   */
  applications?: ListTransportLayerApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of transport layer applications.
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

