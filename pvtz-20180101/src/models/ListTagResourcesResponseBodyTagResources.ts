// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID, which is a zone ID.
   * 
   * @example
   * 97fe9321a476d0861f624d3f738d****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ZONE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * daily
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

