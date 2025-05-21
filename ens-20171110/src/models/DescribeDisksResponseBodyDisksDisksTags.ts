// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDisksTagsTags } from "./DescribeDisksResponseBodyDisksDisksTagsTags";


export class DescribeDisksResponseBodyDisksDisksTags extends $dara.Model {
  tags?: DescribeDisksResponseBodyDisksDisksTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisksTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

