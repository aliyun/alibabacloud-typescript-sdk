// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the network interface controller (NIC). Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the network interface controller (NIC). Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
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

export class DescribeNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the instance to which the network interface controller (NIC) is attached.
   * 
   * @example
   * i-bp1e2l6djkndyuli****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv6 address of the network interface controller (NIC). N indicates that you can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * 2408:4321:180:1701:94c7:bc38:3bfa:****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for paging. Valid values: 10 to 500.
   * 
   * Default value:
   * 
   * - If you do not set this parameter or set it to a value less than 10, the default value is 10.
   * - If you set this parameter to a value greater than 500, the default value is 500.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The network interface controller (NIC) ID. Valid values of N: 1 to 100.
   * 
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string[];
  /**
   * @remarks
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and can contain characters from the Unicode letter categorization (which includes English letters, Chinese characters, and digits). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * test-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the `NextToken` value returned in the previous API call.
   * 
   * For information about how to view the returned data, refer to the operation description above.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use the MaxResults and NextToken parameters for pagination.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use the MaxResults and NextToken parameters for pagination.
   * 
   * @example
   * 100
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The primary private IP address of the network interface controller (NIC).
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The secondary private IP address of the network interface controller (NIC). Valid values of N: 1 to 100.
   * 
   * @example
   * ``192.168.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. If you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group ID of the secondary ENI.
   * 
   * - To query information about a secondary ENI by security group ID, specify this parameter.
   * - To query information about a primary ENI by security group ID, call [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) and specify the `SecurityGroupId` parameter.
   * 
   * @example
   * sg-bp144yr32sx6ndw****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Indicates whether the user of the network interface controller (NIC) is an Alibaba Cloud service or a Virtual Network Operator (VNO).
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The status of the network interface controller (NIC). Valid values:
   * 
   * * Available: available.
   * * Attaching: being attached.
   * * InUse: attached.
   * * Detaching: being detached.
   * * Deleting: being deleted.
   * 
   * Default value: null, which indicates that all statuses are queried.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeNetworkInterfacesRequestTag[];
  /**
   * @remarks
   * The type of the Elastic Network Interface (ENI). Valid values:
   * 
   * - Primary: primary network interface controller (NIC).
   * - Secondary: secondary ENI.
   * 
   * Default value: null, which indicates that all types are queried.
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID of the network interface controller (NIC).
   * 
   * @example
   * vsw-bp16usj2p27htro3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the network interface controller (NIC).
   * 
   * @example
   * vpc-bp1j7w3gc1cexjqd****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipv6Address: 'Ipv6Address',
      maxResults: 'MaxResults',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      primaryIpAddress: 'PrimaryIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      primaryIpAddress: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      serviceManaged: 'boolean',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNetworkInterfacesRequestTag },
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.networkInterfaceId)) {
      $dara.Model.validateArray(this.networkInterfaceId);
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
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

