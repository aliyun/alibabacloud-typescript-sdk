// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute extends $dara.Model {
  localName?: string;
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
  cidrBlock?: string;
  securityGroupId?: string;
  vswitchId?: string;
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
  key?: string;
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
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  aclType?: string;
  classicEgressAddress?: string;
  connectCidrBlocks?: string;
  connectVpcId?: string;
  createdTime?: string;
  dedicatedInstanceType?: string;
  egressIpv6Enable?: boolean;
  expiredTime?: string;
  httpsPolicies?: string;
  IPV6AclId?: string;
  IPV6AclName?: string;
  IPV6AclStatus?: string;
  IPV6AclType?: string;
  instanceChargeType?: string;
  instanceCidrBlock?: string;
  instanceClusterId?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRpsLimit?: number;
  instanceSpec?: string;
  instanceSpecAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributes;
  instanceType?: string;
  internetEgressAddress?: string;
  intranetSegments?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  networkInterfaceAttributes?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes;
  newVpcEgressAddress?: string;
  privateDnsList?: DescribeInstancesResponseBodyInstancesInstanceAttributePrivateDnsList;
  regionId?: string;
  status?: string;
  supportIpv6?: boolean;
  tags?: DescribeInstancesResponseBodyInstancesInstanceAttributeTags;
  userVpcId?: string;
  userVswitchId?: string;
  vpcEgressAddress?: string;
  vpcIntranetEnable?: boolean;
  vpcOwnerId?: number;
  vpcSlbIntranetEnable?: boolean;
  zoneId?: string;
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

