// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysForExpressConnectRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the tag name. Fuzzy match is supported. You can enter a keyword to query all tags that contain the keyword.
   * 
   * @example
   * keyword
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResult?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If this is the first query or there is no next query, leave this parameter empty.
   * - If there is a next query, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. You can specify up to 20 resource IDs.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * - **PHYSICALCONNECTION**: Express Connect circuit instance.
   * - **VIRTUALBORDERROUTER**: Virtual Border Router.
   * - **ROUTERINTERFACE**: VBR uplink.
   * - **TRAFFICQOS**: QoS policy.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
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
      keyword: 'string',
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

