// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupEgressRuleRequest extends $dara.Model {
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
   * This is a new securitygroup rule.
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 Classless Inter-Domain Routing. IPv4 address ranges in CIDR format and IPv4 format are supported.
   * 
   * Default value: none.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group for which you want to configure the access permissions. You must specify at least one of the Settings for `DestGroupId` or `DestCidrIp`.
   * 
   * - You must specify at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, and DestPrefixListId parameters.
   * - If you specify DestGroupId but do not specify DestCidrIp, the NicType parameter can only be set to intranet.
   * - If you specify both DestGroupId and DestCidrIp, DestCidrIp takes precedence by default.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the destination security group belongs when you configure the security group rule across accounts.
   * 
   * @example
   * EcsforCloud@Alibaba.com
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination security group belongs when you configure the security group rule across accounts.
   * 
   * @example
   * 1234567890
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination prefix list. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * If you specify one of the `DestCidrIp`, `Ipv6DestCidrIp`, or `DestGroupId` parameters, this parameter is ignored.
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
   * - ALL: all protocols.
   * 2. Protocol numbers that comply with the IANA standard, which are integers from 0 to 255. Available regions:
   * - Philippines
   * - UK
   * - Malaysia
   * - Hohhot
   * - Qingdao
   * - US West
   * - Singapore
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 Classless Inter-Domain Routing. IPv6 address ranges in CIDR format and IPv6 format are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and the `DestCidrIp` parameter cannot be specified in Settings at the same time.
   * 
   * Default value: none.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 Classless Inter-Domain Routing. IPv6 address ranges in CIDR format and IPv6 format are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and the `SourceCidrIp` parameter cannot be specified in Settings at the same time.
   * 
   * Default value: none.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type.
   * 
   * 
   * > This parameter cannot be modified when you modify a rule by specifying the security group rule ID. To modify this parameter, add a new rule and then delete the current rule.
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
   * - accept: Allows access.
   * - drop: deny access and does not return a rejection message.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that are open for the transport layer protocol. Valid values:
   * 
   * - For the TCP or UDP protocol: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For the ICMP protocol: -1/-1.
   * - For the GRE protocol: -1/-1.
   * - For ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * You can call the `DescribePortRangeLists` operation to query the IDs of available port lists.
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
   * The region ID of the source security group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The ID of the security group rule. You can call the [DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/2679845.html) operation to query the ID of the security group rule.
   * 
   * @example
   * sgr-bp67acfmxazb4q****
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source IPv4 Classless Inter-Domain Routing. IPv4 address ranges in CIDR format and IPv4 format are supported.
   * 
   * Default value: none.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports that are open for the transport layer protocol. Valid values:
   * 
   * - For the TCP or UDP protocol: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For the ICMP protocol: -1/-1.
   * - For the GRE protocol: -1/-1.
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

