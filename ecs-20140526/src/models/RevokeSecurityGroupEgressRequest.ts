// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupEgressRequestPermissions extends $dara.Model {
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
   * The destination IPv4 Classless Inter-Domain Routing for which you want to revoke access permissions. Supports Classless Inter-Domain Routing format and IPv4 format IP address ranges.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group for which you want to revoke access permissions.
   * 
   * - You must configure the Settings for at least one of the following parameters: DestGroupId, DestCidrIp, Ipv6DestCidrIp, and DestPrefixListId.
   * - If you specify DestGroupId but do not specify DestCidrIp, you must set NicType to intranet.
   * - If you specify both DestGroupId and DestCidrIp, DestCidrIp takes precedence by default.
   * 
   * Take note of the following items:
   * 
   * - Advanced security groups do not support authorization between security groups.
   * - A basic security group can be authorized to access up to 20 other security groups.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the destination security group belongs when you revoke a cross-account authorization security group rule.
   * 
   * - If the Settings for neither DestGroupOwnerAccount nor DestGroupOwnerId are configured, it is considered as revoking the access permissions of your other security groups. 
   * - If the Settings for the DestCidrIp parameter are configured, the DestGroupOwnerAccount parameter is invalid.
   * 
   * @example
   * Test@aliyun.com
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination security group belongs when you revoke a cross-account authorization security group rule.
   * 
   * - If the Settings for neither DestGroupOwnerId nor DestGroupOwnerAccount are configured, it is considered as revoking the access permissions of your other security groups.  
   * - If you have configured the Settings for the DestCidrIp parameter, the DestGroupOwnerId parameter is invalid.
   * 
   * @example
   * 12345678910
   */
  destGroupOwnerId?: string;
  /**
   * @remarks
   * The destination prefix list for which you want to revoke access permissions. You can invoke the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * Precautions:
   * 
   * If you specify one of the DestCidrIp, Ipv6DestCidrIp, and DestGroupId parameters, this parameter is ignored.
   * 
   * For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * The protocol type. The value is not case-sensitive. Valid values: 
   *          
   * - TCP
   * - UDP
   * - ICMP
   * - ICMPv6
   * - GRE
   * - ALL: all protocols.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 Classless Inter-Domain Routing for which you want to revoke access permissions. Supports Classless Inter-Domain Routing format and IPv6 format IP address ranges.
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. You cannot configure the Settings for both this parameter and the DestCidrIp parameter at the same time.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block. CIDR blocks and IPv6 address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html). 
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. You cannot specify both this parameter and the DestCidrIp parameter.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type of the security group rule. You do not need to configure the Settings for the NIC type for security group rules in a VPC. The default value is intranet, and only intranet is supported.
   * 
   * > The classic network feature is offline. For details, see [Offline announcement](https://help.aliyun.com/document_detail/2833134.html). The NIC type for classic network type security group rules. Valid values:
   * > - internet: public NIC.
   * > - intranet: internal network NIC.
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
   * - drop: deny access without returning a rejection message. This manifests as a request timeout or connection failure on the initiator side.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range for the protocols opened in the security group. Valid values: 
   *          
   * - TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * You can call the DescribePortRangeLists operation to query the IDs of available port lists.
   * 
   * If you specify the Permissions.N.PortRange parameter, this parameter is ignored.
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
   * The source IPv4 CIDR block. CIDR blocks and IPv4 address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source port range for the protocols opened in the security group. Valid values:
   *          
   * - TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
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
      policy: 'Policy',
      portRange: 'PortRange',
      portRangeListId: 'PortRangeListId',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      destGroupId: 'string',
      destGroupOwnerAccount: 'string',
      destGroupOwnerId: 'string',
      destPrefixListId: 'string',
      ipProtocol: 'string',
      ipv6DestCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      portRangeListId: 'string',
      priority: 'string',
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

export class RevokeSecurityGroupEgressRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among multiple requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Description to specify the rule description.
   * 
   * @example
   * This is description.
   * 
   * @deprecated
   */
  description?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestCidrIp to specify the destination IPv4 Classless Inter-Domain Routing.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  destCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestGroupId to specify the destination security group ID.
   * 
   * @example
   * sg-bp67acfmxa123b****
   * 
   * @deprecated
   */
  destGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestGroupOwnerAccount to specify the Alibaba Cloud account to which the destination security group belongs.
   * 
   * @example
   * Test@aliyun.com
   * 
   * @deprecated
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestGroupOwnerId to specify the ID of the Alibaba Cloud account to which the destination security group belongs.
   * 
   * @example
   * 12345678910
   * 
   * @deprecated
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestPrefixListId to specify the destination prefix list ID.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   * 
   * @deprecated
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.IpProtocol to specify the protocol type.
   * 
   * @example
   * TCP
   * 
   * @deprecated
   */
  ipProtocol?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Ipv6DestCidrIp to specify the destination IPv6 Classless Inter-Domain Routing.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   * 
   * @deprecated
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Ipv6SourceCidrIp to specify the source IPv6 CIDR block.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   * 
   * @deprecated
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.NicType to specify the NIC type.
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
  permissions?: RevokeSecurityGroupEgressRequestPermissions[];
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Policy to configure the Settings for access permissions.
   * 
   * @example
   * accept
   * 
   * @deprecated
   */
  policy?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.PortRange to specify the port range.
   * 
   * @example
   * 22/22
   * 
   * @deprecated
   */
  portRange?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Priority to specify the rule priority.
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
   * The array of security group rule IDs. Array length: 0 to 100.
   */
  securityGroupRuleId?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.SourceCidrIp to specify the source IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.SourcePortRange to specify the source port range.
   * 
   * @example
   * 22/22
   * 
   * @deprecated
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
      permissions: { 'type': 'array', 'itemType': RevokeSecurityGroupEgressRequestPermissions },
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityGroupRuleId: { 'type': 'array', 'itemType': 'string' },
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
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

