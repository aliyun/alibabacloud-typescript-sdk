// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * example.com
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * site
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

