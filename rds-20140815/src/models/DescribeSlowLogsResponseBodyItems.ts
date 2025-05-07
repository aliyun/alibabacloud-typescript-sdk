// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogsResponseBodyItemsSQLSlowLog } from "./DescribeSlowLogsResponseBodyItemsSqlslowLog";


export class DescribeSlowLogsResponseBodyItems extends $dara.Model {
  SQLSlowLog?: DescribeSlowLogsResponseBodyItemsSQLSlowLog[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowLog: 'SQLSlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowLog: { 'type': 'array', 'itemType': DescribeSlowLogsResponseBodyItemsSQLSlowLog },
    };
  }

  validate() {
    if(Array.isArray(this.SQLSlowLog)) {
      $dara.Model.validateArray(this.SQLSlowLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

