// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficLogRequest extends $dara.Model {
  /**
   * @example
   * 00000000-0000-0000-0000-000000000000
   */
  aclPreRuleId?: string;
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
   * 7
   */
  appId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  assetRegion?: string;
  /**
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * out
   */
  direction?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * example.com
   */
  domainUrl?: string;
  /**
   * @example
   * 182.92.206.XXX
   */
  dstIP?: string;
  /**
   * @example
   * 9876
   */
  dstPort?: string;
  /**
   * @example
   * vpc-wz95m1aq9b0h****vk1yb
   */
  dstVpcId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  dstVpcRegionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1742926322
   */
  endTime?: string;
  /**
   * @example
   * VpcFirewall
   */
  firewallType?: string;
  /**
   * @example
   * All
   */
  flowType?: string;
  /**
   * @example
   * icmp
   */
  ipProtocol?: string;
  /**
   * @example
   * 4
   */
  ipVersion?: string;
  isp?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  location?: string;
  /**
   * @example
   * 128599825273****
   */
  memberUid?: number;
  /**
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  natFirewallId?: string;
  /**
   * @example
   * ngw-2zew6yn017hhzbm****
   */
  natGatewayId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 8b115ae3-da64-4b80-81c1-1cd2dd42****
   */
  ruleId?: string;
  /**
   * @example
   * 0
   */
  ruleResult?: string;
  /**
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 139.217.234.XXX
   */
  sourceIp?: string;
  /**
   * @example
   * 10.68.60.XXX
   */
  srcIP?: string;
  /**
   * @example
   * 8082
   */
  srcPort?: string;
  /**
   * @example
   * 10.100.134.XX
   */
  srcPrivateIP?: string;
  /**
   * @example
   * vpc-wz9309pkwe06lv****tk4
   */
  srcVpcId?: string;
  /**
   * @example
   * cn-beijing
   */
  srcVpcRegionNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1730946241
   */
  startTime?: string;
  /**
   * @example
   * tis-98fd64c5****
   */
  tlsScopeId?: string;
  /**
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  /**
   * @example
   * 1
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      aclPreRuleId: 'AclPreRuleId',
      aclPreState: 'AclPreState',
      appDpiState: 'AppDpiState',
      appId: 'AppId',
      assetRegion: 'AssetRegion',
      attackType: 'AttackType',
      currentPage: 'CurrentPage',
      direction: 'Direction',
      domainName: 'DomainName',
      domainUrl: 'DomainUrl',
      dstIP: 'DstIP',
      dstPort: 'DstPort',
      dstVpcId: 'DstVpcId',
      dstVpcRegionNo: 'DstVpcRegionNo',
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      flowType: 'FlowType',
      ipProtocol: 'IpProtocol',
      ipVersion: 'IpVersion',
      isp: 'Isp',
      lang: 'Lang',
      location: 'Location',
      memberUid: 'MemberUid',
      natFirewallId: 'NatFirewallId',
      natGatewayId: 'NatGatewayId',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      srcPort: 'SrcPort',
      srcPrivateIP: 'SrcPrivateIP',
      srcVpcId: 'SrcVpcId',
      srcVpcRegionNo: 'SrcVpcRegionNo',
      startTime: 'StartTime',
      tlsScopeId: 'TlsScopeId',
      vpcFirewallId: 'VpcFirewallId',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPreRuleId: 'string',
      aclPreState: 'string',
      appDpiState: 'string',
      appId: 'string',
      assetRegion: 'string',
      attackType: 'string',
      currentPage: 'string',
      direction: 'string',
      domainName: 'string',
      domainUrl: 'string',
      dstIP: 'string',
      dstPort: 'string',
      dstVpcId: 'string',
      dstVpcRegionNo: 'string',
      endTime: 'string',
      firewallType: 'string',
      flowType: 'string',
      ipProtocol: 'string',
      ipVersion: 'string',
      isp: 'string',
      lang: 'string',
      location: 'string',
      memberUid: 'number',
      natFirewallId: 'string',
      natGatewayId: 'string',
      pageSize: 'string',
      ruleId: 'string',
      ruleResult: 'string',
      ruleSource: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      srcPort: 'string',
      srcPrivateIP: 'string',
      srcVpcId: 'string',
      srcVpcRegionNo: 'string',
      startTime: 'string',
      tlsScopeId: 'string',
      vpcFirewallId: 'string',
      vulLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

