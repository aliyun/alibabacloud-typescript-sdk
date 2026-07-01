// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupEgressRequestPermissions extends $dara.Model {
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
   * The destination IPv4 Classless Inter-Domain Routing (CIDR) block for which you want to configure access permission settings. Both CIDR format and IPv4 format address ranges are supported.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group for which you want to set access permissions.
   * 
   * - You must specify at least one of the following parameters: `DestGroupId`, `DestCidrIp`, `Ipv6DestCidrIp`, or `DestPrefixListId`.
   * 
   * - If `DestGroupId` is specified but `DestCidrIp` is not, the `NicType` parameter can only be set to intranet.
   * 
   * - If both `DestGroupId` and `DestCidrIp` are specified, `DestCidrIp` takes precedence.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that manages the destination security group when you configure a cross-account security group rule settings. 
   *          
   * - If neither `DestGroupOwnerAccount` nor `DestGroupOwnerId` is specified, the access permissions are configured for another security group within your account.
   * - If the `DestCidrIp` parameter is specified, the `DestGroupOwnerAccount` parameter is ignored.
   * 
   * @example
   * Test@aliyun.com
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that manages the destination security group when you configure a cross-account security group rule settings. 
   *          
   * - If neither `DestGroupOwnerId` nor `DestGroupOwnerAccount` is specified, the access permissions are configured for another security group within your account.
   * - If the `DestCidrIp` parameter is specified, the `DestGroupOwnerId` parameter is ignored.
   * 
   * @example
   * 12345678910
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination prefix list for which you want to set access permissions. You can call [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) to query available prefix list IDs.
   * 
   * Notes:
   * 
   * If you specify one of the `DestCidrIp`, `Ipv6DestCidrIp`, or `DestGroupId` parameters, this parameter is ignored.
   * 
   * For more information, see [Security group limits](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * The network-layer or transport-layer protocol. Two types of values are supported:
   * 1. Case-insensitive protocol names. Valid values:
   * - ICMP
   * - GRE
   * - TCP
   * - UDP
   * - ALL: All protocols are supported.
   * 2. Protocol numbers that comply with IANA specifications, which are integers from 0 to 255. The following regions currently support this feature:
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
   * The destination IPv6 Classless Inter-Domain Routing (CIDR) block for which you want to configure access permission settings. Both CIDR format and IPv6 format address ranges are supported.
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. This parameter and `DestCidrIp` cannot be specified at the same time.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block. Both CIDR format and IPv6 format address ranges are supported. 
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * > This parameter is valid only for VPC-type ECS instances that support IPv6. This parameter and `DestCidrIp` cannot be specified at the same time.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type settings for a classic network security group rule. Valid values: 
   *          
   * - internet: public network interface controller (NIC).
   * - intranet: internal network interface controller (NIC).
   *     - For VPC-type security group rules, you do not need to configure the network interface controller (NIC) type settings. The default value is intranet.
   *     - When you configure security groups to access each other, meaning only the DestGroupId parameter is specified, the value can only be intranet.
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
   * - accept: Accepts access.
   * - drop: Denies access and does not return a deny message. The request times out or a timeout error similar to a connection failure is returned.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the protocol for the security group. Valid values:
   *          
   * - TCP/UDP: Valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The port list ID.
   * You can invoke `DescribePortRangeLists` to query available port list IDs.
   * - If you specify `Permissions.N.PortRange`, this parameter is ignored.
   * - Port lists are not supported for classic network security group settings. For more information about security group and port list limits, see [Security group limits](~~25412#SecurityGroupQuota1~~).
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
   * The source IPv4 CIDR block. Both CIDR format and IPv4 format address ranges are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports that correspond to the protocol for the security group. Valid values:
   *          
   * - TCP/UDP: Valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 80/80
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
      destGroupOwnerId: 'number',
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

export class AuthorizeSecurityGroupEgressRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.Description` to specify the rule description.
   * 
   * @example
   * This is description.
   * 
   * @deprecated
   */
  description?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.DestCidrIp` to specify the destination IPv4 Classless Inter-Domain Routing (CIDR) block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  destCidrIp?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.DestGroupId` to specify the destination security group ID.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   * 
   * @deprecated
   */
  destGroupId?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.DestGroupOwnerAccount` to specify the Alibaba Cloud account that manages the destination security group.
   * 
   * @example
   * Test@aliyun.com
   * 
   * @deprecated
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.DestGroupOwnerId` to specify the ID of the Alibaba Cloud account that manages the destination security group.
   * 
   * @example
   * 12345678910
   * 
   * @deprecated
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.DestPrefixListId` to specify the source prefix list ID.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   * 
   * @deprecated
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.IpProtocol` to specify the protocol type.
   * 
   * @example
   * ALL
   * 
   * @deprecated
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.Ipv6DestCidrIp` to specify the destination IPv6 Classless Inter-Domain Routing (CIDR) block.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   * 
   * @deprecated
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.Ipv6SourceCidrIp` to specify the source IPv6 CIDR block.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   * 
   * @deprecated
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.NicType` to specify the NIC type.
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
   * The security group rules. Array length: 1 to 100.
   */
  permissions?: AuthorizeSecurityGroupEgressRequestPermissions[];
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.Policy` to configure the access permission settings.
   * 
   * @example
   * accept
   * 
   * @deprecated
   */
  policy?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.PortRange` to specify the port range.
   * 
   * @example
   * 80/80
   * 
   * @deprecated
   */
  portRange?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.Priority` to specify the rule priority.
   * 
   * @example
   * 1
   * 
   * @deprecated
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
   * Deprecated. Use `Permissions.N.SourceCidrIp` to specify the source IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * Deprecated. Use `Permissions.N.SourcePortRange` to specify the source port range.
   * 
   * @example
   * 80/80
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
      permissions: { 'type': 'array', 'itemType': AuthorizeSecurityGroupEgressRequestPermissions },
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
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

