// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupRequestPermissions extends $dara.Model {
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
   * The destination IPv4 CIDR block. Both CIDR format and IPv4 format address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
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
   * 2. IANA-standard protocol numbers, which are integers from 0 to 255. This is available in the following regions:
   * - Philippines
   * - UK
   * - Malaysia
   * - China (Hohhot)
   * - China (Qingdao)
   * - US (Silicon Valley)
   * - Singapore
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. Both CIDR format and IPv6 format address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. You cannot specify both this parameter and the DestCidrIp parameter in the same settings.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block for access permission settings. Both CIDR format and IPv6 format address ranges are supported.
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. You cannot specify both this parameter and the SourceCidrIp parameter in the same settings.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The NIC type for security group rules in the classic network. Valid values:
   * 
   * - internet: public NIC.
   * 
   * - intranet: internal NIC.
   * 
   * No NIC type settings are required for security group rules in a VPC. The default value is intranet, and it can only be set to intranet.
   * 
   * When you configure mutual access between security groups, which means only the DestGroupId parameter is specified, this parameter can only be set to intranet.
   * 
   * Default value: internet.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  /**
   * @remarks
   * The access permission settings. Valid values:
   * 
   * - accept: allows access.
   * 
   * - drop: denies access without returning a rejection message. The initiator experiences a request timeout or a connection failure.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range for the specified protocol opened in the security group. Valid values:
   * 
   * - TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the stop port. Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * For more information about common scenarios, see [Common ports used by typical applications](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * You can call the DescribePortRangeLists operation to query available port list IDs.
   * - If you specify the Permissions.N.PortRange parameter, this parameter is ignored.
   * - Port lists are not supported when the network type of the security group is classic network. For more information about the limits on security groups and port lists, see [Security group limits](~~25412#SecurityGroupQuota1~~).
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
   * The source IPv4 CIDR block for access permission settings. Both CIDR format and IPv4 format address ranges are supported.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The ID of the source security group for access permission settings.
   * 
   * - You must specify at least one of the following parameters: SourceGroupId, SourceCidrIp, Ipv6SourceCidrIp, and SourcePrefixListId.
   * 
   * - If you specify SourceGroupId but do not specify SourceCidrIp or Ipv6SourceCidrIp, you must set NicType to intranet.
   * 
   * - If you specify both SourceGroupId and SourceCidrIp, SourceCidrIp takes precedence by default.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the source security group for cross-account security group rule settings.
   * 
   * - If neither SourceGroupOwnerAccount nor SourceGroupOwnerId is specified, the rule applies to the access permission settings for your other security groups.
   * 
   * - If SourceCidrIp is specified, the SourceGroupOwnerAccount parameter is invalid.
   * 
   * @example
   * test@aliyun.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the source security group for cross-account security group rule settings.
   * 
   * - If neither SourceGroupOwnerAccount nor SourceGroupOwnerId is specified, the rule applies to the access permission settings for your other security groups.
   * 
   * - If SourceCidrIp is specified, the SourceGroupOwnerAccount parameter is invalid.
   * 
   * @example
   * 1234567890
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The source port range for the specified protocol. Valid values:
   * 
   * - TCP or UDP: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Quintuple rules for security groups](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 7000/8000
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list for access permission settings. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query available prefix list IDs.
   * 
   * Precautions:
   * 
   * If you specify SourceCidrIp, Ipv6SourceCidrIp, or SourceGroupId, this parameter is ignored.
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

export class AuthorizeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Description to specify the description of the security group rule.
   * 
   * @example
   * This is description.
   * 
   * @deprecated
   */
  description?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.DestCidrIp to specify the destination IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  destCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.IpProtocol to specify the protocol type.
   * 
   * @example
   * ALL
   * 
   * @deprecated
   */
  ipProtocol?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Ipv6DestCidrIp to specify the destination IPv6 CIDR block.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Ipv6SourceCidrIp to specify the source IPv6 CIDR block.
   * 
   * @example
   * 2001:250:6000::***
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
   * The array of security group rules. Valid values for the array length: 1 to 100.
   */
  permissions?: AuthorizeSecurityGroupRequestPermissions[];
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.Policy for access permission settings.
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
   * **[Deprecated]** Use Permissions.N.Priority to specify the priority of the security group rule.
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
   * **[Deprecated]** Use Permissions.N.SourceGroupId to specify the source security group ID.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   * 
   * @deprecated
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.SourceGroupOwnerAccount to specify the Alibaba Cloud account that owns the source security group.
   * 
   * @example
   * test@aliyun.com
   * 
   * @deprecated
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.SourceGroupOwnerId to specify the ID of the Alibaba Cloud account that owns the source security group.
   * 
   * @example
   * 1234567890
   * 
   * @deprecated
   */
  sourceGroupOwnerId?: number;
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
  /**
   * @remarks
   * **[Deprecated]** Use Permissions.N.SourcePrefixListId to specify the source prefix list ID.
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
      permissions: { 'type': 'array', 'itemType': AuthorizeSecurityGroupRequestPermissions },
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

