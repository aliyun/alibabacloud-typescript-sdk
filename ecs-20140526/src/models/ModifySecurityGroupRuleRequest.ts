// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * The destination IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The transport layer protocol of the security group rule. The value of this parameter is case-insensitive. Valid values:
   * 
   * *   ICMP
   * *   GRE
   * *   TCP
   * *   UDP
   * *   ALL: All protocols are supported.
   * 
   * @example
   * all
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  Only the IP addresses of instances in VPCs are supported. You cannot specify both Ipv6DestCidrIp and `DestCidrIp`.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  Only the IP addresses of instances in virtual private clouds (VPCs) are supported. You cannot specify both Ipv6SourceCidrIp and `SourceCidrIp`.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The type of the network interface controller (NIC).
   * 
   * >  You cannot modify this parameter when you modify a security group rule by specifying the ID of the rule. If you want to change the NIC type of a security group rule, you can create a security group rule of a desired NIC type and delete the existing rule.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The action of the security group rule. Valid values:
   * 
   * *   accept: allows access.
   * *   drop: denies access and returns no responses.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
   * *   If you set IpProtocol to GRE, the port number range is -1/-1.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list. You can call the `DescribePortRangeLists` operation to query the IDs of available port lists.
   * 
   * *   If you specify PortRange, this parameter is ignored.
   * *   If a security group is in the classic network, you cannot configure port lists in the rules of the security group. For information about the limits on security groups and port lists, see [Security group limits](~~25412#SecurityGroupQuota1~~).
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
   * The region ID of the security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the security group rule. You can call the [DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/2679845.html) operation to query the IDs of security group rules in a security group.
   * 
   * @example
   * sgr-bp67acfmxa123b***
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source security group ID. You must specify either `SourceGroupId` or `SourceCidrIp` or specify both of them.
   * 
   * *   If `SourceGroupId` is specified but `SourceCidrIp` is not specified, the value of `NicType` must be set to intranet.
   * *   If both `SourceGroupId` and `SourceCidrIp` are specified, the value of `SourceCidrIp` prevails by default.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that manages the source security group when you configure a security group rule across accounts.
   * 
   * *   If both `SourceGroupOwnerId` and `SourceGroupOwnerAccount` are empty, access permissions are configured for another security group managed by your account.
   * *   If `SourceCidrIp` is specified, `SourceGroupOwnerAccount` is ignored.
   * 
   * @example
   * EcsforCloud@Alibaba.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that manages the source security group when you configure a security group rule across accounts.
   * 
   * *   If both `SourceGroupOwnerId` and `SourceGroupOwnerAccount` are empty, access permissions are configured for another security group managed by your account.
   * *   If `SourceCidrIp` is specified, `SourceGroupOwnerId` is ignored.
   * 
   * @example
   * 12345678910
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The range of source ports that correspond to the transport layer protocol. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
   * *   If you set IpProtocol to GRE, the port number range is -1/-1.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list to which you want to control access. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * If you specify `SourceCidrIp`, `Ipv6SourceCidrIp`, or `SourceGroupId`, this parameter is ignored.
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

