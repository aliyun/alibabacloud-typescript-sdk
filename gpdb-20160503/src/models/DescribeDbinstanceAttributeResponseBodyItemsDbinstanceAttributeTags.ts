// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeTagsTag";


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags extends $dara.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag },
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

