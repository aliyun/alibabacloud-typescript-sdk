// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of filter 1 used to query resources. Set the value to `CreationStartTime`. You can specify a time point by setting both `Filter.1.Key` and `Filter.1.Value` to query resources that were created after the time point.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The value of filter 1 used to query resources. You must specify `Filter.1.Key` when you specify this parameter. Specify the time in the `yyyy-MM-ddTHH:mmZ` format in UTC+0.
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
   * The tag key of the instance. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count that are attached with all specified tags cannot exceed 1000. If the resource count exceeds 1000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: 1 to 20.
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.  
   * - false: sends a normal request, passes the dry run, and returns a 2XX HTTP status code to directly query the resource status. 
   * 
   * Default value: false.
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
   * - enabled: enabled.
   * - disabled: disabled.
   * 
   * Default value: enabled.
   * > For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/49122.html).
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
   * Specifies whether the enhanced mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
   * - optional: The enhanced mode (IMDSv2) is not forcefully used.
   * - required: The enhanced mode (IMDSv2) is forcefully used. After you set this value, the normal mode cannot be used to access instance metadata.
   * 
   * Default value: optional.
   * > For more information about the modes of accessing instance metadata, see [Access mode of instance metadata](https://help.aliyun.com/document_detail/150575.html).
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
   * The internal IP addresses of instances of the classic network type. This parameter takes effect when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,). 
   * 
   * > - The classic network feature has been offline. For details, see [Offline announcement](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * ["10.1.1.1", "10.1.2.1", … "10.1.10.1"]
   */
  innerIpAddresses?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values: 
   *          
   * - PostPaid: pay-as-you-go. 
   * - PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
   * 
   * @example
   * ["i-bp67acfmxazb4p****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
   * 
   * @example
   * Test
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - vpc: VPC.
   * - classic: classic network. The classic network is no longer available. For more information, see [Retirement announcement](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The public bandwidth billing method. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance metrics. When resource contention occurs, the peak bandwidths may be limited. If you want guaranteed bandwidths for your business, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - true: The instance is I/O optimized.
   * - false: The instance is not I/O optimized.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The IPv6 addresses assigned to the Elastic Network Interface (ENI).
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
   * - financial: ECS instance is locked due to overdue payment.
   * 
   * - security: ECS instance is locked due to security reasons.
   * 
   * - Recycling: The spot instance is locked and pending release.
   * 
   * - dedicatedhostfinancial: ECS instance is locked because the dedicated host has an overdue payment.
   * 
   * - refunded: ECS instance is locked because a refund is made.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If the value is not set or is set to a value less than 10, the default value is 10.
   * - If the value is set to a value greater than 100, the default value is 100.
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
   * > This parameter will be deprecated. Use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated. Use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP addresses of instances in a VPC. This parameter takes effect when the network type is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
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
   * The ID of the resource group to which the instance belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The instance status. Valid values: 
   * 
   * - Pending: being created.
   * - Running: running.
   * - Starting: being started.
   * - Stopping: being stopped.
   * - Stopped: stopped.
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

