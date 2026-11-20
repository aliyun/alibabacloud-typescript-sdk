// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource category.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * INSTANCe
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   * To delete tags, provide the corresponding tag keys.
   */
  tagKeys?: string[];
  /**
   * @remarks
   * The account ID of the tag owner.
   * 
   * @example
   * 1062017779051424
   */
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      category: 'category',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
      tagKeys: 'tagKeys',
      tagOwnerUid: 'tagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      category: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

