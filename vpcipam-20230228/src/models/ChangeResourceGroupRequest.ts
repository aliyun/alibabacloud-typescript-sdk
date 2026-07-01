// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek3ctkufaw****
   */
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the hosted region. Call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource whose resource group you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-uq5dcfc2eqhpf4****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Ipam: an IPAM instance
   * 
   * - IpamScope: an IPAM scope
   * 
   * - IpamPool: an IPAM pool
   * 
   * - IpamResourceDiscovery: an IPAM resource discovery
   * 
   * This parameter is required.
   * 
   * @example
   * Ipam
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

