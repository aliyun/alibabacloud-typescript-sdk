// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterInfoResponseBodyInstanceClusterAttribute extends $dara.Model {
  /**
   * @remarks
   * The internal CIDR block of the user VPC that can be accessed by the cluster if the cluster consists of VPC integration instances.
   * 
   * @example
   * ["192.168.1.0/24","192.168.0.0/24"]
   */
  connectCidrBlocks?: string;
  /**
   * @remarks
   * The ID of the user VPC that is connected to the cluster if the cluster consists of VPC integration instances.
   * 
   * @example
   * vpc-p0w3kxxxxxxxxxxxxxxxx
   */
  connectVpcId?: string;
  /**
   * @remarks
   * Indicates whether outbound IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  egressIpv6Enable?: boolean;
  /**
   * @remarks
   * The HTTPS security policy.
   * 
   * @example
   * HTTPS2_TLS1_0
   */
  httpsPolicies?: string;
  /**
   * @remarks
   * The ID of the IPv4 access control list (ACL).
   * 
   * @example
   * acl-t4n8i4rvvp70kcyuoXXXX
   */
  IPV4AclId?: string;
  /**
   * @remarks
   * The name of the IPv4 ACL.
   * 
   * @example
   * test-black
   */
  IPV4AclName?: string;
  /**
   * @remarks
   * Indicates whether IPv4 access control is enabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  IPV4AclStatus?: string;
  /**
   * @remarks
   * The type of the IPv4 ACL.
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * black
   */
  IPV4AclType?: string;
  /**
   * @remarks
   * The ID of the IPv6 ACL.
   * 
   * @example
   * acl-t4nevzhwbpe7cup18XXXX
   */
  IPV6AclId?: string;
  /**
   * @remarks
   * The name of the IPv6 ACL.
   * 
   * @example
   * test
   */
  IPV6AclName?: string;
  /**
   * @remarks
   * Indicates whether IPv6 access control is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  IPV6AclStatus?: string;
  /**
   * @remarks
   * The type of the IPv6 ACL. Valid values:
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * white
   */
  IPV6AclType?: string;
  /**
   * @remarks
   * The outbound public IP address.
   * 
   * @example
   * 39.106.XX.XX
   */
  internetEgressAddress?: string;
  /**
   * @remarks
   * The outbound private IP address.
   * 
   * @example
   * 100.104.XX.XX/26
   */
  intranetEgressAddress?: string;
  /**
   * @remarks
   * The custom CIDR block. The configured CIDR block is considered as a private block.
   * 
   * @example
   * 123.0.0.1
   */
  intranetSegments?: string;
  /**
   * @remarks
   * Indicates whether IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  supportIpv6?: boolean;
  /**
   * @remarks
   * The ID of the client VPC.
   * 
   * @example
   * vpc-2zew2v4vcg78mXXXX
   */
  userVpcId?: string;
  /**
   * @remarks
   * The vSwitch of the client VPC.
   * 
   * @example
   * vsw-2zecr5r7ao44tslsXXXX
   */
  userVswitchId?: string;
  /**
   * @remarks
   * The VIPs of the cluster.
   * 
   * @example
   * VPC_INTERNET_IPV6
   */
  vipTypeList?: string;
  /**
   * @remarks
   * Indicates whether a virtual private cloud (VPC) domain name is enabled.
   */
  vpcIntranetEnable?: boolean;
  /**
   * @remarks
   * The ID of the account to which the VPC belongs.
   * 
   * @example
   * 165438596694XXXX
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * Indicates whether self-calling is enabled.
   * 
   * @example
   * false
   */
  vpcSlbIntranetEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectCidrBlocks: 'ConnectCidrBlocks',
      connectVpcId: 'ConnectVpcId',
      egressIpv6Enable: 'EgressIpv6Enable',
      httpsPolicies: 'HttpsPolicies',
      IPV4AclId: 'IPV4AclId',
      IPV4AclName: 'IPV4AclName',
      IPV4AclStatus: 'IPV4AclStatus',
      IPV4AclType: 'IPV4AclType',
      IPV6AclId: 'IPV6AclId',
      IPV6AclName: 'IPV6AclName',
      IPV6AclStatus: 'IPV6AclStatus',
      IPV6AclType: 'IPV6AclType',
      internetEgressAddress: 'InternetEgressAddress',
      intranetEgressAddress: 'IntranetEgressAddress',
      intranetSegments: 'IntranetSegments',
      supportIpv6: 'SupportIpv6',
      userVpcId: 'UserVpcId',
      userVswitchId: 'UserVswitchId',
      vipTypeList: 'VipTypeList',
      vpcIntranetEnable: 'VpcIntranetEnable',
      vpcOwnerId: 'VpcOwnerId',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectCidrBlocks: 'string',
      connectVpcId: 'string',
      egressIpv6Enable: 'boolean',
      httpsPolicies: 'string',
      IPV4AclId: 'string',
      IPV4AclName: 'string',
      IPV4AclStatus: 'string',
      IPV4AclType: 'string',
      IPV6AclId: 'string',
      IPV6AclName: 'string',
      IPV6AclStatus: 'string',
      IPV6AclType: 'string',
      internetEgressAddress: 'string',
      intranetEgressAddress: 'string',
      intranetSegments: 'string',
      supportIpv6: 'boolean',
      userVpcId: 'string',
      userVswitchId: 'string',
      vipTypeList: 'string',
      vpcIntranetEnable: 'boolean',
      vpcOwnerId: 'number',
      vpcSlbIntranetEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

