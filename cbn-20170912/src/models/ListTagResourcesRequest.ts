// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * You can enter a maximum of 20 tag keys.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * You can enter a maximum of 20 tag values.
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
   * The token that is used for the next query. Valid values:
   * 
   * - If this is your first query or no next query is to be sent, you do not need to specify this parameter.
   * 
   * - If a subsequent query is to be sent, set the value to the NextToken value that is returned from the last API call.
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
   * This parameter is not required for the Cen and BandwidthPackage resource types. It is required for all other resource types.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * You can enter a maximum of 20 CEN instance IDs.
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
   * **Cen**: a CEN instance.
   * 
   * **BandwidthPackage**: a bandwidth plan.
   * 
   * **TransitRouter**: a transit router.
   * 
   * **TransitRouterVpcAttachment**: a VPC connection.
   * 
   * **TransitRouterVbrAttachment**: a VBR connection.
   * 
   * **TransitRouterPeerAttachment**: an inter-region connection.
   * 
   * **TransitRouterVpnAttachment**: a VPN connection.
   * 
   * **TransitRouterRouteTable**: a route table.
   * 
   * **Flowlog**: a flow log.
   * 
   * **TransitRouterMulticastDomain**: a multicast domain.
   * 
   * This parameter is required.
   * 
   * @example
   * cen
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the CEN instance.
   * 
   * You can query a maximum of 20 tags.
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

