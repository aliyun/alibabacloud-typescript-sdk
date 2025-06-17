// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagResourcesResponseBodyTagResourcesTag } from "./DescribeTagResourcesResponseBodyTagResourcesTag";


export class DescribeTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * example.com
   */
  resourceId?: string;
  /**
   * @remarks
   * The key-value pair of the tag.
   */
  tag?: DescribeTagResourcesResponseBodyTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagResourcesResponseBodyTagResourcesTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

