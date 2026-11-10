// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. Valid values:
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > This parameter takes effect only when **TagKey.N** is left empty.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is not required when the resource type is Cen or BandwidthPackage. This parameter is required for other resource types.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. **N** ranges from **1** to **50**.
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
   * The resource type. Valid values:
   * 
   * **Cen**: Cloud Enterprise Network (CEN) instance.
   * 
   * **BandwidthPackage**: bandwidth plan instance.
   * 
   * **TransitRouter**: transit router instance.
   * 
   * **TransitRouterVpcAttachment**: VPC connection instance.
   * 
   * **TransitRouterVbrAttachment**: VBR connection instance.
   * 
   * **TransitRouterPeerAttachment**: cross-region connection instance.
   * 
   * **TransitRouterVpnAttachment**: VPN connection instance.
   * 
   * **TransitRouterRouteTable**: route table instance.
   * 
   * **Flowlog**: flow log instance.
   * 
   * **TransitRouterMulticastDomain**: multicast domain instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * A tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * If you specify multiple tag keys, they are evaluated by using the **OR** logical operator. **N** ranges from **1** to **20**.
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

