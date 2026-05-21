// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTags extends $dara.Model {
  /**
   * @example
   * any_string
   */
  key?: string;
  /**
   * @example
   * any_string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @example
   * Custom
   */
  category?: string;
  resourceIds?: string[];
  /**
   * @example
   * 1062017779051424
   */
  tagOwnerUid?: number;
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      category: 'category',
      resourceIds: 'resourceIds',
      tagOwnerUid: 'tagOwnerUid',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      category: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      tagOwnerUid: 'number',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

