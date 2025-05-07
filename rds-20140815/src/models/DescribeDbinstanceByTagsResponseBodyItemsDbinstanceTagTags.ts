// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag } from "./DescribeDbinstanceByTagsResponseBodyItemsDbinstanceTagTagsTag";


export class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags extends $dara.Model {
  tag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag },
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

