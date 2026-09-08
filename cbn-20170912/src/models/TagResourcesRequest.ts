// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You can specify multiple tag keys. Valid values of **N**: **1** to **20**.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Each tag key corresponds to one tag value. Valid values of **N**: **1** to **20**.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TagValue
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

export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource instance.
   * 
   * This parameter is not required when the resource type is Cen or BandwidthPackage. This parameter is required for all other resource types.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources.
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
   * **Cen**: CEN instance.
   * 
   * **BandwidthPackage**: bandwidth package instance.
   * 
   * **TransitRouter**: transit router instance.
   * 
   * **TransitRouterVpcAttachment**: VPC connection instance.
   * 
   * **TransitRouterVbrAttachment**: VBR connection instance.
   * 
   * **TransitRouterPeerAttachment**: inter-region connection instance.
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
   * The tag list.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

