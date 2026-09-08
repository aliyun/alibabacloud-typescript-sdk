// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * A tag key can contain up to 64 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * A tag value can contain up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag values at a time.
   * 
   * @example
   * Bp
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a next query token exists. Valid values:
   * 
   * - If this is the first query or no next query exists, you do not need to specify this parameter.
   * 
   * - If a next query exists, set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The CEN instance ID.
   * 
   * You can specify up to 20 CEN instance IDs at a time.
   * 
   * @example
   * cen-8z69wtwqel33lq****
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
   * The tag information of the CEN instance.
   * 
   * You can query up to 20 tags at a time.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
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
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

