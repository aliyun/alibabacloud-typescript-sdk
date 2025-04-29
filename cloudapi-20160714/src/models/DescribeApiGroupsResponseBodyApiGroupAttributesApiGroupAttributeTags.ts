// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo } from "./DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo";


export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags extends $dara.Model {
  tagInfo?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

