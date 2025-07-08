// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesRequestTag } from "./ListTagResourcesRequestTag";


export class ListTagResourcesRequest extends $dara.Model {
  category?: string;
  nextToken?: string;
  ownerId?: number;
  pageSize?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  scope?: string;
  tag?: ListTagResourcesRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      tag: 'Tag',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      nextToken: 'string',
      ownerId: 'number',
      pageSize: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scope: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      tagOwnerUid: 'number',
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

