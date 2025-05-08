// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resources.
   * 
   * @example
   * i-5zy93g7z1hnkdmav84joxyzgn
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * test_tag_key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * CLUSTER
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

