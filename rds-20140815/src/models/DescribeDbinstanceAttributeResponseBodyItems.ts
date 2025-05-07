// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttribute";


export class DescribeDBInstanceAttributeResponseBodyItems extends $dara.Model {
  DBInstanceAttribute?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAttribute)) {
      $dara.Model.validateArray(this.DBInstanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

