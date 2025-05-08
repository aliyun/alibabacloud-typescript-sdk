// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. This parameter takes effect only if you do not specify TagKey.N. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags. Valid values of N: 1 to 20.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

