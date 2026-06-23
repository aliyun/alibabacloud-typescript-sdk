// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the cloud resource instance.
   * 
   * > A resource group is a mechanism for managing resources by group within an Alibaba Cloud account. Resource groups help you address complex resource grouping and authorization management issues within a single cloud account. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cloud resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the cloud resource for which you want to modify the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-hp31psbg8ec3023s6****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the cloud resource for which you want to modify the resource group. Valid values:
   * 
   * - **Vpc**: virtual private cloud (VPC)
   * - **Eip**: elastic IP address (EIP)
   * - **BandwidthPackage**: Internet Shared Bandwidth
   * - **PrefixList**: prefix list
   * - **PublicIpAddressPool**: IPAM pool
   * - **FlowLog**: flow log
   * - **HaVip**: high-availability (HA) virtual IP address
   * - **TrafficMirrorFilter**: traffic mirror filter
   * - **TrafficMirrorSession**: traffic mirror session
   * - **IPv4Gateway**: IPv4 gateway
   * - **IPv6Gateway**: IPv6 gateway
   * - **IPv6Address**: IPv6 address
   * - **DhcpOptionsSet**: DHCP options set
   * - **GatewayEndpoint**: gateway endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

