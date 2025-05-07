// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo } from "./DescribeDbinstanceNetInfoForChannelResponseBodyDbinstanceNetInfosDbinstanceNetInfo";


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos extends $dara.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
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

