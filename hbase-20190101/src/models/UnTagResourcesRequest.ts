// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. If TagKey is specified, tags are deleted only by TagKey. Valid values: true and false. If this parameter is set to true and TagKey is not specified, all tags are deleted.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of resource N to untag. The resource ID is the cluster ID. You can specify multiple resource IDs, such as ResourceId.2 and ResourceId.3. N is a positive integer.
   * 
   * This parameter is required.
   * 
   * @example
   * bds-bp15e022622fk0w1
   */
  resourceId?: string[];
  /**
   * @remarks
   * The key of tag N to delete. You can specify multiple tag keys, such as TagKey.2 and TagKey.3. N is a positive integer.
   * 
   * @example
   * key1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

