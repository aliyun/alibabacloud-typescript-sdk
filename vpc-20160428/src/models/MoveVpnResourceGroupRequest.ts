// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveVpnResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-8vb3lzn7biepthri8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource.
   * 
   * *   **VpnGateway**: VPN gateway
   * 
   *     After you move a VPN gateway to a new resource group, the following associated resources are also moved to the new resource group: IPsec servers, SSL servers, SSL client certificates, and IPsec-VPN connections.
   * 
   * *   **CustomerGateway**: customer gateway
   * 
   * *   **VpnAttachment**: IPsec-VPN connection
   * 
   *     An IPsec-VPN connection associated with a transit router or not associate with a resource.
   * 
   * This parameter is required.
   * 
   * @example
   * VpnGateway
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

