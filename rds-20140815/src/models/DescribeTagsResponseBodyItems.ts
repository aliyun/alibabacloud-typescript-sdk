// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyItemsTagInfos } from "./DescribeTagsResponseBodyItemsTagInfos";


export class DescribeTagsResponseBodyItems extends $dara.Model {
  tagInfos?: DescribeTagsResponseBodyItemsTagInfos[];
  static names(): { [key: string]: string } {
    return {
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyItemsTagInfos },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfos)) {
      $dara.Model.validateArray(this.tagInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

