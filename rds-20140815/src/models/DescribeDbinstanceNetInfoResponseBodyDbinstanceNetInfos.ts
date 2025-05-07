// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosDbinstanceNetInfo";


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceNetInfo)) {
      $dara.Model.validateArray(this.DBInstanceNetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

