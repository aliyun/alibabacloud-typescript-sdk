// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveVpnResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-8vb3lzn7biepthri8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the new resource group to which the resource belongs.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The resource type. Valid values:
   * 
   * - **VpnGateway**: VPN gateway instance.
   * 
   *   After you change the resource group of a VPN gateway instance, the resource group of the IPsec server, SSL server, SSL client certificate, and IPsec-VPN connections (IPsec-VPN connections associated with the VPN gateway instance) under the VPN gateway instance is also changed.
   * - **CustomerGateway**: customer gateway instance.
   * - **VpnAttachment**: IPsec-VPN connection instance.
   *     
   *   This refers to IPsec-VPN connections associated with a transit router instance or IPsec-VPN connections that are not associated with any resource.
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

