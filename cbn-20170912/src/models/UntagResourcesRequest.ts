// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. Valid values:
   * 
   * - **true**: Yes
   * - **false** (default): No
   * 
   * > This parameter takes effect only when the **TagKey.N** parameter is empty.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is not required when the resource type is Cen or BandwidthPackage. For all other resource types, this parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource ID. The value of **N** ranges from **1** to **50**.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Resource type. Valid values:
   * 
   * **Cen**: Cloud Enterprise Network (CEN).
   * 
   * **BandwidthPackage**: Bandwidth package.
   * 
   * **TransitRouter**: Transit router.
   * 
   * **TransitRouterVpcAttachment**: VPC attachment.
   * 
   * **TransitRouterVbrAttachment**: VBR attachment.
   * 
   * **TransitRouterPeerAttachment**: Inter-region attachment.
   * 
   * **TransitRouterVpnAttachment**: VPN attachment.
   * 
   * **TransitRouterRouteTable**: Route table.
   * 
   * **Flowlog**: Flow log.
   * 
   * **TransitRouterMulticastDomain**: Multicast domain.
   * 
   * This parameter is required.
   * 
   * @example
   * cen
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * A tag key can contain up to 64 characters. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * If you specify multiple tag keys, the logical relation among these tag keys is **OR**. Valid values of **N**: **1** to **20**.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

