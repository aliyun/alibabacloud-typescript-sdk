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
   * The IPv6 address of the network interface controller (NIC). N indicates that you can configure multiple IPv6 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * 2408:4321:180:1701:94c7:bc38:3bfa:****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The maximum number of entries per page for paging query. Valid values: 10 to 500.
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
   * The name of the network interface controller (NIC). The name must be 2 to 128 characters in length and can contain characters under the Unicode letter categorization (including English letters, Chinese characters, and digits). It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * test-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * **[Deprecated]** Use MaxResults or NextToken for pagination instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  pageNumber?: number;
  /**
   * @remarks
   * **[Deprecated]** Use MaxResults or NextToken for pagination instead.
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
   * The resource group ID. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group ID associated with the secondary ENI.
   * 
   * @example
   * sg-bp144yr32sx6ndw****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether the user of the network interface controller (NIC) is an Alibaba Cloud service or a Virtual Network Operator (VNO).
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The status of the network interface controller (NIC). Valid values:
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
   * The type of the network interface controller (NIC). Valid values:
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

