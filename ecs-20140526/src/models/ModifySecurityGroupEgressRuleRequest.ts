// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupEgressRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * This is a new securitygroup rule.
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 Classless Inter-Domain Routing (CIDR) block. CIDR format and IPv4 format IP address range are supported.
   * 
   * Default value: null.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group to which you want to grant access permissions. Specify at least one of `DestGroupId` and `DestCidrIp`.
   * 
   * - Specify at least one of DestGroupId, DestCidrIp, Ipv6DestCidrIp, and DestPrefixListId.
   * - If DestGroupId is specified but DestCidrIp is not specified, the NicType parameter can only be set to intranet.
   * - If both DestGroupId and DestCidrIp are specified, DestCidrIp takes precedence.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the destination security group when you set a cross-account security group rule.
   * 
   * @example
   * EcsforCloud@Alibaba.com
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the destination security group when you set a cross-account security group rule.
   * 
   * @example
   * 1234567890
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination prefix list. You can call [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) to query available prefix list IDs.
   * 
   * This parameter is ignored if you specify one of `DestCidrIp`, `Ipv6DestCidrIp`, or `DestGroupId`.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * The network layer or transport layer protocol. Two types of values are supported:
   * 1. Case-insensitive protocol names. Valid values:
   * - ICMP
   * - GRE
   * - TCP
   * - UDP
   * - ALL: all protocols are supported.
   * 2. Protocol numbers that comply with the IANA specification, which are integers from 0 to 255. The following regions currently support this feature:
   * - Philippines
   * - UK (London)
   * - Malaysia
   * - China (Hohhot)
   * - China (Qingdao)
   * - US (Virginia)
   * - Singapore
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 Classless Inter-Domain Routing (CIDR) block. CIDR format and IPv6 format IP address range are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and `DestCidrIp` cannot be specified at the same time. Settings for both parameters simultaneously are not allowed.
   * 
   * Default value: null.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 Classless Inter-Domain Routing (CIDR) block. CIDR format and IPv6 format IP address range are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and `SourceCidrIp` cannot be specified at the same time. Settings for both parameters simultaneously are not allowed.
   * 
   * Default value: null.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface type.
   * 
   * > When you modify a rule by specifying the security group rule ID, this parameter cannot be modified. To make such a change, add a new rule and then delete the current rule.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The access permissions. Valid values:
   * 
   * - accept: accepts access.
   * - drop: deny access and does not return a rejection response.
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
   * - For TCP/UDP: valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
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
   * The port address book ID.
   * You can call `DescribePortRangeLists` to query available port address book IDs.
   * 
   * This parameter is ignored if you specify the PortRange parameter.
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
   * The region ID of the source security group. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The security group rule ID. You can call [DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/2679845.html) to query the security group rule ID.
   * 
   * @example
   * sgr-bp67acfmxazb4q****
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source IPv4 Classless Inter-Domain Routing (CIDR) block. CIDR format and IPv4 format IP address range are supported.
   * 
   * Default value: null.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports that correspond to the transport layer protocol. Valid values:
   * 
   * - For TCP/UDP: valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
   * - For ICMP: -1/-1.
   * - For GRE: -1/-1.
   * - For ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      destGroupId: 'DestGroupId',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      destGroupOwnerId: 'DestGroupOwnerId',
      destPrefixListId: 'DestPrefixListId',
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
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destCidrIp: 'string',
      destGroupId: 'string',
      destGroupOwnerAccount: 'string',
      destGroupOwnerId: 'number',
      destPrefixListId: 'string',
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
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

