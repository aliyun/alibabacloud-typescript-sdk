// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute extends $dara.Model {
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * SLA
   */
  localName?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * 99.95%
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes extends $dara.Model {
  specAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute[];
  static names(): { [key: string]: string } {
    return {
      specAttribute: 'SpecAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.specAttribute)) {
      $dara.Model.validateArray(this.specAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.17.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The security group ID. Services in the same security group can access each other.
   * 
   * @example
   * sg-2zeehz13zcyj1kfk3o85
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeqals6rbj51bhjn8b89
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shenzhen-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      securityGroupId: 'SecurityGroupId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      securityGroupId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes extends $dara.Model {
  networkInterfaceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceAttribute: 'NetworkInterfaceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceAttribute)) {
      $dara.Model.validateArray(this.networkInterfaceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributePrivateDnsList extends $dara.Model {
  privateDns?: string[];
  static names(): { [key: string]: string } {
    return {
      privateDns: 'PrivateDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateDns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateDns)) {
      $dara.Model.validateArray(this.privateDns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeTagsTagInfo extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * Cookie
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * 240
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttributeTags extends $dara.Model {
  tagInfo?: DescribeInstancesResponseBodyInstancesInstanceAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-uf6f9zfxfxtp5j9ng3yv4
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the access control list (ACL).
   * 
   * @example
   * test
   */
  aclName?: string;
  /**
   * @remarks
   * Indicates whether the ACL is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  aclStatus?: string;
  /**
   * @remarks
   * The ACL type. Valid values:
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The egress IP address.
   * 
   * @example
   * 10.0.0.1
   */
  classicEgressAddress?: string;
  /**
   * @remarks
   * The internal CIDR block of the user\\"s VPC that can be accessed if the instance is a VPC integration instance.
   * 
   * @example
   * [\\"172.16.0.0/24\\",\\"172.16.1.0/24\\"]
   */
  connectCidrBlocks?: string;
  /**
   * @remarks
   * The ID of the user\\"s VPC if the instance is a VPC integration instance.
   * 
   * @example
   * vpc-m5eo7khlb4h4f8y9egsdg
   */
  connectVpcId?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-10-22 15:36:53.0
   */
  createdTime?: string;
  /**
   * @remarks
   * The type of the dedicated instance. Valid values:
   * 
   * *   vpc_connect: VPC integration instance
   * *   normal: conventional dedicated instance
   * 
   * @example
   * vpc_connect
   */
  dedicatedInstanceType?: string;
  /**
   * @remarks
   * Indicates whether outbound IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  egressIpv6Enable?: boolean;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 1659801600000
   */
  expiredTime?: string;
  /**
   * @remarks
   * The HTTPS security policy.
   * 
   * @example
   * HTTPS2_TLS1_2
   */
  httpsPolicies?: string;
  /**
   * @remarks
   * The ID of the IPv6 ACL.
   * 
   * @example
   * acl-124resFfs235
   */
  IPV6AclId?: string;
  /**
   * @remarks
   * The name of the IPv6 ACL.
   * 
   * @example
   * testIPV6
   */
  IPV6AclName?: string;
  /**
   * @remarks
   * Indicates whether the IPv6 ACL is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  IPV6AclStatus?: string;
  /**
   * @remarks
   * The type of the IPv6 ACL. Valid values:
   * 
   * *   black: blacklist
   * *   white: whitelist
   * 
   * @example
   * black
   */
  IPV6AclType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The CIDR block of the dedicated instance.
   * 
   * *   172.16.0.0/12
   * *   192.168.0.0/16
   * 
   * @example
   * 192.168.0.0/16
   */
  instanceCidrBlock?: string;
  /**
   * @remarks
   * The ID of the cluster to which the dedicated instance cluster belongs.
   * 
   * @example
   * apigateway-cluster-sh-1523cafbgffd
   */
  instanceClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * api-shared-vpc-020
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The requests per second (RPS) limit on the instance.
   * 
   * @example
   * 500
   */
  instanceRpsLimit?: number;
  /**
   * @remarks
   * The instance specification.
   * 
   * @example
   * api.s1.small
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The instance specification details.
   */
  instanceSpecAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   VPC_SHARED: shared instance (VPC)
   * *   VPC_DEDICATED: dedicated instance (VPC)
   * 
   * @example
   * VPC_SHARED
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound public IP address.
   * 
   * @example
   * 47.241.89.244
   */
  internetEgressAddress?: string;
  /**
   * @remarks
   * The internal CIDR block that is allowed to access the API Gateway instance.
   * 
   * @example
   * [\\"172.36.0.0/16\\",\\"172.31.16.0/20\\"]
   */
  intranetSegments?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time is in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 01:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 22:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The network information of the user\\"s VPC if the instance is a VPC integration instance.
   */
  networkInterfaceAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes;
  /**
   * @remarks
   * The new VPC egress CIDR block.
   * 
   * @example
   * 100.104.253.0/26
   */
  newVpcEgressAddress?: string;
  /**
   * @remarks
   * The private DNS list.
   */
  privateDnsList?: DescribeInstancesResponseBodyInstancesInstanceAttributePrivateDnsList;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether IPv6 traffic is supported.
   * 
   * @example
   * true
   */
  supportIpv6?: boolean;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: DescribeInstancesResponseBodyInstancesInstanceAttributeTags;
  /**
   * @remarks
   * The user VPC ID.
   * 
   * @example
   * vpc-t***hx****yu9****t0g4
   */
  userVpcId?: string;
  /**
   * @remarks
   * The user vSwitch ID.
   * 
   * @example
   * vsw-t4***eh****d7q****i2f
   */
  userVswitchId?: string;
  /**
   * @remarks
   * The VPC egress CIDR block.
   * 
   * @example
   * 100.104.254.0/26
   */
  vpcEgressAddress?: string;
  /**
   * @remarks
   * Indicates whether VPC access is enabled.
   * 
   * @example
   * true
   */
  vpcIntranetEnable?: boolean;
  /**
   * @remarks
   * The ID of the account to which the VPC-based instance belongs.
   * 
   * @example
   * 1408453217640291****
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * Indicates whether virtual private cloud (VPC) Server Load Balancer (SLB) is enabled.
   * 
   * @example
   * true
   */
  vpcSlbIntranetEnable?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-MAZ5(g,h)
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * Multi-Availability Zone 3(b,c,a)
   */
  zoneLocalName?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      classicEgressAddress: 'ClassicEgressAddress',
      connectCidrBlocks: 'ConnectCidrBlocks',
      connectVpcId: 'ConnectVpcId',
      createdTime: 'CreatedTime',
      dedicatedInstanceType: 'DedicatedInstanceType',
      egressIpv6Enable: 'EgressIpv6Enable',
      expiredTime: 'ExpiredTime',
      httpsPolicies: 'HttpsPolicies',
      IPV6AclId: 'IPV6AclId',
      IPV6AclName: 'IPV6AclName',
      IPV6AclStatus: 'IPV6AclStatus',
      IPV6AclType: 'IPV6AclType',
      instanceChargeType: 'InstanceChargeType',
      instanceCidrBlock: 'InstanceCidrBlock',
      instanceClusterId: 'InstanceClusterId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRpsLimit: 'InstanceRpsLimit',
      instanceSpec: 'InstanceSpec',
      instanceSpecAttributes: 'InstanceSpecAttributes',
      instanceType: 'InstanceType',
      internetEgressAddress: 'InternetEgressAddress',
      intranetSegments: 'IntranetSegments',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      networkInterfaceAttributes: 'NetworkInterfaceAttributes',
      newVpcEgressAddress: 'NewVpcEgressAddress',
      privateDnsList: 'PrivateDnsList',
      regionId: 'RegionId',
      status: 'Status',
      supportIpv6: 'SupportIpv6',
      tags: 'Tags',
      userVpcId: 'UserVpcId',
      userVswitchId: 'UserVswitchId',
      vpcEgressAddress: 'VpcEgressAddress',
      vpcIntranetEnable: 'VpcIntranetEnable',
      vpcOwnerId: 'VpcOwnerId',
      vpcSlbIntranetEnable: 'VpcSlbIntranetEnable',
      zoneId: 'ZoneId',
      zoneLocalName: 'ZoneLocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      aclType: 'string',
      classicEgressAddress: 'string',
      connectCidrBlocks: 'string',
      connectVpcId: 'string',
      createdTime: 'string',
      dedicatedInstanceType: 'string',
      egressIpv6Enable: 'boolean',
      expiredTime: 'string',
      httpsPolicies: 'string',
      IPV6AclId: 'string',
      IPV6AclName: 'string',
      IPV6AclStatus: 'string',
      IPV6AclType: 'string',
      instanceChargeType: 'string',
      instanceCidrBlock: 'string',
      instanceClusterId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRpsLimit: 'number',
      instanceSpec: 'string',
      instanceSpecAttributes: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes,
      instanceType: 'string',
      internetEgressAddress: 'string',
      intranetSegments: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      networkInterfaceAttributes: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes,
      newVpcEgressAddress: 'string',
      privateDnsList: DescribeInstancesResponseBodyInstancesInstanceAttributePrivateDnsList,
      regionId: 'string',
      status: 'string',
      supportIpv6: 'boolean',
      tags: DescribeInstancesResponseBodyInstancesInstanceAttributeTags,
      userVpcId: 'string',
      userVswitchId: 'string',
      vpcEgressAddress: 'string',
      vpcIntranetEnable: 'boolean',
      vpcOwnerId: 'number',
      vpcSlbIntranetEnable: 'boolean',
      zoneId: 'string',
      zoneLocalName: 'string',
    };
  }

  validate() {
    if(this.instanceSpecAttributes && typeof (this.instanceSpecAttributes as any).validate === 'function') {
      (this.instanceSpecAttributes as any).validate();
    }
    if(this.networkInterfaceAttributes && typeof (this.networkInterfaceAttributes as any).validate === 'function') {
      (this.networkInterfaceAttributes as any).validate();
    }
    if(this.privateDnsList && typeof (this.privateDnsList as any).validate === 'function') {
      (this.privateDnsList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  instanceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.instanceAttribute)) {
      $dara.Model.validateArray(this.instanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  instances?: DescribeInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEB6EC62-B6C7-5082-A45A-45A204724AC2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

