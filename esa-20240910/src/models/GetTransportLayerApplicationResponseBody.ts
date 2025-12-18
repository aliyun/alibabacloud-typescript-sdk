// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The domain name of the transport layer application.
   * 
   * @example
   * off
   */
  clientIPPassThroughMode?: string;
  /**
   * @remarks
   * Switch for IP access rules. When turned on, the IP access rules in WAF take effect on the transport layer application.
   * 
   * - on: Turned on.
   * - off: Turned off.
   * 
   * @example
   * IPv6 switch.
   */
  comment?: string;
  /**
   * @remarks
   * Comment information of the rule.
   * 
   * @example
   * 80
   */
  edgePort?: string;
  /**
   * @remarks
   * Client IP pass-through protocol, supporting:
   * - **off**: No pass-through.
   * - **PPv1**: PROXY Protocol v1, supports client IP pass-through for TCP protocol.
   * - **PPv2**: PROXY Protocol v2, supports client IP pass-through for TCP and UDP protocols.
   * - **SPP**: Simple Proxy Protocol, supports client IP pass-through for UDP protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Status of the transport layer application
   * 
   * - **deploying**: Deploying. In this state, modification and deletion are not allowed.
   * - **active**: Active.
   * 
   * @example
   * 1234323***
   */
  ruleId?: number;
  /**
   * @remarks
   * Origin port. Supports:
   * 
   * - A single port, when the origin port is a single port, any valid edge port combination is supported.
   * - Port range, only when the edge port is a port range, the origin port can be set as a port range and the size of the range must be consistent with the edge port. For example, if the edge port is 90-93, the origin port cannot be set to 81-85 because the origin port range is 5 and the edge port range is 3, which are inconsistent.
   * 
   * @example
   * 1.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * The CNAME domain corresponding to the transport layer acceleration application. This field is not empty only when the site is accessed via CNAME.
   * 
   * @example
   * 80
   */
  sourcePort?: string;
  /**
   * @remarks
   * Rule ID.
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
   * Specific value of the origin, which needs to match the type of the origin.
   * 
   * @example
   * 17099311410****
   */
  applicationId?: number;
  /**
   * @remarks
   * Whether to enable China mainland network access optimization, default is off. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * example.com.ialicdn.com
   */
  cname?: string;
  /**
   * @example
   * on
   */
  crossBorderOptimization?: string;
  /**
   * @remarks
   * #/components/schemas/WafRuleMatch2
   * 
   * @example
   * on
   */
  ipAccessRule?: string;
  /**
   * @remarks
   * Ipv6 switch
   * 
   * @example
   * on
   */
  ipv6?: string;
  /**
   * @remarks
   * Query Transport Layer Acceleration Application
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EB635996-1FD6-5DFD-BA57-27A849599940
   */
  requestId?: string;
  /**
   * @remarks
   * Edge port. Supports:
   * 
   * - A single port, such as 80.
   * - Port range, such as 81-85, representing ports 81, 82, 83, 84, 85.
   * - Combination of ports and port ranges, separated by commas, for example 80,81-85,90, representing ports 80, 81, 82, 83, 84, 85, 90.
   */
  rules?: GetTransportLayerApplicationResponseBodyRules[];
  /**
   * @remarks
   * Forwarding rule protocol, with values:
   * 
   * - TCP: TCP protocol.
   * - UDP: UDP protocol.
   * 
   * @example
   * 1
   */
  rulesCount?: number;
  /**
   * @remarks
   * Details of the forwarding rule.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  staticIp?: string;
  staticIpV4List?: GetTransportLayerApplicationResponseBodyStaticIpV4List[];
  /**
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

