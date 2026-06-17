// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrafficLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the pre-matched ACL rule.
   * 
   * @example
   * 00000000-0000-0000-0000-000000000000
   */
  aclPreRuleId?: string;
  /**
   * @remarks
   * The pre-matching status of the ACL.
   * 
   * @example
   * normal
   */
  aclPreState?: string;
  /**
   * @remarks
   * The status of deep packet inspection.
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
   * 7
   */
  appId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  assetRegion?: string;
  /**
   * @remarks
   * The attack type.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The page number of the query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The direction.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL in the flow log.
   * 
   * @example
   * example.com
   */
  domainUrl?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 182.92.206.XXX
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 9876
   */
  dstPort?: string;
  /**
   * @remarks
   * The destination VPC ID.
   * 
   * @example
   * vpc-wz95m1aq9b0h****vk1yb
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The region of the destination VPC asset.
   * 
   * @example
   * cn-shenzhen
   */
  dstVpcRegionNo?: string;
  /**
   * @remarks
   * The end time. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1742926322
   */
  endTime?: string;
  /**
   * @remarks
   * The firewall type.
   * 
   * @example
   * VpcFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The flow log type.
   * 
   * @example
   * All
   */
  flowType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * icmp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Internet Service Provider (ISP).
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * The UID of the member account.
   * 
   * @example
   * 128599825273****
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  natFirewallId?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-2zew6yn017hhzbm****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number to query. The maximum value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 8b115ae3-da64-4b80-81c1-1cd2dd42****
   */
  ruleId?: string;
  /**
   * @remarks
   * The action of the rule.
   * 
   * @example
   * 0
   */
  ruleResult?: string;
  /**
   * @remarks
   * The source of the rule.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The module that takes effect in the end.
   * 
   * @example
   * 1
   */
  ruleSourceFinal?: string;
  /**
   * @remarks
   * The traceability code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 139.217.234.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 10.68.60.XXX
   */
  srcIP?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 8082
   */
  srcPort?: string;
  /**
   * @remarks
   * The private source IP address.
   * 
   * @example
   * 10.100.134.XX
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The source VPC ID.
   * 
   * @example
   * vpc-wz9309pkwe06lv****tk4
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The region of the source VPC asset.
   * 
   * @example
   * cn-beijing
   */
  srcVpcRegionNo?: string;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp. Unit: seconds. You can query data within the last 7 days. The time range for a single query cannot exceed one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1730946241
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the TLS inspection scope.
   * 
   * @example
   * tis-98fd64c5****
   */
  tlsScopeId?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The vulnerability level.
   * 
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
      ruleSourceFinal: 'RuleSourceFinal',
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
      ruleSourceFinal: 'string',
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

