// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. Valid values:
   * 
   * - true: Removes all tags from the specified zones.
   * 
   * - false: Removes only the tags that have the specified tag keys (TagKey.N).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The language of the return value. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * A list of resource IDs, which are the zone IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738dcc38
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tag keys. You can specify up to 20 tag keys.
   * 
   * @example
   * env
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      lang: 'string',
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

