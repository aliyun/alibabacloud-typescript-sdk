// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you specify both the All and TagKey.N parameters, the All parameter does not take effect.
   * 
   * @example
   * false
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
   * The resource IDs. You can specify at most 50 resource IDs in each call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. valid value:
   * 
   * - service
   * - serviceinstance
   * - artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify 1 to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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

