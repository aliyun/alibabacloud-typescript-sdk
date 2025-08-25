// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeResponseBodyPermissionsPermission extends $dara.Model {
  /**
   * @remarks
   * The time when the security group rule was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * Description Sample 01
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block for outbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The ID of the destination security group for outbound access control.
   * 
   * @example
   * sg-bp1czdx84jd88i7v****
   */
  destGroupId?: string;
  /**
   * @remarks
   * The name of the destination security group.
   * 
   * @example
   * testDestGroupName
   */
  destGroupName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the destination security group belongs.
   * 
   * @example
   * 1234567890
   */
  destGroupOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the destination prefix list for outbound access control.
   * 
   * @example
   * pl-x1j1k5ykzqlixabc****
   */
  destPrefixListId?: string;
  /**
   * @remarks
   * The name of the destination prefix list.
   * 
   * @example
   * DestPrefixListName Sample
   */
  destPrefixListName?: string;
  /**
   * @remarks
   * The direction in which the security group rule is applied.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The transport layer protocol.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block.
   * 
   * @example
   * 2001:db8:1233:1a00::***
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * intranet
   */
  nicType?: string;
  /**
   * @remarks
   * The access control policy.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the port list.
   * 
   * @example
   * prl-2ze9743****
   */
  portRangeListId?: string;
  /**
   * @remarks
   * The name of the port list.
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The ID of the security group rule.
   * 
   * @example
   * sgr-bp12kewq32dfwrdi****
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source CIDR block for inbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source security group for inbound access control.
   * 
   * @example
   * sg-bp12kc4rqohaf2js****
   */
  sourceGroupId?: string;
  /**
   * @remarks
   * The name of the source security group.
   * 
   * @example
   * testSourceGroupName1
   */
  sourceGroupName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source security group belongs.
   * 
   * @example
   * 1234567890
   */
  sourceGroupOwnerAccount?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the source prefix list for inbound access control.
   * 
   * @example
   * pl-x1j1k5ykzqlixdcy****
   */
  sourcePrefixListId?: string;
  /**
   * @remarks
   * The name of the source prefix list.
   * 
   * @example
   * SourcePrefixListName Sample
   */
  sourcePrefixListName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      destGroupId: 'DestGroupId',
      destGroupName: 'DestGroupName',
      destGroupOwnerAccount: 'DestGroupOwnerAccount',
      destPrefixListId: 'DestPrefixListId',
      destPrefixListName: 'DestPrefixListName',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      portRangeListId: 'PortRangeListId',
      portRangeListName: 'PortRangeListName',
      priority: 'Priority',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourceGroupId: 'SourceGroupId',
      sourceGroupName: 'SourceGroupName',
      sourceGroupOwnerAccount: 'SourceGroupOwnerAccount',
      sourcePortRange: 'SourcePortRange',
      sourcePrefixListId: 'SourcePrefixListId',
      sourcePrefixListName: 'SourcePrefixListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      destCidrIp: 'string',
      destGroupId: 'string',
      destGroupName: 'string',
      destGroupOwnerAccount: 'string',
      destPrefixListId: 'string',
      destPrefixListName: 'string',
      direction: 'string',
      ipProtocol: 'string',
      ipv6DestCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      portRangeListId: 'string',
      portRangeListName: 'string',
      priority: 'string',
      securityGroupRuleId: 'string',
      sourceCidrIp: 'string',
      sourceGroupId: 'string',
      sourceGroupName: 'string',
      sourceGroupOwnerAccount: 'string',
      sourcePortRange: 'string',
      sourcePrefixListId: 'string',
      sourcePrefixListName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyPermissions extends $dara.Model {
  permission?: DescribeSecurityGroupAttributeResponseBodyPermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyPermissionsPermission },
    };
  }

  validate() {
    if(Array.isArray(this.permission)) {
      $dara.Model.validateArray(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodySnapshotPolicyIds extends $dara.Model {
  snapshotPolicyId?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshotPolicyId: 'SnapshotPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotPolicyId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotPolicyId)) {
      $dara.Model.validateArray(this.snapshotPolicyId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The access control policy of the security group. Valid values:
   * 
   * *   Accept: All instances in the security group can communicate with each other.
   * *   Drop: All instances in the security group are isolated from each other.
   * 
   * @example
   * Accept
   */
  innerAccessPolicy?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If the return value of this parameter is empty when you specify `MaxResults` and `NextToken` for a paged query, no more results are to be returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Details about the security group rules.
   */
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * SecurityGroupName Sample
   */
  securityGroupName?: string;
  snapshotPolicyIds?: DescribeSecurityGroupAttributeResponseBodySnapshotPolicyIds;
  /**
   * @remarks
   * The ID of the VPC. If a VPC ID is returned, the network type of the security group is VPC. If no VPC ID is returned, the network type of the security group is classic network.
   * 
   * @example
   * vpc-bp1opxu1zkhn00gzv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      innerAccessPolicy: 'InnerAccessPolicy',
      nextToken: 'NextToken',
      permissions: 'Permissions',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      snapshotPolicyIds: 'SnapshotPolicyIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      innerAccessPolicy: 'string',
      nextToken: 'string',
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      regionId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      snapshotPolicyIds: DescribeSecurityGroupAttributeResponseBodySnapshotPolicyIds,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.permissions && typeof (this.permissions as any).validate === 'function') {
      (this.permissions as any).validate();
    }
    if(this.snapshotPolicyIds && typeof (this.snapshotPolicyIds as any).validate === 'function') {
      (this.snapshotPolicyIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

