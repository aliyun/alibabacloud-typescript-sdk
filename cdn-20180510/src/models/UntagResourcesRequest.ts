// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. Valid values:
   * 
   * *   **true**: yes.
   * *   **false**: no.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs in the list.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resources from which you want to remove tags. Set this parameter to **DOMAIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 tag keys in the list.
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

