// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesSystemTagsRequestTag } from "./TagResourcesSystemTagsRequestTag";


export class TagResourcesSystemTagsRequest extends $dara.Model {
  ownerId?: number;
  prodCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceType?: string;
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesSystemTagsRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
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
      ownerId: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scope: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesSystemTagsRequestTag },
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

