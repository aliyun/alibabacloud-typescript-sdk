// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagDcdnResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the resource. Valid values of N: **1** to **50**.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **DOMAIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag. Valid values of N: **1** to **20**.
   * 
   * @example
   * env
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

