// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. The value must be CreationStartTime. If you specify both Filter.1.Key and Filter.1.Value, you can query the resources created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. If you specify this parameter, you must also specify the Filter.1.Key parameter. The value must be in the `yyyy-MM-ddTHH:mmZ` format and use the UTC+0 time zone.
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
   * If you use a single tag to filter resources, the resource count returned cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that attach multiple tags cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
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
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * false
   */
  deviceAvailable?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - true: Sends a check request without querying resources. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.  
   * - false: Sends a normal request. If the request passes the dry run, the 2xx HTTP status code is returned and resources are queried. 
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The elastic IP addresses (EIPs) of the instances. This parameter takes effect only when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * ["42.1.1.**", "42.1.2.**", … "42.1.10.**"]
   */
  eipAddresses?: string;
  /**
   * @remarks
   * The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * - enabled: Enable.
   * - disabled: Disable.
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
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcibly use the security access mode (IMDSv2) to access instance metadata. Valid values:
   * - optional: Do not forcibly use the security access mode.
   * - required: Forcibly use the security access mode. After you set this value, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * > For more information about the modes of accessing instance metadata, see [Modes of accessing instance metadata](https://help.aliyun.com/document_detail/150575.html).
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
   * The internal IP addresses of instances in the classic network. This parameter takes effect only when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate multiple IP addresses with commas (,). 
   * 
   * > - The classic network feature is retired. For more information, see [retirement notice](https://help.aliyun.com/document_detail/2833134.html).
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
   * The instance IDs. The value can be a JSON array that consists of up to 100 instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["i-bp67acfmxazb4p****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the instance. You can use the wildcard (*) for fuzzy search.
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
   * - classic: classic network. The classic network feature is retired. For more information, see [retirement notice](https://help.aliyun.com/document_detail/2833134.html).
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
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In the **pay-by-traffic** mode, the peak inbound and outbound bandwidths are the upper limits of bandwidths and are not guaranteed. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidths, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The IPv6 address specified for the Elastic Network Interface (ENI).
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
   * - financial: The resource is locked due to overdue payments.
   * 
   * - security: The resource is locked for security reasons.
   * 
   * - Recycling: The spot instance is in the pending release state.
   * 
   * - dedicatedhostfinancial: The ECS instance is locked due to overdue payments for the dedicated host.
   * 
   * - refunded: The resource is locked due to a refund.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * Default values:
   * 
   * - If you do not specify this parameter or the specified value is less than 10, the default value is 10.
   * - If the specified value is greater than 100, the default value is 100.
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
   * The query token. The value is the NextToken parameter value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. We recommend that you use NextToken and MaxResults for paged query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. We recommend that you use NextToken and MaxResults for paged query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The private IP addresses of instances in the VPC. This parameter takes effect only when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * ["172.16.1.1", "172.16.2.1", … "172.16.10.1"]
   */
  privateIpAddresses?: string;
  /**
   * @remarks
   * The public IP addresses of the instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * ["42.1.1.**", "42.1.2.**", … "42.1.10.**"]
   */
  publicIpAddresses?: string;
  /**
   * @remarks
   * The Remote Direct Memory Access (RDMA) IP addresses of the HPC instance.
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
   * The ID of the enterprise resource group to which the instance belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
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
   * The instance status. Valid values: 
   * 
   * - Pending: The instance is being created.
   * - Running: The instance is running.
   * - Starting: The instance is being started.
   * - Stopping: The instance is being stopped.
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

