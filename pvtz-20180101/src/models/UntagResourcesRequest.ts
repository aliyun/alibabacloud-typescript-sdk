// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags of the specified zones. Valid values:
   * 
   * *   true: removes all tags of the specified zones.
   * *   false: removes only the tags with the specified tag keys.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resource IDs, which are zone IDs. You can specify up to 50 zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738dcc38
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. The value of ResourceType can only be ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags that you want to remove. You can specify up to 20 tag keys.
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

