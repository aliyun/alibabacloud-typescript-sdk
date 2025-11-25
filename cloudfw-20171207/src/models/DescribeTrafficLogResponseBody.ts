// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficLogResponseBodyDataListDstVpc extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @example
   * vpc-8vba1c1em97h0ji71b****
   */
  vpcId?: string;
  /**
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
   * @example
   * 17
   */
  ruleId?: string;
  /**
   * @example
   * sharepoint
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
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
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * vpc-8vba1c1em97h0ji71****
   */
  vpcId?: string;
  /**
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
   * @example
   * 2
   */
  aclPreRuleId?: string;
  /**
   * @example
   * test
   */
  aclPreRuleName?: string;
  /**
   * @example
   * normal
   */
  aclPreState?: string;
  /**
   * @example
   * success
   */
  appDpiState?: string;
  /**
   * @example
   * 6
   */
  appId?: number;
  /**
   * @example
   * HTTP
   */
  appName?: string;
  /**
   * @example
   * WebLogic
   */
  attackApp?: string;
  /**
   * @example
   * 0
   */
  attackType?: number;
  /**
   * @example
   * FI
   */
  cityId?: string;
  /**
   * @example
   * tcp_fin
   */
  closeReason?: string;
  /**
   * @example
   * ngw-*
   */
  cloudInstanceId?: string;
  /**
   * @example
   * US
   */
  countryId?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * aliyun.com
   */
  domainName?: string;
  /**
   * @example
   * xxx.com
   */
  domainUrl?: string;
  /**
   * @example
   * 2.2.2.2
   */
  dstIP?: string;
  /**
   * @example
   * 80
   */
  dstPort?: number;
  dstVpc?: DescribeTrafficLogResponseBodyDataListDstVpc;
  /**
   * @example
   * 1751423363
   */
  endTime?: number;
  ext?: string;
  /**
   * @example
   * 125
   */
  inBytes?: string;
  /**
   * @example
   * 12
   */
  inPackets?: string;
  /**
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @example
   * FOP Dmytro Nedilskyi
   */
  isp?: string;
  /**
   * @example
   * 50075069
   */
  ispId?: string;
  location?: string;
  /**
   * @example
   * 14151892****7022
   */
  memberUid?: string;
  /**
   * @example
   * 230
   */
  outBytes?: string;
  /**
   * @example
   * 11
   */
  outPackets?: string;
  /**
   * @example
   * 355
   */
  packetBytes?: number;
  /**
   * @example
   * 23
   */
  packetCount?: number;
  /**
   * @example
   * 172.21.234.XXX
   */
  privateIp?: string;
  /**
   * @example
   * 80
   */
  privatePort?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000000
   */
  ruleId?: string;
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @example
   * pass
   */
  ruleResult?: number;
  /**
   * @example
   * 0
   */
  ruleSource?: string;
  rules?: DescribeTrafficLogResponseBodyDataListRules[];
  /**
   * @example
   * 1.1.1.1
   */
  srcIP?: string;
  /**
   * @example
   * 20206
   */
  srcPort?: number;
  /**
   * @example
   * 172.16.101.7
   */
  srcPrivateIP?: string;
  srcVpc?: DescribeTrafficLogResponseBodyDataListSrcVpc;
  /**
   * @example
   * 1751423362
   */
  startTime?: number;
  /**
   * @example
   * tir-xxx
   */
  tlsRuleId?: string;
  /**
   * @example
   * test
   */
  tlsRuleName?: string;
  /**
   * @example
   * tls-xxx
   */
  tlsScopeId?: string;
  /**
   * @example
   * vfw-4045ca7***
   */
  vpcFirewallId?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  dataList?: DescribeTrafficLogResponseBodyDataList[];
  pageInfo?: DescribeTrafficLogResponseBodyPageInfo;
  /**
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

