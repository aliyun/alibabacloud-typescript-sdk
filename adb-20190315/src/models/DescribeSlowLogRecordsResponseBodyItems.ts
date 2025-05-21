// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord } from "./DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord";


export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  slowLogRecord?: DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord[];
  static names(): { [key: string]: string } {
    return {
      slowLogRecord: 'SlowLogRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slowLogRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord },
    };
  }

  validate() {
    if(Array.isArray(this.slowLogRecord)) {
      $dara.Model.validateArray(this.slowLogRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

