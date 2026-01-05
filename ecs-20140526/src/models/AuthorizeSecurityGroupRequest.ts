// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The description of the security group rule. The name must be 1 to 512 characters in length.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * Network Layer /transport layer protocol. Two types of assignments are supported:
   * 
   * 1.  The case-insensitive protocol name. Valid value:
   * 
   * *   ICMP
   * *   GRE
   * *   TCP
   * *   UDP
   * *   ALL: supports all protocols.
   * 
   * 2.  The value of the IANA-compliant protocol number, which is an integer from 0 to 255. List of regions currently available:
   * 
   * *   Philippines (Manila)
   * *   UK (London)
   * *   Malaysia (Kuala Lumpur)
   * *   China (Hohhot)
   * *   China (Qingdao)
   * *   US (Silicon Valley)
   * *   Singapore
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. IP address ranges in the CIDR format and IPv6 format are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * >  This parameter is valid only for VPC-type ECS instances that support IPv6. This parameter and the `DestCidrIp` parameter cannot be set at the same time.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block of the security group rule. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  This parameter is valid only for Elastic Compute Service (ECS) instances that reside in virtual private clouds (VPCs) and support IPv6 CIDR blocks. You cannot specify both this parameter and `SourceCidrIp` in the same request.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type of the security group rule if the security group resides in the classic network. Default value: Month. Valid values:
   * 
   * *   internet: public NIC.
   * *   intranet: internal NIC.
   * 
   * If the security group resides in a VPC, this parameter is set to intranet by default and cannot be modified.
   * 
   * If you specify only DestGroupId when you configure access permissions between security groups, you must set this parameter to intranet.
   * 
   * Default value: internet.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  /**
   * @remarks
   * The action of the security group rule. Valid values:
   * 
   * *   accept: allows inbound access.
   * *   drop: denies inbound access and returns no responses. In this case, the request times out or the connection cannot be established.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination port numbers for the protocols specified in the security group rule. Valid values:
   * 
   * *   TCP/UDP: Valid values: 1 to 65535. Use a forward slash (/) to separate the start and end ports. Example: 1/200.
   * *   ICMP:-1/-1.
   * *   GRE:-1/-1.
   * *   Set the IpProtocol parameter to ALL:-1/-1.
   * 
   * For more information about the application scenarios of ports, see [Common ports of typical applications](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list. You can call the `DescribePortRangeLists` to query the ID of the port list that can be used.
   * 
   * *   If you specify a `Permissions.N.PortRange` parameter, this parameter is ignored.
   * *   If the network type of the security group is classic network, you cannot set the port list. For more information about limits on security groups and ports, see [Limits on security groups](~~25412#SecurityGroupQuota1~~).
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value specifies a higher priority. Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block of the security group rule. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The ID of the source security group referenced in the security group rule.
   * 
   * *   At least one of `SourceGroupId`, `SourceCidrIp`, `Ipv6SourceCidrIp`, and `SourcePrefixListId` must be specified.
   * *   If you specify `SourceGroupId` but do not specify `SourceCidrIp` or `Ipv6SourceCidrIp`, you must set `NicType` to `intranet`.
   * *   If both `SourceGroupId` and `SourceCidrIp` are specified, `SourceCidrIp` takes precedence.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that manages the source security group referenced in the security group rule.
   * 
   * *   If both `SourceGroupOwnerAccount` and `SourceGroupOwnerId` are empty, access permissions are configured for another security group in your Alibaba Cloud account.
   * *   If you specify `SourceCidrIp`, `SourceGroupOwnerAccount` becomes invalid.
   * 
   * @example
   * test@aliyun.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that manages the source security group referenced in the security group rule.
   * 
   * *   If both `SourceGroupOwnerAccount` and `SourceGroupOwnerId` are empty, access permissions are configured for another security group in your Alibaba Cloud account.
   * *   If you specify `SourceCidrIp`, `SourceGroupOwnerAccount` becomes invalid.
   * 
   * @example
   * 1234567890
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The range of source port numbers for the protocols specified in the security group rule. Default value: Month. Valid values:
   * 
   * *   TCP/UDP: Valid values: 1 to 65535. Use a forward slash (/) to separate the start and end ports. Example: 1/200.
   * *   ICMP protocol:-1/-1.
   * *   GRE protocol:-1/-1.
   * *   If you set IpProtocol to ALL, the port range is -1/-1.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 7000/8000
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list of the security group rule. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * Notes:
   * 
   * *   If a security group resides in the classic network, you cannot specify prefix lists in the rules of the security group. For more information about limits on security groups and prefix lists, see [Limits on security groups](~~25412#SecurityGroupQuota1~~).
   * *   If you specify `SourceCidrIp`, `Ipv6SourceCidrIp`, or `SourceGroupId`, this parameter is ignored.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.Description` to specify the rule description.
   * 
   * @example
   * This is description.
   * 
   * @deprecated
   */
  description?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.DestCidrIp` to specify the destination IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  destCidrIp?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.IpProtocol` to specify the protocol.
   * 
   * @example
   * ALL
   * 
   * @deprecated
   */
  ipProtocol?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.Ipv6DestCidrIp` to specify the destination IPv6 CIDR block.
   * 
   * @example
   * 2001:250:6000::***
   * 
   * @deprecated
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.Ipv6SourceCidrIp` to specify the source IPv6 CIDR block.
   * 
   * @example
   * 2001:250:6000::***
   * 
   * @deprecated
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.NicType` to specify the network interface type.
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
   * An array of security group rules. You can specify 1 to 100 security group rules in a request.
   */
  permissions?: AuthorizeSecurityGroupRequestPermissions[];
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.Policy` to specify whether to allow access.
   * 
   * @example
   * accept
   * 
   * @deprecated
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.PortRange` to specify the range of destination ports.
   * 
   * @example
   * 22/22
   * 
   * @deprecated
   */
  portRange?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.Priority` to specify the rule priority.
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
   * This parameter is deprecated. Use `Permissions.N.SourceCidrIp` to specify the source IPv4 CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   * 
   * @deprecated
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.SourceGroupId` to specify the ID of the source security group.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   * 
   * @deprecated
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.SourceGroupOwnerAccount` to specify the Alibaba Cloud account that manages the source security group.
   * 
   * @example
   * test@aliyun.com
   * 
   * @deprecated
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.SourceGroupOwnerId` to specify the ID of the Alibaba Cloud account that manages the source security group.
   * 
   * @example
   * 1234567890
   * 
   * @deprecated
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.SourcePortRange` to specify the range of source ports.
   * 
   * @example
   * 22/22
   * 
   * @deprecated
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use `Permissions.N.SourcePrefixListId` to specify the ID of the source prefix list.
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

