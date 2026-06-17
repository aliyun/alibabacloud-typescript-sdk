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
   * The instance name of the VPC.
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
   * The source of the rule.
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
   * The ID of the pre-matched ACL policy. If you leave this parameter empty, all policies are matched.
   * 
   * @example
   * 2
   */
  aclPreRuleId?: string;
  /**
   * @remarks
   * The name of the pre-matched ACL policy.
   * 
   * @example
   * test
   */
  aclPreRuleName?: string;
  /**
   * @remarks
   * The pre-matching status of the ACL. Valid values:
   * 
   * **app_unknown**: The application is not detected.
   * 
   * **domain_unknown**: The domain name is not detected.
   * 
   * **normal**: Normal.
   * 
   * @example
   * normal
   */
  aclPreState?: string;
  /**
   * @remarks
   * The API status. Valid values:
   * 
   * **none**: Initial state.
   * 
   * **policy_discard**: The connection failed to be established and was blocked by a user-defined ACL or threat intelligence.
   * 
   * **tcp_not_establish**: TCP connection failed.
   * 
   * **no_payload**: The connection is established, but deep packet inspection has analyzed zero payloads.
   * 
   * **analysing**: Detecting.
   * 
   * **unknown_loose**: Loose mode. Detection failed. The system continues to detect.
   * 
   * **unknown_strict**: Strict mode. Detection failed.
   * 
   * **success**: Detection successful.
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
   * The reason for closing.
   * 
   * @example
   * tcp_fin
   */
  closeReason?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service instance.
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
   * 
   * - **in**: inbound traffic.
   * 
   * - **out**: outbound traffic.
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
   * The URL in the flow log.
   * 
   * @example
   * xxx.com
   */
  domainUrl?: string;
  /**
   * @remarks
   * The destination IP address found. This indicates that the intrusion prevention event includes this destination IP address.
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
   * The list of destination VPC information.
   */
  dstVpc?: DescribeTrafficLogResponseBodyDataListDstVpc;
  /**
   * @remarks
   * The end time of the data. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1751423363
   */
  endTime?: number;
  /**
   * @remarks
   * Other extension data.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The inbound traffic.
   * 
   * @example
   * 125
   */
  inBytes?: string;
  /**
   * @remarks
   * The number of inbound messages.
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
   * The ISP.
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
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: string;
  /**
   * @remarks
   * The outbound traffic.
   * 
   * @example
   * 230
   */
  outBytes?: string;
  /**
   * @remarks
   * The number of outbound messages.
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
   * 
   * - **pass**: The traffic is allowed.
   * 
   * - **alert**: An alert is generated.
   * 
   * - **drop**: The traffic is dropped.
   * 
   * @example
   * pass
   */
  ruleResult?: number;
  /**
   * @remarks
   * The source of the detection rule that is matched. Valid values:
   * 
   * - **0**: None.
   * 
   * - **1**: Basic protection.
   * 
   * - **2**: Virtual patching.
   * 
   * - **3**: Access control.
   * 
   * - **4**: Threat intelligence.
   * 
   * @example
   * 0
   */
  ruleSource?: string;
  /**
   * @remarks
   * The list of rules.
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
   * The port of the data source.
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
   * The start time of the data. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1751423362
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the rule that is matched by the TLS inspection.
   * 
   * @example
   * tir-xxx
   */
  tlsRuleId?: string;
  /**
   * @remarks
   * The name of the rule that is matched by the TLS inspection.
   * 
   * @example
   * test
   */
  tlsRuleName?: string;
  /**
   * @remarks
   * The ID of the TLS inspection scope.
   * 
   * @example
   * tls-xxx
   */
  tlsScopeId?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
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
   * The number of entries returned per page.
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
   * The paging information.
   */
  pageInfo?: DescribeTrafficLogResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
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

