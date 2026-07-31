// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of filter 1 used to query resources. Set the value to `CreationStartTime`. If you specify both `Filter.1.Key` and `Filter.1.Value`, you can query resources that were created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The value of filter 1 used to query resources. If you specify this parameter, you must also specify `Filter.1.Key`. Specify the time in the `yyyy-MM-ddTHH:mmZ` format in UTC.
   * 
   * @example
   * 2017-12-05T22:40Z
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

export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the instance. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
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

export class DescribeInstancesRequest extends $dara.Model {
  filter?: DescribeInstancesRequestFilter[];
  /**
   * @remarks
   * The list of additional attributes of the instance.
   * 
   * @example
   * META_OPTIONS
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  deviceAvailable?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The elastic IP addresses (EIPs) of instances. This parameter takes effect when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ["42.1.1.**", "42.1.2.**", … "42.1.10.**"]
   */
  eipAddresses?: string;
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether the access channel for instance metadata is enabled. Valid values:
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether the China mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @remarks
   * The internal network IP addresses of instances in the classic network type. This parameter takes effect when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ["10.1.1.1", "10.1.2.1", … "10.1.10.1"]
   */
  innerIpAddresses?: string;
  /**
   * @remarks
   * The billable methods of the instance. Valid values:
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["i-bp67acfmxazb4p****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the instance. Fuzzy search with the wildcard * is supported.
   * 
   * @example
   * Test
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family of the instance.
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The public bandwidth billable methods. Valid values:
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The IPv6 addresses assigned to the network interface controller (NIC).
   * 
   * **if can be null:**
   * false
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The name of the SSH key pair bound to the instance.
   * 
   * @example
   * KeyPairNameTest
   */
  keyPairName?: string;
  /**
   * @remarks
   * The reason why the resource is locked. Valid values:
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Maximum value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  needSaleCycle?: boolean;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to this operation.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP addresses of instances in the VPC network type. This parameter takes effect when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ["172.16.1.1", "172.16.2.1", … "172.16.10.1"]
   */
  privateIpAddresses?: string;
  /**
   * @remarks
   * The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ["42.1.1.**", "42.1.2.**", … "42.1.10.**"]
   */
  publicIpAddresses?: string;
  /**
   * @remarks
   * The RDMA IP addresses of the HPC instance.
   * 
   * @example
   * 10.10.10.102
   */
  rdmaIpAddresses?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. If you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group to which the instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeInstancesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * v-bp67acfmxazb4p****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      additionalAttributes: 'AdditionalAttributes',
      deviceAvailable: 'DeviceAvailable',
      dryRun: 'DryRun',
      eipAddresses: 'EipAddresses',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageId: 'ImageId',
      innerIpAddresses: 'InnerIpAddresses',
      instanceChargeType: 'InstanceChargeType',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      internetChargeType: 'InternetChargeType',
      ioOptimized: 'IoOptimized',
      ipv6Address: 'Ipv6Address',
      keyPairName: 'KeyPairName',
      lockReason: 'LockReason',
      maxResults: 'MaxResults',
      needSaleCycle: 'NeedSaleCycle',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddresses: 'PrivateIpAddresses',
      publicIpAddresses: 'PublicIpAddresses',
      rdmaIpAddresses: 'RdmaIpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeInstancesRequestFilter },
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      deviceAvailable: 'boolean',
      dryRun: 'boolean',
      eipAddresses: 'string',
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageId: 'string',
      innerIpAddresses: 'string',
      instanceChargeType: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      internetChargeType: 'string',
      ioOptimized: 'boolean',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      lockReason: 'string',
      maxResults: 'number',
      needSaleCycle: 'boolean',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddresses: 'string',
      publicIpAddresses: 'string',
      rdmaIpAddresses: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.additionalAttributes)) {
      $dara.Model.validateArray(this.additionalAttributes);
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

