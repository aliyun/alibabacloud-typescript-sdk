// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot exceed 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag values.
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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query and no next queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the resource is deployed.
   * 
   * You can ignore this parameter if ResourceType is set to Cen or BandwidthPackage.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the CEN instances.
   * 
   * You can specify at most 20 IDs in each call.
   * 
   * @example
   * cen-8z69wtwqel33lq****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource to which you want to add the tag. Valid values:
   * 
   * **Cen**: CEN instance
   * 
   * **BandwidthPackage**: bandwidth plan
   * 
   * **TransitRouter**: transit router
   * 
   * **TransitRouterVpcAttachment**: virtual private cloud (VPC) connection
   * 
   * **TransitRouterVbrAttachment**: virtual border router (VBR) connection
   * 
   * **TransitRouterPeerAttachment**: inter-region connection
   * 
   * **TransitRouterVpnAttachment**: VPN connection
   * 
   * **TransitRouterRouteTable**: route table
   * 
   * **Flowlog**: flow log
   * 
   * **TransitRouterMulticastDomain**: multicast domain
   * 
   * This parameter is required.
   * 
   * @example
   * cen
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the tags that are added to the CEN instance.
   * 
   * You can query at most 20 tags in each call.
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

