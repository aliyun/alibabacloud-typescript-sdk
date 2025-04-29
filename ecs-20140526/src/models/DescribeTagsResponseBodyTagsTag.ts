// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyTagsTagResourceTypeCount } from "./DescribeTagsResponseBodyTagsTagResourceTypeCount";


export class DescribeTagsResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The number of resource types.
   */
  resourceTypeCount?: DescribeTagsResponseBodyTagsTagResourceTypeCount;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCount: 'ResourceTypeCount',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCount: DescribeTagsResponseBodyTagsTagResourceTypeCount,
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    if(this.resourceTypeCount && typeof (this.resourceTypeCount as any).validate === 'function') {
      (this.resourceTypeCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

