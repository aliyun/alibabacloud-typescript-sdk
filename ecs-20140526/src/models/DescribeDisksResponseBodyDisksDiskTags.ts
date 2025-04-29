// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDiskTagsTag } from "./DescribeDisksResponseBodyDisksDiskTagsTag";


export class DescribeDisksResponseBodyDisksDiskTags extends $dara.Model {
  tag?: DescribeDisksResponseBodyDisksDiskTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskTagsTag },
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

