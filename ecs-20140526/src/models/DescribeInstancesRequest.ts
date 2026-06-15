// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. Set this parameter to `CreationStartTime`. When you set both `Filter.1.Key` and `Filter.1.Value`, you can query resources created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. You must also specify the `Filter.1.Key` parameter when you specify this parameter. The value must be in the format `yyyy-MM-ddTHH:mmZ` (UTC+0).
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
   * The tag key.
   * 
   * > To improve compatibility, we recommend that you use the `Tag.N.Key` parameter instead.
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
   * The list of additional instance attributes.
   * 
   * @example
   * META_OPTIONS
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * false
   */
  deviceAvailable?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request. Valid values:
   * 
   * - true: Only checks the request without querying resources. Checks include AccessKey validity, RAM user permissions, and required parameters. If the check fails, an error is returned. If the check passes, the DryRunOperation error code is returned.
   * 
   * - false: Sends a normal request. After passing the checks, a 2XX HTTP status code is returned and resources are queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Elastic IP addresses of instances. This parameter takes effect only when InstanceNetworkType=vpc. Specify multiple IP addresses as a JSON array. You can specify up to 100 IP addresses. Separate IP addresses with commas (,).
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
   * Specifies whether to enable access to instance metadata. Valid values:
   * 
   * - enabled: enabled.
   * 
   * - disabled: disabled.
   * 
   * Default value: enabled.
   * 
   * > For more information about instance metadata, see [Overview of instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to enforce the use of IMDSv2 when accessing instance metadata. Valid values:
   * 
   * - optional: does not enforce IMDSv2.
   * 
   * - required: enforces IMDSv2. After this value is set, instance metadata cannot be accessed in standard mode.
   * 
   * Default value: optional.
   * 
   * > For more information about instance metadata access modes, see [Instance metadata access modes](https://help.aliyun.com/document_detail/150575.html).
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
   * The private IP addresses of instances in the classic network. This parameter takes effect only when InstanceNetworkType=classic. Specify multiple IP addresses as a JSON array. You can specify up to 100 IP addresses. Separate IP addresses with commas (,).
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
   * 
   * - PrePaid: subscription.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The IDs of instances. Specify multiple instance IDs as a JSON array. You can specify up to 100 IDs. Separate IDs with commas (,).
   * 
   * @example
   * ["i-bp67acfmxazb4p****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the instance. You can use the wildcard character \\* for fuzzy search.
   * 
   * @example
   * Test
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - classic: classic network.
   * 
   * - vpc: Virtual Private Cloud (VPC).
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
   * The billing method for public bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * 
   * - PayByTraffic: pay-by-data-transfer.
   * 
   * > In **pay-by-data-transfer** mode, both inbound and outbound peak bandwidth represent upper limits and are not guaranteed service levels. During resource contention, peak bandwidth may be limited. If your business requires guaranteed bandwidth, use **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Indicates whether the instance is I/O optimized. Valid values:
   * 
   * - true: yes.
   * 
   * - false: no.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The IPv6 addresses assigned to the ENI.
   * 
   * **if can be null:**
   * false
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The name of the SSH key pair used by the instance.
   * 
   * @example
   * KeyPairNameTest
   */
  keyPairName?: string;
  /**
   * @remarks
   * The reason why the resource is locked. Valid values:
   * 
   * - financial: The instance is locked due to overdue payment.
   * 
   * - security: The instance is locked for security reasons.
   * 
   * - Recycling: The spot instance is locked and pending release.
   * 
   * - dedicatedhostfinancial: The ECS instance is locked because the dedicated host has an overdue payment.
   * 
   * - refunded: The instance is locked due to a refund.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If you do not specify this parameter or specify a value less than 10, the default value is 10.
   * 
   * - If you specify a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * false
   */
  needSaleCycle?: boolean;
  /**
   * @remarks
   * The pagination token. Set this parameter to the `NextToken` value returned in the last API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be deprecated. We recommend that you use NextToken and MaxResults to perform paged queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated. We recommend that you use NextToken and MaxResults to perform paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP addresses of instances in a VPC. This parameter takes effect only when InstanceNetworkType=vpc. Specify multiple IP addresses as a JSON array. You can specify up to 100 IP addresses. Separate IP addresses with commas (,).
   * 
   * @example
   * ["172.16.1.1", "172.16.2.1", … "172.16.10.1"]
   */
  privateIpAddresses?: string;
  /**
   * @remarks
   * The public IP addresses of instances. Specify multiple IP addresses as a JSON array. You can specify up to 100 IP addresses. Separate IP addresses with commas (,).
   * 
   * @example
   * ["42.1.1.**", "42.1.2.**", … "42.1.10.**"]
   */
  publicIpAddresses?: string;
  /**
   * @remarks
   * The RDMA IP address of the HPC instance.
   * 
   * @example
   * 10.10.10.102
   */
  rdmaIpAddresses?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. When you use this parameter to filter resources, the number of resources cannot exceed 1,000.
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
   * The security group to which the instance belongs.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - Pending: The instance is being created.
   * 
   * - Running: The instance is running.
   * 
   * - Starting: The instance is starting.
   * 
   * - Stopping: The instance is stopping.
   * 
   * - Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
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
   * The ID of the Virtual Private Cloud (VPC).
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

