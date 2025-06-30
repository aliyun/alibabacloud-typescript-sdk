// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesRequestTag } from "./TagResourcesRequestTag";


export class TagResourcesRequest extends $dara.Model {
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
   * Specifies whether to replace the original tags added to the resources. Valid values:
   * 
   * *   True: replaces the original tags.
   * *   False (default): appends the specified one or more tags to the original tags. If a new tag has the same key but a different value from an original tag, the new tag replaces the original tag.
   * 
   * @example
   * true
   */
  overWrite?: boolean;
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
   * The resource type. Valid value: ZONE.
   * 
   * This parameter is required.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add to the resources.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      overWrite: 'OverWrite',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      overWrite: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

