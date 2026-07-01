// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * The destination IPv4 Classless Inter-Domain Routing (CIDR) block. CIDR format and IPv4 format IP address ranges are supported.
   * 
   * Default value: null.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The network-layer or transport-layer protocol. Two types of values are supported:
   * 1. Case-insensitive protocol names. Valid values:
   * - ICMP
   * - GRE
   * - TCP
   * - UDP
   * - ALL: all protocols are supported.
   * 2. Protocol numbers that comply with IANA specifications, which are integers from 0 to 255. The following regions currently support this feature:
   * - Philippines
   * - UK (London)
   * - Malaysia
   * - China (Hohhot)
   * - China (Qingdao)
   * - US (Virginia)
   * - Singapore
   * 
   * @example
   * ALL
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Settings for the destination IPv6 CIDR block. Classless Inter-Domain Routing (CIDR) format and IPv6 format IP address ranges are supported.
   * 
   * >Only VPC-type IP addresses are supported. This parameter and `DestCidrIp` cannot be specified at the same time.
   * 
   * Default value: null.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * Settings for the source IPv6 CIDR block for the access permissions. Classless Inter-Domain Routing (CIDR) format and IPv6 format IP address ranges are supported.
   * 
   * > Only VPC-type IP addresses are supported. This parameter and `SourceCidrIp` cannot be specified at the same time.
   * 
   * Default value: null.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network interface controller (NIC) type.
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
   * - accept: Accepts access.
   * - drop: Denies access and does not return a deny response.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport-layer protocol of the security group. Valid values: 
   *          
   * - TCP/UDP: valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
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
   * The port address book ID.
   * 
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
   * The region ID of the security group. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The security group rule ID. You can call [DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/2679845.html) to query security group rule IDs.
   * 
   * @example
   * sgr-bp67acfmxa123b***
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * Settings for the source IPv4 CIDR block for the access permissions. Classless Inter-Domain Routing (CIDR) format and IPv4 format IP address ranges are supported.
   * 
   * Default value: null.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * Settings for the ID of the source security group for the access permissions. Specify at least one of `SourceGroupId` and `SourceCidrIp`.
   * 
   * - If `SourceGroupId` is specified but `SourceCidrIp` is not, the `NicType` parameter can only be set to intranet.
   * - If both `SourceGroupId` and `SourceCidrIp` are specified, `SourceCidrIp` takes precedence by default.
   * 
   * @example
   * sg-bp67acfmxa123b****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * Settings for the Alibaba Cloud account that owns the source security group when you configure a cross-account security group rule for access permissions. 
   *          
   * - If neither `SourceGroupOwnerAccount` nor `SourceGroupOwnerId` is configured, the rule is configured for the access permissions of your other security groups.
   * - If the `SourceCidrIp` parameter is specified, the `SourceGroupOwnerAccount` parameter is invalid.
   * 
   * @example
   * EcsforCloud@Alibaba.com
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * Settings for the Alibaba Cloud account ID that owns the source security group when you configure a cross-account security group rule for access permissions. 
   *          
   * - If neither `SourceGroupOwnerId` nor `SourceGroupOwnerAccount` is configured, the rule is configured for the access permissions of your other security groups.
   * - If the `SourceCidrIp` parameter is specified, the `SourceGroupOwnerId` parameter is invalid.
   * 
   * @example
   * 12345678910
   */
  sourceGroupOwnerId?: number;
  /**
   * @remarks
   * The range of source ports that correspond to the transport-layer protocol of the security group. Valid values: 
   *          
   * - TCP/UDP: valid values are 1 to 65535. Separate the start port and the end port with a forward slash (/). Example: 1/200.
   * - ICMP: -1/-1.
   * - GRE: -1/-1.
   * - ALL: -1/-1.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * Settings for the ID of the source prefix list for the access permissions. You can invoke [DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html) to query available prefix list IDs.
   * 
   * This parameter is ignored if you specify one of `SourceCidrIp`, `Ipv6SourceCidrIp`, or `SourceGroupId`.
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

