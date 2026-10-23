// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The description of the security group rule. The description must be 1 to 512 characters in length.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. CIDR blocks and IPv4 address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The protocol type. The value is not case-sensitive. Valid values: 
   *          
   * - TCP.
   * - UDP.
   * - ICMP.
   * - ICMPv6.
   * - GRE.
   * - ALL: all protocols.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. CIDR blocks and IPv6 address ranges are supported. 
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   *          
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. You cannot specify both this parameter and the `DestCidrIp` parameter at the same time.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 Classless Inter-Domain Routing from which you want to revoke access permissions. CIDR format and IPv6 format IP address ranges are supported.
   * 
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. Settings for this parameter and the `SourceCidrIp` parameter cannot be applied at the same time.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type of the security group rule. You do not need to specify the network interface controller (NIC) type for security group rules in a VPC. The default value is intranet, and only intranet is supported.
   * 
   * > The classic network feature has been taken offline. For details, see [Offline notice](https://help.aliyun.com/document_detail/2833134.html). The network interface controller (NIC) type for classic network security group rules. Valid values:
   * > - internet: public network interface controller (NIC).
   * > - intranet: internal network interface controller (NIC).
   * 
   * @example
   * intranet
   */
  nicType?: string;
  /**
   * @remarks
   * The access permissions. Valid values: 
   *          
   * - accept: allows access.
   * - drop: deny access without returning a rejection message. The initiator receives a message indicating that the request timeout or the connection failed.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range for the protocol specified in the security group rule. Valid values:
   *          
   * - For TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For ICMP: -1/-1.
   * - For GRE: -1/-1.
   * - For ALL: -1/-1.
   * 
   * @example
   * 1/200
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * 
   * You can call the `DescribePortRangeLists` operation to query the IDs of available port lists.
   * 
   * If you specify the `Permissions.N.PortRange` parameter, this parameter is ignored.
   * 
   * For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority. Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The source IPv4 Classless Inter-Domain Routing from which you want to revoke access permissions. CIDR format and IPv4 format IP address ranges are supported.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The ID of the source security group from which you want to revoke access permissions.
   * 
   * - You must specify at least one of the following parameters: `SourceGroupId`, `SourceCidrIp`, `Ipv6SourceCidrIp`, and `SourcePrefixListId`.
   * 
   * - If you specify `SourceGroupId` but do not specify `SourceCidrIp` or `Ipv6SourceCidrIp`, you must set the NicType parameter to intranet.
   * 
   * - If you specify both `SourceGroupId` and `SourceCidrIp`, `SourceCidrIp` takes precedence by default.
   * 
   * Take note of the following items:
   * 
   * - Advanced security groups do not support authorization between security groups.
   * 
   * - A basic security group can be authorized to access a maximum of 20 other security groups.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the source security group belongs when you revoke a cross-account authorization security group rule.
   * 
   * - If Settings for neither `SourceGroupOwnerAccount` nor `SourceGroupOwnerId` are applied, it is considered that you are revoking the access permissions from your other security groups.
   * - If `SourceCidrIp` is specified, the `SourceGroupOwnerAccount` parameter is invalid.
   * 
   * @example
   * Test@aliyun.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source security group belongs when you revoke a cross-account authorization security group rule.
   * 
   * - If Settings for neither `SourceGroupOwnerId` nor `SourceGroupOwnerAccount` are applied, it is considered that you are revoking the access permissions from your other security groups.
   * - If `SourceCidrIp` is specified, the `SourceGroupOwnerId` parameter is invalid.
   * 
   * @example
   * 12345678910
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The source port range for the protocol specified in the security group rule. Valid values: 
   *          
   * - For TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - For ICMP: -1/-1.
   * - For GRE: -1/-1.
   * - For ALL: -1/-1.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list from which you want to revoke access permissions. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * Precautions:
   * 
   * If you specify one of the `SourceCidrIp`, `Ipv6SourceCidrIp`, and `SourceGroupId` parameters, this parameter is ignored.
   * 
   * For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  sourcePrefixListId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      portRangeListId: 'PortRangeListId',
      priority: 'Priority',
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
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      ipv6DestCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      portRangeListId: 'string',
      priority: 'string',
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

export class RevokeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.Description` to specify the description of the rule.
   * 
   * @example
   * This is description.
   * 
   * @deprecated
   */
  description?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.DestCidrIp` to specify the destination IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  destCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.IpProtocol` to specify the protocol type.
   * 
   * @example
   * ALL
   * 
   * @deprecated
   */
  ipProtocol?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.Ipv6DestCidrIp` to specify the destination IPv6 CIDR block.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   * 
   * @deprecated
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.Ipv6SourceCidrIp` to specify the source IPv6 Classless Inter-Domain Routing.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   * 
   * @deprecated
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.NicType` to specify the NIC type.
   * 
   * @example
   * intranet
   * 
   * @deprecated
   */
  nicType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The array of security group rules. Array length: 0 to 100.
   */
  permissions?: RevokeSecurityGroupRequestPermissions[];
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.Policy` for the Settings of access permissions.
   * 
   * @example
   * accept
   * 
   * @deprecated
   */
  policy?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.PortRange` to specify the port range.
   * 
   * @example
   * 1/200
   * 
   * @deprecated
   */
  portRange?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.Priority` to specify the rule priority.
   * 
   * @example
   * 1
   * 
   * @deprecated
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
   * The array of security group rule IDs. Array length: 0 to 100.
   */
  securityGroupRuleId?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourceCidrIp` to specify the source IPv4 Classless Inter-Domain Routing.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourceGroupId` to specify the source security group ID.
   * 
   * @example
   * sg-bp67acfmxa123b****
   * 
   * @deprecated
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourceGroupOwnerAccount` to specify the Alibaba Cloud account to which the source security group belongs.
   * 
   * @example
   * Test@aliyun.com
   * 
   * @deprecated
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourceGroupOwnerId` to specify the ID of the Alibaba Cloud account to which the source security group belongs.
   * 
   * @example
   * 12345678910
   * 
   * @deprecated
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourcePortRange` to specify the source port range.
   * 
   * @example
   * 80/80
   * 
   * @deprecated
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * **[Deprecated]** Use `Permissions.N.SourcePrefixListId` to specify the source prefix list ID.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   * 
   * @deprecated
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
      permissions: 'Permissions',
      policy: 'Policy',
      portRange: 'PortRange',
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
      permissions: { 'type': 'array', 'itemType': RevokeSecurityGroupRequestPermissions },
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityGroupRuleId: { 'type': 'array', 'itemType': 'string' },
      sourceCidrIp: 'string',
      sourceGroupId: 'string',
      sourceGroupOwnerAccount: 'string',
      sourceGroupOwnerId: 'number',
      sourcePortRange: 'string',
      sourcePrefixListId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    if(Array.isArray(this.securityGroupRuleId)) {
      $dara.Model.validateArray(this.securityGroupRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

