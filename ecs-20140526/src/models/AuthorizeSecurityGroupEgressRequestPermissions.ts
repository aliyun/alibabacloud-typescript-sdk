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
   * The destination IPv4 CIDR block of the security group rule. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group.
   * 
   * *   You must specify at least one of the following parameters: `DestGroupId`, `DestCidrIp`, `Ipv6DestCidrIp`, and `DestPrefixListId`.
   * *   If you specify `DestGroupId` but do not specify `DestCidrIp`, you must set `NicType` to intranet.
   * *   If you specify both `DestGroupId` and `DestCidrIp`, `DestCidrIp` takes precedence.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that manages the destination security group.
   * 
   * *   If both `DestGroupOwnerAccount` and `DestGroupOwnerId` are empty, the rule is created to control access to another security group in your Alibaba Cloud account.
   * *   If `DestCidrIp` is configured, `DestGroupOwnerAccount` is ignored.
   * 
   * @example
   * Test@aliyun.com
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that manages the destination security group.
   * 
   * *   If both `DestGroupOwnerId` and `DestGroupOwnerAccount` are empty, the rule is created to control access to another security group in your Alibaba Cloud account.
   * *   If you specify `DestCidrIp`, `DestGroupOwnerId` is ignored.
   * 
   * @example
   * 12345678910
   */
  destGroupOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination prefix list. You can call the [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) operation to query the IDs of available prefix lists.
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   If a security group resides in the classic network, you cannot specify prefix lists in the rules of the security group. For information about the limits on security groups and prefix lists, see the [Security group limits](~~25412#SecurityGroupQuota1~~) section of the "Limits and quotas" topic.
   * *   If you specify `DestCidrIp`, `Ipv6DestCidrIp`, or `DestGroupId`, this parameter is ignored.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * The protocol. The values of this parameter are case-insensitive. Specifies whether to check that the CPU tag set of the source host is the subset of the CPU tag set of the destination host. Valid values:
   * 
   * *   TCP.
   * *   UDP.
   * *   ICMP.
   * *   ICMPv6.
   * *   GRE.
   * *   ALL: All protocols are supported.
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block of the security group rule. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  This parameter is valid only for ECS instances that reside in virtual private clouds (VPCs) and support IPv6 CIDR blocks. You cannot specify this parameter and `DestCidrIp` in the same request.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block or IPv6 address.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * >  This parameter is valid only for ECS instances that reside in VPCs and support IPv6 CIDR blocks. You cannot specify this parameter and `DestCidrIp` in the same request.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type of the security group rule if the security group resides in the classic network. Specifies whether to check that the CPU tag set of the source host is the subset of the CPU tag set of the destination host. Valid values:
   * 
   * *   internet: public NIC.
   * 
   * *   intranet: internal NIC.
   * 
   *     *   If the security group resides in a VPC, this parameter is set to intranet by default and cannot be changed.
   *     *   If you specify only DestGroupId to create a rule that controls access to the specified security group, you must set this parameter to intranet.
   * 
   * Default value: internet.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  /**
   * @remarks
   * The action of the security group rule. Specifies whether to check that the CPU tag set of the source host is the subset of the CPU tag set of the destination host. Valid values:
   * 
   * *   accept: allows outbound access.
   * *   drop: denies outbound access and returns no responses. In this case, the request times out or the connection cannot be established.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination port numbers for the protocols specified in the security group rule. Specifies whether to check that the CPU tag set of the source host is the subset of the CPU tag set of the destination host. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Specify a port number range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
   * *   If the IpProtocol parameter is set to GRE, the port number range is -1/-1, which indicates all ports.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
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
   * The source IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * This parameter is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source port numbers for the protocols specified in the security group rule. Specifies whether to check that the CPU tag set of the source host is the subset of the CPU tag set of the destination host. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Specify a port number range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
   * *   If you set IpProtocol to GRE, the port number range is -1/-1.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1.
   * 
   * This property is used to support quintuple rules. For more information, see [Security group quintuple rules](https://help.aliyun.com/document_detail/97439.html).
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

