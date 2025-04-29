// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag } from "./DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag";


export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags extends $dara.Model {
  tag?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag },
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

