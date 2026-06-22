// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficLogResponseBodyDataListDstVpc extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The VPC instance ID.
   * 
   * @example
   * vpc-8vba1c1em97h0ji71b****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC instance name.
   * 
   * @example
   * yi-vpc
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficLogResponseBodyDataListRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 17
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * sharepoint
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule source.
   * 
   * @example
   * 3
   */
  ruleSource?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSource: 'RuleSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
      ruleSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficLogResponseBodyDataListSrcVpc extends $dara.Model {
  /**
   * @remarks
   * The region ID of the source VPC.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the source VPC.
   * 
   * @example
   * vpc-8vba1c1em97h0ji71****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance name of the source VPC.
   * 
   * @example
   * yi-vpc
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficLogResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The policy ID of the ACL pre-match. If this parameter is empty, all policies are included.
   * 
   * @example
   * 2
   */
  aclPreRuleId?: string;
  /**
   * @remarks
   * The policy name of the ACL pre-match.
   * 
   * @example
   * test
   */
  aclPreRuleName?: string;
  /**
   * @remarks
   * The ACL pre-match status. Valid values:
   * 
   * **app_unknown**: application not identified
   * 
   * **domain_unknown**: domain name not identified
   * 
   * **normal**: normal.
   * 
   * @example
   * normal
   */
  aclPreState?: string;
  /**
   * @remarks
   * The application identification status. Valid values:
   * 
   * **none**: initial state
   * 
   * **policy_discard**: connection establishment failed because the connection was blocked by a user ACL or threat intelligence rule
   * 
   * **tcp_not_establish**: TCP connection establishment failed
   * 
   * **no_payload**: connection established, but DPI has analyzed 0 payloads
   * 
   * **analysing**: identification in progress
   * 
   * **unknown_loose**: loose mode, identification failed, continuing identification
   * 
   * **unknown_strict**: strict mode, identification failed
   * 
   * **success**: identification succeeded.
   * 
   * @example
   * success
   */
  appDpiState?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 6
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HTTP
   */
  appName?: string;
  /**
   * @remarks
   * The name of the attacked application.
   * 
   * @example
   * WebLogic
   */
  attackApp?: string;
  /**
   * @remarks
   * The attack type of the intrusion prevention event.
   * 
   * @example
   * 0
   */
  attackType?: number;
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * FI
   */
  cityId?: string;
  /**
   * @remarks
   * The close reason.
   * 
   * @example
   * tcp_fin
   */
  closeReason?: string;
  /**
   * @remarks
   * The cloud service instance ID.
   * 
   * @example
   * ngw-*
   */
  cloudInstanceId?: string;
  /**
   * @remarks
   * The country ID.
   * 
   * @example
   * US
   */
  countryId?: string;
  /**
   * @remarks
   * The traffic direction. Valid values:
   * - **in**: inbound.
   * - **out**: outbound.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL of the flow log.
   * 
   * @example
   * xxx.com
   */
  domainUrl?: string;
  /**
   * @remarks
   * The destination IP address. Indicates that the intrusion prevention event contains this destination IP address.
   * 
   * @example
   * 2.2.2.2
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  dstPort?: number;
  /**
   * @remarks
   * The destination VPC information.
   */
  dstVpc?: DescribeTrafficLogResponseBodyDataListDstVpc;
  /**
   * @remarks
   * The end time of the data. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1751423363
   */
  endTime?: number;
  /**
   * @remarks
   * The additional extension data.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The inbound traffic in bytes.
   * 
   * @example
   * 125
   */
  inBytes?: string;
  /**
   * @remarks
   * The number of inbound packets.
   * 
   * @example
   * 12
   */
  inPackets?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * @example
   * FOP Dmytro Nedilskyi
   */
  isp?: string;
  /**
   * @remarks
   * The ISP ID.
   * 
   * @example
   * 50075069
   */
  ispId?: string;
  /**
   * @remarks
   * The region of the source or destination IP address.
   * 
   * @example
   * Hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member accounts.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: string;
  /**
   * @remarks
   * The outbound traffic in bytes.
   * 
   * @example
   * 230
   */
  outBytes?: string;
  /**
   * @remarks
   * The number of outbound packets.
   * 
   * @example
   * 11
   */
  outPackets?: string;
  /**
   * @remarks
   * The number of bytes in the packet.
   * 
   * @example
   * 355
   */
  packetBytes?: number;
  /**
   * @remarks
   * The number of traffic packets.
   * 
   * @example
   * 23
   */
  packetCount?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.21.234.XXX
   */
  privateIp?: string;
  /**
   * @remarks
   * The private port.
   * 
   * @example
   * 80
   */
  privatePort?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the matched rule.
   * 
   * @example
   * 00000000-0000-0000-0000-000000000000
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The final result of the traffic. Valid values:
   * - **0**: Allow.
   * - **1**: Alert.
   * - **2**: Drop.
   * 
   * @example
   * 0
   */
  ruleResult?: number;
  /**
   * @remarks
   * The source of the matched detection rule. Valid values:
   * - **0**: None.
   * - **1**: Basic protection.
   * - **2**: Virtual patches.
   * - **3**: Access control.
   * - **4**: Threat intelligence.
   * 
   * @example
   * 0
   */
  ruleSource?: string;
  /**
   * @remarks
   * The rule list.
   */
  rules?: DescribeTrafficLogResponseBodyDataListRules[];
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 1.1.1.1
   */
  srcIP?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 20206
   */
  srcPort?: number;
  /**
   * @remarks
   * The private source IP address.
   * 
   * @example
   * 172.16.101.7
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The source VPC information.
   */
  srcVpc?: DescribeTrafficLogResponseBodyDataListSrcVpc;
  /**
   * @remarks
   * The start time of the data. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1751423362
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the matched TLS inspection rule.
   * 
   * @example
   * tir-xxx
   */
  tlsRuleId?: string;
  /**
   * @remarks
   * The name of the matched TLS inspection rule.
   * 
   * @example
   * test
   */
  tlsRuleName?: string;
  /**
   * @remarks
   * The TLS inspection scope ID.
   * 
   * @example
   * tls-xxx
   */
  tlsScopeId?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-4045ca7***
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The vulnerability level.
   * 
   * @example
   * 0
   */
  vulLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aclPreRuleId: 'AclPreRuleId',
      aclPreRuleName: 'AclPreRuleName',
      aclPreState: 'AclPreState',
      appDpiState: 'AppDpiState',
      appId: 'AppId',
      appName: 'AppName',
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      cityId: 'CityId',
      closeReason: 'CloseReason',
      cloudInstanceId: 'CloudInstanceId',
      countryId: 'CountryId',
      direction: 'Direction',
      domainName: 'DomainName',
      domainUrl: 'DomainUrl',
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      dstVpc: 'DstVpc',
      endTime: 'EndTime',
      ext: 'Ext',
      inBytes: 'InBytes',
      inPackets: 'InPackets',
      ipProtocol: 'IpProtocol',
      isp: 'Isp',
      ispId: 'IspId',
      location: 'Location',
      memberUid: 'MemberUid',
      outBytes: 'OutBytes',
      outPackets: 'OutPackets',
      packetBytes: 'PacketBytes',
      packetCount: 'PacketCount',
      privateIp: 'PrivateIp',
      privatePort: 'PrivatePort',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      rules: 'Rules',
      srcIP: 'SrcIP',
      srcPort: 'SrcPort',
      srcPrivateIP: 'SrcPrivateIP',
      srcVpc: 'SrcVpc',
      startTime: 'StartTime',
      tlsRuleId: 'TlsRuleId',
      tlsRuleName: 'TlsRuleName',
      tlsScopeId: 'TlsScopeId',
      vpcFirewallId: 'VpcFirewallId',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPreRuleId: 'string',
      aclPreRuleName: 'string',
      aclPreState: 'string',
      appDpiState: 'string',
      appId: 'number',
      appName: 'string',
      attackApp: 'string',
      attackType: 'number',
      cityId: 'string',
      closeReason: 'string',
      cloudInstanceId: 'string',
      countryId: 'string',
      direction: 'string',
      domainName: 'string',
      domainUrl: 'string',
      dstIP: 'string',
      dstPort: 'number',
      dstVpc: DescribeTrafficLogResponseBodyDataListDstVpc,
      endTime: 'number',
      ext: 'string',
      inBytes: 'string',
      inPackets: 'string',
      ipProtocol: 'string',
      isp: 'string',
      ispId: 'string',
      location: 'string',
      memberUid: 'string',
      outBytes: 'string',
      outPackets: 'string',
      packetBytes: 'number',
      packetCount: 'number',
      privateIp: 'string',
      privatePort: 'number',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleResult: 'number',
      ruleSource: 'string',
      rules: { 'type': 'array', 'itemType': DescribeTrafficLogResponseBodyDataListRules },
      srcIP: 'string',
      srcPort: 'number',
      srcPrivateIP: 'string',
      srcVpc: DescribeTrafficLogResponseBodyDataListSrcVpc,
      startTime: 'number',
      tlsRuleId: 'string',
      tlsRuleName: 'string',
      tlsScopeId: 'string',
      vpcFirewallId: 'string',
      vulLevel: 'number',
    };
  }

  validate() {
    if(this.dstVpc && typeof (this.dstVpc as any).validate === 'function') {
      (this.dstVpc as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.srcVpc && typeof (this.srcVpc as any).validate === 'function') {
      (this.srcVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficLogResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeTrafficLogResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeTrafficLogResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 633D92D1-768A-547F-8ADC-2870CF0A99F6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeTrafficLogResponseBodyDataList },
      pageInfo: DescribeTrafficLogResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

