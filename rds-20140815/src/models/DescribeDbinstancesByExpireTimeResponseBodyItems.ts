// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime } from "./DescribeDbinstancesByExpireTimeResponseBodyItemsDbinstanceExpireTime";


export class DescribeDBInstancesByExpireTimeResponseBodyItems extends $dara.Model {
  DBInstanceExpireTime?: DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceExpireTime: 'DBInstanceExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceExpireTime: { 'type': 'array', 'itemType': DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceExpireTime)) {
      $dara.Model.validateArray(this.DBInstanceExpireTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

