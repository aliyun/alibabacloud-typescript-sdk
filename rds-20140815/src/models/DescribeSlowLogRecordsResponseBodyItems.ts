// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord } from "./DescribeSlowLogRecordsResponseBodyItemsSqlslowRecord";


export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  SQLSlowRecord?: DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowRecord: 'SQLSlowRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLSlowRecord)) {
      $dara.Model.validateArray(this.SQLSlowRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

