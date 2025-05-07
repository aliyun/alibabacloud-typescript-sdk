// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag } from "./DescribeDbinstanceByTagsResponseBodyItemsDbinstanceTag";


export class DescribeDBInstanceByTagsResponseBodyItems extends $dara.Model {
  DBInstanceTag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceTag: 'DBInstanceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceTag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceTag)) {
      $dara.Model.validateArray(this.DBInstanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

