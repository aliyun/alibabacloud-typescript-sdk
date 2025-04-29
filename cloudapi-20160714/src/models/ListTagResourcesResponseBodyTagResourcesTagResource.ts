// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 285bb759342649a1b70c2093a772e087
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * apiGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * zhangsan
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

