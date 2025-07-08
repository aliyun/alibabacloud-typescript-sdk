// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesNewRequestTag } from "./TagResourcesNewRequestTag";


export class TagResourcesNewRequest extends $dara.Model {
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceId?: string[];
  resourceIdListString?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  tag?: TagResourcesNewRequestTag[];
  tagListString?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceIdListString: 'ResourceIdListString',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      tagListString: 'TagListString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceIdListString: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesNewRequestTag },
      tagListString: 'string',
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

