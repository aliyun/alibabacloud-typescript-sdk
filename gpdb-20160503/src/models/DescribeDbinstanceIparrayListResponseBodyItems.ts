// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray } from "./DescribeDbinstanceIparrayListResponseBodyItemsDbinstanceIparray";


export class DescribeDBInstanceIPArrayListResponseBodyItems extends $dara.Model {
  DBInstanceIPArray?: DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArray: 'DBInstanceIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArray: { 'type': 'array', 'itemType': DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceIPArray)) {
      $dara.Model.validateArray(this.DBInstanceIPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

