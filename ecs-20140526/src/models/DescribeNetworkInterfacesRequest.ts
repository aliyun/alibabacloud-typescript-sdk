// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesRequestTag } from "./DescribeNetworkInterfacesRequestTag";


export class DescribeNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the ENI is attached.
   * 
   * @example
   * i-bp1e2l6djkndyuli****
   */
  instanceId?: string;
  /**
   * @remarks
   * An array that consists of the IPv6 address of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * 2408:4321:180:1701:94c7:bc38:3bfa:****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 10 to 500.
   * 
   * Default values:
   * 
   * *   If this parameter is not specified or if this parameter is set to a value less than 10, the default value is 10.
   * *   If this parameter is set to a value greater than 500, the default value is 500.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * An array that consists of the IDs of the ENIs. You specify multiple ENI IDs. Valid values of N: 1 to 100.
   * 
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string[];
  /**
   * @remarks
   * The name of the ENI.
   * 
   * @example
   * test-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The query token. Set the value to the `NextToken` value returned in the last call to this operation.
   * 
   * For more information about how to check the responses returned by this operation, see the preceding "Description" section.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 1000.
   * 
   * Default value: 10.
   * 
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 100
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The primary private IPv4 address of the ENI.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * An array that consists of the secondary private IPv4 addresses of the ENI. You can specify multiple secondary private IPv4 addresses. Valid values of N: 1 to 100.
   * 
   * @example
   * ``192.168.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The region ID of the ENI. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ENI belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be returned.
   * 
   * > Resources in the default resource group are displayed in the response regardless of how this parameter is set.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group to which the secondary ENI belongs.
   * 
   * *   To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
   * *   To query the details of primary ENIs based on the ID of a security group, call the [DescribeInstances](https://help.aliyun.com/document_detail/25506.html) operation and specify the `SecurityGroupId` parameter.
   * 
   * @example
   * sg-bp144yr32sx6ndw****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether the user of the ENI is an Alibaba Cloud service or a distributor.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The state of the ENI. Valid values:
   * 
   * *   Available: The ENI is available.
   * *   Attaching: The ENI is being attached to an instance.
   * *   InUse: The ENI is attached to an instance.
   * *   Detaching: The ENI is being detached from an instance.
   * *   Deleting: The ENI is being deleted.
   * 
   * This parameter is empty by default, which indicates that ENIs in all states are queried.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags to use for query.
   */
  tag?: DescribeNetworkInterfacesRequestTag[];
  /**
   * @remarks
   * The type of the ENI. Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the ENI is associated.
   * 
   * @example
   * vsw-bp16usj2p27htro3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the elastic network interface (ENI) belongs.
   * 
   * @example
   * vsw-bp16usj2p27htro3****
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

