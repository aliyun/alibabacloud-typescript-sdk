// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Custom
   */
  category?: string;
  resourceIds?: string[];
  /**
   * @example
   * INSTANCe
   */
  resourceType?: string;
  tagKeys?: string[];
  /**
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

