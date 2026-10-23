// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the security group rule. The description must be 1 to 512 characters in length.
   * 
   * @example
   * This is a new security group rule.
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. CIDR format and IPv4 format IP address ranges are supported.
   * 
   * Default value: none.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The network layer or transport layer protocol. Two types of values are supported:
   * 1. Case-insensitive protocol names. Valid values:
   * - ICMP
   * - GRE
   * - TCP
   * - UDP
   * - ALL: all protocols.
   * 2. Protocol numbers that comply with the IANA standard, which are integers from 0 to 255. Supported regions:
   * - Philippines
   * - UK
   * - Malaysia
   * - Hohhot
   * - Qingdao
   * - US West
   * - Singapore
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. CIDR format and IPv6 format IP address ranges are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and the DestCidrIp parameter cannot be specified at the same time.
   * 
   * Default value: none.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block. CIDR format and IPv6 format IP address ranges are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and the SourceCidrIp parameter cannot be specified at the same time.
   * 
   * Default value: none.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The NIC type.
   * 
   * 
   * > You cannot modify this parameter when you modify a rule by specifying the security group rule ID. To modify this parameter, add a new rule and then delete the current rule.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The access permission. Valid values: 
   *          
   * - accept: allows access.
   * - drop: denies access and does not return a rejection message.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that are open for the transport layer protocol in the destination security group. Valid values: 
   *          
   * - For TCP and UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For ICMP: -1/-1.
   * - For GRE: -1/-1.
   * - For ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * 
   * You can call the DescribePortRangeLists operation to query the IDs of available port lists.
   * 
   * If you specify the PortRange parameter, this parameter is ignored.
   * 
   * For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The priority of the security group rule. Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The region ID of the target security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the security group rule. You can call the [DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/2679845.html) operation to query the security group rule ID.
   * 
   * @example
   * sgr-bp67acfmxa123b***
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block. CIDR format and IPv4 format IP address ranges are supported.
   * 
   * Default value: none.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The ID of the source security group. You must specify at least one of the SourceGroupId and SourceCidrIp parameters.
   * 
   * - If you specify SourceGroupId but do not specify SourceCidrIp, the NicType parameter can only be set to intranet.
   * - If you specify both SourceGroupId and SourceCidrIp, SourceCidrIp takes precedence by default.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the source security group belongs when you configure a security group rule across accounts. 
   *          
   * - If neither SourceGroupOwnerAccount nor SourceGroupOwnerId is specified, the rule is considered to configure the access permissions for another security group of your own.
   * - If the SourceCidrIp parameter is specified, the SourceGroupOwnerAccount parameter is invalid.
   * 
   * @example
   * EcsforCloud@Alibaba.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the source security group belongs when you configure a security group rule across accounts. 
   *          
   * - If neither SourceGroupOwnerId nor SourceGroupOwnerAccount is specified, the rule is considered to configure the access permissions for another security group of your own.
   * - If the SourceCidrIp parameter is specified, the SourceGroupOwnerId parameter is invalid.
   * 
   * @example
   * 12345678910
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The range of source ports that are open for the transport layer protocol in the source security group. Valid values: 
   *          
   * - For TCP and UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For ICMP: -1/-1.
   * - For GRE: -1/-1.
   * - For ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * If you specify one of the SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId parameters, this parameter is ignored.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  sourcePrefixListId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      nicType: 'NicType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policy: 'Policy',
      portRange: 'PortRange',
      portRangeListId: 'PortRangeListId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourceGroupId: 'SourceGroupId',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      sourceGroupOwnerId: 'SourceGroupOwnerId',
      sourcePortRange: 'SourcePortRange',
      sourcePrefixListId: 'SourcePrefixListId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      ipv6DestCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      nicType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policy: 'string',
      portRange: 'string',
      portRangeListId: 'string',
      priority: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityGroupRuleId: 'string',
      sourceCidrIp: 'string',
      sourceGroupId: 'string',
      sourceGroupOwnerAccount: 'string',
      sourceGroupOwnerId: 'number',
      sourcePortRange: 'string',
      sourcePrefixListId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

